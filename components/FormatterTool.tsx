"use client";
import { useState, useRef, useCallback, useEffect } from "react";
import { applyFmt, getReadability, TEMPLATES, FONT_STYLES, EMOJIS } from "@/lib/formatter";

type Tab = "write" | "templates" | "fonts" | "emojis";

const TOOLBAR_ROWS = [
  [
    { fmt: "bold",       label: "𝗕",   tip: "Bold" },
    { fmt: "italic",     label: "𝘐",   tip: "Italic" },
    { fmt: "boldItalic", label: "𝗕𝘐",  tip: "Bold Italic" },
    { fmt: "strike",     label: "S̶",   tip: "Strikethrough" },
    { fmt: "underline",  label: "U̲",   tip: "Underline" },
  ],
  [
    { fmt: "bullet1",  label: "•",   tip: "Bullet (•)" },
    { fmt: "bullet2",  label: "◆",   tip: "Diamond (◆)" },
    { fmt: "bullet3",  label: "▶",   tip: "Arrow (▶)" },
    { fmt: "bullet4",  label: "✅",  tip: "Check (✅)" },
    { fmt: "numbered", label: "1.",  tip: "Numbered list" },
  ],
  [
    { fmt: "divider",       label: "—",   tip: "Divider" },
    { fmt: "doubleDivider", label: "══",  tip: "Double divider" },
    { fmt: "caps",          label: "AA",  tip: "UPPERCASE" },
    { fmt: "lower",         label: "aa",  tip: "lowercase" },
    { fmt: "titleCase",     label: "Tt",  tip: "Title Case" },
    { fmt: "smallCaps",     label: "ꜱᴄ", tip: "Sᴍᴀʟʟ Cᴀᴘs" },
    { fmt: "widen",         label: "Ａ",  tip: "Wide text" },
    { fmt: "alternate",     label: "aA",  tip: "aLtErNaTe" },
  ],
];

function Toast({ msg, show }: { msg: string; show: boolean }) {
  return (
    <div
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 px-5 py-2.5 rounded-full text-sm font-semibold text-white shadow-xl transition-all duration-300 z-50 pointer-events-none whitespace-nowrap ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
      style={{ background: "var(--ink)" }}
    >
      {msg}
    </div>
  );
}

export default function FormatterTool() {
  const [text, setText] = useState("");
  const [tab, setTab] = useState<Tab>("write");
  const [undoStack, setUndoStack] = useState<string[]>([]);
  const [readOn, setReadOn] = useState(false);
  const [hookOn, setHookOn] = useState(false);
  const [toast, setToast] = useState({ msg: "", show: false });
  const [activeBtn, setActiveBtn] = useState("");
  const [emojiQuery, setEmojiQuery] = useState("");
  const editorRef = useRef<HTMLTextAreaElement>(null);
  const lastCursorRef = useRef(0);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const showToast = useCallback((msg: string) => {
    clearTimeout(toastTimer.current);
    setToast({ msg, show: true });
    toastTimer.current = setTimeout(() => setToast((t) => ({ ...t, show: false })), 2000);
  }, []);

  const pushUndo = useCallback((val: string) => {
    setUndoStack((s) => [...s.slice(-49), val]);
  }, []);

  const applyFormat = useCallback((fmt: string) => {
    const el = editorRef.current;
    if (!el) return;
    const start = el.selectionStart;
    const end = el.selectionEnd;
    const selected = text.slice(start, end);
    const noSelNeeded = ["divider","doubleDivider","bullet1","bullet2","bullet3","bullet4","numbered"].includes(fmt);
    if (!selected.trim() && !noSelNeeded) { showToast("⚠️ Select some text first!"); return; }
    pushUndo(text);
    const formatted = applyFmt(fmt, selected || "");
    const newText = text.slice(0, start) + formatted + text.slice(end);
    setText(newText);
    setActiveBtn(fmt);
    setTimeout(() => setActiveBtn(""), 300);
    requestAnimationFrame(() => {
      if (el) {
        el.selectionStart = start;
        el.selectionEnd = start + formatted.length;
        el.focus();
      }
    });
  }, [text, pushUndo, showToast]);

  const handleUndo = useCallback(() => {
    if (!undoStack.length) { showToast("Nothing to undo"); return; }
    setText(undoStack[undoStack.length - 1]);
    setUndoStack((s) => s.slice(0, -1));
    showToast("↩ Undone");
  }, [undoStack, showToast]);

  const handleCopy = useCallback(async () => {
    if (!text.trim()) { showToast("Nothing to copy!"); return; }
    try {
      await navigator.clipboard.writeText(text);
      showToast("✅ Copied to clipboard!");
    } catch {
      showToast("❌ Copy failed — try Ctrl+C");
    }
  }, [text, showToast]);

  const handleClean = useCallback(() => {
    pushUndo(text);
    setText(text.replace(/\n{3,}/g, "\n\n").replace(/[ \t]+$/gm, ""));
    showToast("✨ Spacing cleaned!");
  }, [text, pushUndo, showToast]);

  const insertEmoji = useCallback((emoji: string) => {
    const pos = lastCursorRef.current;
    pushUndo(text);
    const newText = text.slice(0, pos) + emoji + text.slice(pos);
    setText(newText);
    lastCursorRef.current = pos + emoji.length;
    showToast(`${emoji} inserted!`);
  }, [text, pushUndo, showToast]);

  const loadTemplate = useCallback((body: string) => {
    pushUndo(text);
    setText(body);
    setTab("write");
    showToast("📋 Template loaded!");
    requestAnimationFrame(() => editorRef.current?.focus());
  }, [text, pushUndo, showToast]);

  const applyFont = useCallback((fmt: string) => {
    const el = editorRef.current;
    if (!el) return;
    const start = el.selectionStart;
    const end = el.selectionEnd;
    const selected = text.slice(start, end);
    if (!selected.trim()) { showToast("⚠️ Select text first!"); return; }
    pushUndo(text);
    const formatted = applyFmt(fmt, selected);
    setText(text.slice(0, start) + formatted + text.slice(end));
    showToast("✅ Style applied!");
  }, [text, pushUndo, showToast]);

  const read = readOn ? getReadability(text) : null;
  const charColor = text.length > 2800 ? "#e55" : text.length > 2400 ? "#fa0" : "var(--accent)";
  const filteredEmojis = emojiQuery ? EMOJIS.filter(e => e.includes(emojiQuery)) : EMOJIS;

  // Track cursor for emoji insertion
  const trackCursor = () => { if (editorRef.current) lastCursorRef.current = editorRef.current.selectionStart; };

  return (
    <section className="py-24 px-[5vw] border-t border-b" id="formatter" style={{ background: "var(--paper-warm)", borderColor: "var(--border)" }}>
      <div className="max-w-[860px] mx-auto">
        {/* Header */}
        <div className="text-center mb-10 reveal">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "var(--accent)" }}>Free tool — no signup</p>
          <h2 className="text-4xl md:text-5xl leading-tight tracking-tight mb-3" style={{ fontFamily: "'Instrument Serif', serif", color: "var(--ink)" }}>
            Try it <em className="italic" style={{ color: "var(--accent)" }}>right now</em>
          </h2>
          <p className="text-base" style={{ color: "var(--ink-mid)" }}>Write your post, format it, copy it. 100% free in your browser.</p>
        </div>

        {/* Tool card */}
        <div className="reveal rounded-2xl overflow-hidden" style={{ background: "var(--paper-card)", border: "1px solid var(--border)", boxShadow: "0 8px 40px rgba(10,10,15,0.12)" }}>
          {/* Topbar */}
          <div className="flex items-center gap-3 px-5 py-3 border-b" style={{ background: "var(--paper-warm)", borderColor: "var(--border)" }}>
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-400" />
              <span className="w-3 h-3 rounded-full bg-yellow-400" />
              <span className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <span className="text-xs ml-1.5" style={{ color: "var(--ink-soft)" }}>LinkedIn Text Formatter — Live Tool</span>
            <span className="ml-auto font-mono text-xs font-semibold" style={{ color: charColor }}>{text.length} / 3000</span>
          </div>

          {/* Tabs */}
          <div className="flex border-b" style={{ background: "var(--paper-warm)", borderColor: "var(--border)" }}>
            {(["write","templates","fonts","emojis"] as Tab[]).map((t) => {
              const labels: Record<Tab, string> = { write: "✏️ Write", templates: "📋 Templates", fonts: "🔤 Fonts", emojis: "😊 Emojis" };
              return (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className="px-4 py-2.5 text-sm font-semibold border-b-2 transition-all"
                  style={{
                    borderBottomColor: tab === t ? "var(--accent)" : "transparent",
                    color: tab === t ? "var(--accent)" : "var(--ink-soft)",
                    background: "transparent",
                  }}
                >
                  {labels[t]}
                </button>
              );
            })}
          </div>

          <div className="p-5">
            {/* ── WRITE TAB ── */}
            {tab === "write" && (
              <>
                {/* Toolbar */}
                <div className="flex flex-wrap items-center gap-1 p-2.5 rounded-xl border mb-4" style={{ background: "var(--paper-warm)", borderColor: "var(--border)" }}>
                  {TOOLBAR_ROWS.map((group, gi) => (
                    <div key={gi} className="flex items-center gap-1">
                      {gi > 0 && <div className="w-px h-5 mx-1" style={{ background: "var(--border)" }} />}
                      {group.map((btn) => (
                        <button
                          key={btn.fmt}
                          onClick={() => applyFormat(btn.fmt)}
                          title={btn.tip}
                          className="flex items-center justify-center min-w-[34px] h-8 px-1.5 rounded-lg border transition-all text-sm font-bold hover:-translate-y-px active:scale-90"
                          style={{
                            border: activeBtn === btn.fmt ? "1px solid rgba(10,102,194,.3)" : "1px solid transparent",
                            background: activeBtn === btn.fmt ? "var(--accent-light)" : "transparent",
                            color: activeBtn === btn.fmt ? "var(--accent)" : "var(--ink-mid)",
                          }}
                        >
                          {btn.label}
                        </button>
                      ))}
                    </div>
                  ))}
                  <div className="w-px h-5 mx-1" style={{ background: "var(--border)" }} />
                  <button onClick={handleClean} title="Clean up spacing" className="flex items-center justify-center min-w-[34px] h-8 rounded-lg border border-transparent text-sm hover:bg-gray-100 transition-all" style={{ color: "var(--ink-mid)" }}>🧹</button>
                  <button onClick={() => setReadOn(r => !r)} title="Readability score" className="flex items-center justify-center h-8 px-2 rounded-lg border border-transparent text-xs font-semibold transition-all" style={{ color: readOn ? "var(--accent)" : "var(--ink-mid)", background: readOn ? "var(--accent-light)" : "transparent" }}>📊 Score</button>
                  <button onClick={() => setHookOn(h => !h)} title="Hook preview" className="flex items-center justify-center h-8 px-2 rounded-lg border border-transparent text-xs font-semibold transition-all" style={{ color: hookOn ? "var(--accent)" : "var(--ink-mid)", background: hookOn ? "var(--accent-light)" : "transparent" }}>👁 Hook</button>
                </div>

                <p className="text-xs mb-3" style={{ color: "var(--ink-soft)" }}>💡 Select text → click a format button to transform it</p>

                {/* Hook preview */}
                {hookOn && (
                  <div className="rounded-xl p-3.5 mb-3 slide-down" style={{ background: "var(--accent-light)", border: "1px solid rgba(10,102,194,.2)" }}>
                    <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: "var(--accent)" }}>👁 Hook Preview — first 150 chars</p>
                    <p className="text-sm leading-relaxed whitespace-pre-wrap break-words" style={{ color: "var(--ink)" }}>{text.slice(0, 150) || "(start writing to see your hook…)"}</p>
                    <p className="text-xs mt-2" style={{ color: "var(--ink-soft)" }}>
                      {text.slice(0, 150).length} chars · {(text.slice(0,150).match(/\b\w+\b/g)||[]).length} words
                      {text.length > 240 && <span className="ml-2 text-orange-500">⚠️ "See more" cuts at ~240 chars</span>}
                    </p>
                  </div>
                )}

                {/* Editor */}
                <textarea
                  ref={editorRef}
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  onBlur={trackCursor}
                  onMouseUp={trackCursor}
                  onKeyUp={trackCursor}
                  className="w-full rounded-xl p-4 text-sm leading-relaxed resize-y focus:ring-2 focus:ring-blue-400/30 transition-all"
                  style={{ minHeight: 180, border: "1px solid var(--border)", background: "var(--paper)", color: "var(--ink)", fontFamily: "'DM Sans', sans-serif" }}
                  placeholder={"Write or paste your LinkedIn post here…\n\nSelect text then click a format button above!"}
                  spellCheck
                  rows={8}
                />

                {/* Readability */}
                {readOn && read && (
                  <div className="mt-3 rounded-xl p-4 slide-down" style={{ background: "var(--paper-warm)", border: "1px solid var(--border)" }}>
                    <div className="flex flex-wrap gap-4 mb-3">
                      {[["Chars", read.chars], ["Words", read.words], ["Lines", read.lines], ["Read time", read.readTime], ["Grade", read.grade]].map(([l, v]) => (
                        <div key={l}>
                          <div className="text-xs font-bold uppercase tracking-wider mb-0.5" style={{ color: "var(--ink-soft)" }}>{l}</div>
                          <div className="text-lg font-bold font-mono" style={{ color: "var(--ink)" }}>{v}</div>
                        </div>
                      ))}
                    </div>
                    <div className="h-2 rounded-full overflow-hidden mb-1" style={{ background: "var(--border)" }}>
                      <div className="h-full rounded-full transition-all duration-500" style={{ width: `${read.pct}%`, background: "linear-gradient(90deg, #e55, #fa0, #1a8a50)" }} />
                    </div>
                    <p className="text-xs font-semibold" style={{ color: "var(--ink-mid)" }}>{read.grade} — {read.tip}</p>
                  </div>
                )}

                {/* Actions */}
                <div className="flex items-center gap-2 mt-3 flex-wrap">
                  <button onClick={() => { pushUndo(text); setText(""); }} className="px-4 py-2 rounded-full text-sm font-semibold border transition-all hover:border-blue-400" style={{ color: "var(--ink-mid)", borderColor: "var(--border)", background: "var(--paper-card)" }}>🗑 Clear</button>
                  <button onClick={handleUndo} className="px-4 py-2 rounded-full text-sm font-semibold border transition-all hover:border-blue-400" style={{ color: "var(--ink-mid)", borderColor: "var(--border)", background: "var(--paper-card)" }}>↩ Undo</button>
                  <button onClick={handleCopy} className="ml-auto px-6 py-2 rounded-full text-sm font-semibold text-white transition-all hover:opacity-90 hover:-translate-y-px" style={{ background: "var(--accent)", boxShadow: "0 2px 12px rgba(10,102,194,.25)" }}>📋 Copy to Clipboard</button>
                </div>
              </>
            )}

            {/* ── TEMPLATES TAB ── */}
            {tab === "templates" && (
              <>
                <p className="text-sm mb-4" style={{ color: "var(--ink-soft)" }}>Click any template to load it into the editor</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {TEMPLATES.map((t) => (
                    <button
                      key={t.name}
                      onClick={() => loadTemplate(t.body)}
                      className="text-left rounded-xl p-4 border transition-all hover:-translate-y-0.5 hover:shadow-md"
                      style={{ background: "var(--paper)", borderColor: "var(--border)" }}
                    >
                      <div className="font-bold text-sm mb-1.5" style={{ color: "var(--ink)" }}>{t.name}</div>
                      <div className="text-xs leading-relaxed whitespace-pre-wrap" style={{ color: "var(--ink-soft)" }}>{t.body.slice(0, 80)}…</div>
                    </button>
                  ))}
                </div>
              </>
            )}

            {/* ── FONTS TAB ── */}
            {tab === "fonts" && (
              <>
                <p className="text-sm mb-4" style={{ color: "var(--ink-soft)" }}>Select text in the Write tab first, then click Apply</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {FONT_STYLES.map((f) => (
                    <div key={f.fmt} className="flex items-center justify-between rounded-xl p-3.5 border transition-all hover:border-blue-400" style={{ borderColor: "var(--border)", background: "var(--paper)" }}>
                      <span className="text-sm" style={{ color: "var(--ink)" }}>{f.preview}</span>
                      <button
                        onClick={() => applyFont(f.fmt)}
                        className="px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-all hover:bg-blue-600 hover:text-white"
                        style={{ color: "var(--accent)", borderColor: "var(--border)", background: "var(--paper-card)" }}
                      >
                        Apply {f.name}
                      </button>
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* ── EMOJIS TAB ── */}
            {tab === "emojis" && (
              <>
                <input
                  type="text"
                  value={emojiQuery}
                  onChange={(e) => setEmojiQuery(e.target.value)}
                  placeholder="Search emojis…"
                  className="w-full px-4 py-2.5 rounded-xl border text-sm mb-4 focus:ring-2 focus:ring-blue-400/30"
                  style={{ borderColor: "var(--border)", background: "var(--paper)", color: "var(--ink)" }}
                />
                <div className="flex flex-wrap gap-1">
                  {filteredEmojis.map((e) => (
                    <button
                      key={e}
                      onClick={() => insertEmoji(e)}
                      className="w-10 h-10 text-xl rounded-lg transition-all hover:bg-gray-100 flex items-center justify-center"
                      title={e}
                    >
                      {e}
                    </button>
                  ))}
                </div>
                <p className="text-xs mt-3" style={{ color: "var(--ink-soft)" }}>Click any emoji to insert at cursor position in the Write tab</p>
              </>
            )}
          </div>
        </div>
      </div>

      <Toast msg={toast.msg} show={toast.show} />
    </section>
  );
}
