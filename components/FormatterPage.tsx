"use client";
import Link from "next/link";
import { useState, useRef, useCallback } from "react";
import { applyFmt, getReadability, TEMPLATES, FONT_STYLES, EMOJIS } from "@/lib/formatter";
import { Copy, Trash2, RotateCcw, Sparkles, Eye, BarChart2, Wand2 } from "lucide-react";

type Tab = "write" | "templates" | "fonts" | "emojis";

const TOOLBAR: { fmt: string; label: string; tip: string }[][] = [
  [
    { fmt: "bold",       label: "𝗕",  tip: "Bold" },
    { fmt: "italic",     label: "𝘐",  tip: "Italic" },
    { fmt: "boldItalic", label: "𝗕𝘐", tip: "Bold Italic" },
    { fmt: "strike",     label: "S̶",  tip: "Strikethrough" },
    { fmt: "underline",  label: "U̲",  tip: "Underline" },
  ],
  [
    { fmt: "bullet1",  label: "•",  tip: "Bullet (•)" },
    { fmt: "bullet2",  label: "◆",  tip: "Diamond (◆)" },
    { fmt: "bullet3",  label: "▶",  tip: "Arrow (▶)" },
    { fmt: "bullet4",  label: "✅", tip: "Check (✅)" },
    { fmt: "numbered", label: "1.", tip: "Numbered list" },
  ],
  [
    { fmt: "divider",       label: "—",  tip: "Divider" },
    { fmt: "doubleDivider", label: "══", tip: "Double divider" },
    { fmt: "caps",          label: "AA", tip: "UPPERCASE" },
    { fmt: "lower",         label: "aa", tip: "lowercase" },
    { fmt: "titleCase",     label: "Tt", tip: "Title Case" },
    { fmt: "smallCaps",     label: "ꜱᴄ",tip: "Sᴍᴀʟʟ Cᴀᴘs" },
    { fmt: "widen",         label: "Ａ", tip: "Wide text" },
    { fmt: "alternate",     label: "aA", tip: "aLtErNaTe" },
  ],
];

function Toast({ msg, show }: { msg: string; show: boolean }) {
  return (
    <div className={`fixed bottom-6 left-1/2 -translate-x-1/2 px-5 py-2.5 rounded-full text-sm font-semibold text-white shadow-xl z-50 pointer-events-none whitespace-nowrap transition-all duration-300 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
      style={{ background: "var(--ink)" }}>
      {msg}
    </div>
  );
}

export default function FormatterPage() {
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
    toastTimer.current = setTimeout(() => setToast(t => ({ ...t, show: false })), 2000);
  }, []);

  const pushUndo = useCallback((val: string) => {
    setUndoStack(s => [...s.slice(-49), val]);
  }, []);

  const applyFormat = useCallback((fmt: string) => {
    const el = editorRef.current;
    if (!el) return;
    const start = el.selectionStart, end = el.selectionEnd;
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
      if (el) { el.selectionStart = start; el.selectionEnd = start + formatted.length; el.focus(); }
    });
  }, [text, pushUndo, showToast]);

  const handleCopy = useCallback(async () => {
    if (!text.trim()) { showToast("Nothing to copy!"); return; }
    try { await navigator.clipboard.writeText(text); showToast("✅ Copied to clipboard!"); }
    catch { showToast("❌ Copy failed — try Ctrl+C"); }
  }, [text, showToast]);

  const handleClear = useCallback(() => {
    if (!text) return;
    pushUndo(text); setText(""); showToast("Cleared");
  }, [text, pushUndo, showToast]);

  const handleUndo = useCallback(() => {
    if (!undoStack.length) { showToast("Nothing to undo"); return; }
    setText(undoStack[undoStack.length - 1]);
    setUndoStack(s => s.slice(0, -1));
    showToast("↩ Undone");
  }, [undoStack, showToast]);

  const handleClean = useCallback(() => {
    pushUndo(text);
    setText(text.replace(/\n{3,}/g, "\n\n").replace(/[ \t]+$/gm, ""));
    showToast("✨ Spacing cleaned!");
  }, [text, pushUndo, showToast]);

  const loadTemplate = useCallback((body: string) => {
    pushUndo(text); setText(body); setTab("write");
    showToast("📋 Template loaded!");
    requestAnimationFrame(() => editorRef.current?.focus());
  }, [text, pushUndo, showToast]);

  const applyFont = useCallback((fmt: string) => {
    const el = editorRef.current;
    if (!el) return;
    const start = el.selectionStart, end = el.selectionEnd;
    const selected = text.slice(start, end);
    if (!selected.trim()) { showToast("⚠️ Select text in Write tab first!"); return; }
    pushUndo(text);
    const formatted = applyFmt(fmt, selected);
    setText(text.slice(0, start) + formatted + text.slice(end));
    showToast("✅ Style applied!");
  }, [text, pushUndo, showToast]);

  const insertEmoji = useCallback((emoji: string) => {
    const pos = lastCursorRef.current;
    pushUndo(text);
    const newText = text.slice(0, pos) + emoji + text.slice(pos);
    setText(newText);
    lastCursorRef.current = pos + emoji.length;
    showToast(`${emoji} inserted!`);
    // switch back to write tab so they see the result
    setTab("write");
  }, [text, pushUndo, showToast]);

  const trackCursor = () => { if (editorRef.current) lastCursorRef.current = editorRef.current.selectionStart; };
  const read = readOn ? getReadability(text) : null;
  const charPct = Math.min((text.length / 3000) * 100, 100);
  const charColor = text.length > 2800 ? "#ef4444" : text.length > 2400 ? "#f59e0b" : "var(--accent)";
  const filteredEmojis = emojiQuery ? EMOJIS.filter(e => e.includes(emojiQuery)) : EMOJIS;

  const TABS: { id: Tab; label: string }[] = [
    { id: "write", label: "✏️ Write" },
    { id: "templates", label: "📋 Templates" },
    { id: "fonts", label: "🔤 Fonts" },
    { id: "emojis", label: "😊 Emojis" },
  ];

  return (
    <>
      {/* Main layout — sidebar on desktop, stacked on mobile */}
      <div className="flex flex-col lg:flex-row min-h-[calc(100vh-64px)]" style={{ background: "var(--paper)" }}>

        {/* ── MAIN EDITOR PANEL ── */}
        <div className="flex-1 flex flex-col p-4 md:p-6 lg:p-8 min-w-0">
          <div className="max-w-[780px] w-full mx-auto flex flex-col gap-4 flex-1">

            {/* Title */}
            <div className="flex items-start justify-between gap-4">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold tracking-tight" style={{ fontFamily: "'Instrument Serif', serif", color: "var(--ink)" }}>
                  LinkedIn Post Formatter
                </h1>
                <p className="text-sm mt-0.5" style={{ color: "var(--ink-soft)" }}>
                  Select text → click a format button. Free, works in any browser.
                </p>
              </div>
              {/* Char counter */}
              <div className="shrink-0 text-right">
                <div className="text-2xl font-bold font-mono" style={{ color: charColor }}>{text.length}</div>
                <div className="text-xs" style={{ color: "var(--ink-soft)" }}>/ 3000</div>
              </div>
            </div>

            {/* Char progress bar */}
            <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "var(--border)" }}>
              <div className="h-full rounded-full transition-all duration-300"
                style={{ width: `${charPct}%`, background: text.length > 2800 ? "#ef4444" : text.length > 2400 ? "#f59e0b" : "var(--accent)" }} />
            </div>

            {/* Tabs */}
            <div className="flex rounded-xl overflow-hidden border" style={{ borderColor: "var(--border)", background: "var(--paper-warm)" }}>
              {TABS.map(t => (
                <button key={t.id} onClick={() => setTab(t.id)}
                  className="flex-1 py-2.5 text-xs sm:text-sm font-semibold transition-all"
                  style={{
                    background: tab === t.id ? "var(--paper-card)" : "transparent",
                    color: tab === t.id ? "var(--accent)" : "var(--ink-soft)",
                    boxShadow: tab === t.id ? "0 1px 4px rgba(0,0,0,.06)" : "none",
                    borderRadius: 10,
                  }}>
                  {t.label}
                </button>
              ))}
            </div>

            {/* ── WRITE TAB ── */}
            {tab === "write" && (
              <div className="flex flex-col gap-3 flex-1">
                {/* Toolbar */}
                <div className="rounded-xl border overflow-x-auto" style={{ borderColor: "var(--border)", background: "var(--paper-warm)" }}>
                  <div className="flex flex-wrap items-center gap-1 p-2 min-w-0">
                    {TOOLBAR.map((group, gi) => (
                      <div key={gi} className="flex items-center gap-1">
                        {gi > 0 && <div className="w-px h-5 mx-0.5 shrink-0" style={{ background: "var(--border)" }} />}
                        {group.map(btn => (
                          <button key={btn.fmt} onClick={() => applyFormat(btn.fmt)} title={btn.tip}
                            className="flex items-center justify-center h-8 min-w-[32px] px-1.5 rounded-lg border text-sm font-bold transition-all active:scale-90"
                            style={{
                              border: activeBtn === btn.fmt ? "1px solid rgba(10,102,194,.3)" : "1px solid transparent",
                              background: activeBtn === btn.fmt ? "var(--accent-light)" : "transparent",
                              color: activeBtn === btn.fmt ? "var(--accent)" : "var(--ink-mid)",
                            }}>
                            {btn.label}
                          </button>
                        ))}
                      </div>
                    ))}
                    <div className="w-px h-5 mx-0.5 shrink-0" style={{ background: "var(--border)" }} />
                    <button onClick={handleClean} title="Clean spacing" className="h-8 px-2 rounded-lg text-sm transition-all hover:bg-gray-100" style={{ color: "var(--ink-mid)" }}>🧹</button>
                    <button onClick={() => setReadOn(r => !r)} title="Readability score"
                      className="h-8 px-2 rounded-lg text-xs font-semibold transition-all flex items-center gap-1"
                      style={{ background: readOn ? "var(--accent-light)" : "transparent", color: readOn ? "var(--accent)" : "var(--ink-mid)" }}>
                      <BarChart2 className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Score</span>
                    </button>
                    <button onClick={() => setHookOn(h => !h)} title="Hook preview"
                      className="h-8 px-2 rounded-lg text-xs font-semibold transition-all flex items-center gap-1"
                      style={{ background: hookOn ? "var(--accent-light)" : "transparent", color: hookOn ? "var(--accent)" : "var(--ink-mid)" }}>
                      <Eye className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Hook</span>
                    </button>
                  </div>
                </div>

                {/* Hook preview */}
                {hookOn && (
                  <div className="rounded-xl p-3.5 slide-down" style={{ background: "var(--accent-light)", border: "1px solid rgba(10,102,194,.2)" }}>
                    <div className="flex items-center gap-1.5 mb-2">
                      <Eye className="w-3.5 h-3.5" style={{ color: "var(--accent)" }} />
                      <span className="text-xs font-bold uppercase tracking-wider" style={{ color: "var(--accent)" }}>Hook Preview — first 150 chars</span>
                    </div>
                    <p className="text-sm leading-relaxed whitespace-pre-wrap break-words" style={{ color: "var(--ink)" }}>
                      {text.slice(0, 150) || "(start writing to see your hook…)"}
                    </p>
                    <p className="text-xs mt-2" style={{ color: "var(--ink-soft)" }}>
                      {text.slice(0, 150).length} chars · {(text.slice(0, 150).match(/\b\w+\b/g) || []).length} words
                      {text.length > 240 && <span className="ml-2 text-orange-500 font-semibold">⚠️ "See more" cuts at ~240 chars</span>}
                    </p>
                  </div>
                )}

                {/* Textarea */}
                <textarea
                  ref={editorRef}
                  value={text}
                  onChange={e => setText(e.target.value)}
                  onBlur={trackCursor}
                  onMouseUp={trackCursor}
                  onKeyUp={trackCursor}
                  className="w-full rounded-xl p-4 text-sm sm:text-base leading-relaxed resize-y flex-1 transition-all"
                  style={{
                    minHeight: "clamp(180px, 35vw, 320px)",
                    border: "1px solid var(--border)",
                    background: "var(--paper-card)",
                    color: "var(--ink)",
                    fontFamily: "'DM Sans', sans-serif",
                    boxShadow: "inset 0 1px 3px rgba(0,0,0,.04)",
                  }}
                  placeholder={"Write or paste your LinkedIn post here…\n\nSelect text → click a format button above!"}
                  spellCheck
                />

                {/* Readability */}
                {readOn && read && (
                  <div className="rounded-xl p-4 slide-down" style={{ background: "var(--paper-warm)", border: "1px solid var(--border)" }}>
                    <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 mb-3">
                      {([["Chars", read.chars], ["Words", read.words], ["Lines", read.lines], ["Read", read.readTime], ["Grade", read.grade]] as [string, string|number][]).map(([l, v]) => (
                        <div key={l} className="text-center sm:text-left">
                          <div className="text-xs font-bold uppercase tracking-wider mb-0.5" style={{ color: "var(--ink-soft)" }}>{l}</div>
                          <div className="text-lg font-bold font-mono" style={{ color: "var(--ink)" }}>{v}</div>
                        </div>
                      ))}
                    </div>
                    <div className="h-2 rounded-full overflow-hidden mb-1.5" style={{ background: "var(--border)" }}>
                      <div className="h-full rounded-full transition-all duration-500"
                        style={{ width: `${read.pct}%`, background: "linear-gradient(90deg, #ef4444, #f59e0b, #1a8a50)" }} />
                    </div>
                    <p className="text-xs font-semibold" style={{ color: "var(--ink-mid)" }}>{read.grade} — {read.tip}</p>
                  </div>
                )}

                {/* Action bar */}
                <div className="flex items-center gap-2 flex-wrap">
                  <button onClick={handleClear} className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl border text-sm font-semibold transition-all hover:border-red-300 hover:text-red-500"
                    style={{ color: "var(--ink-mid)", borderColor: "var(--border)", background: "var(--paper-card)" }}>
                    <Trash2 className="w-4 h-4" /> Clear
                  </button>
                  <button onClick={handleUndo} className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl border text-sm font-semibold transition-all hover:border-blue-300"
                    style={{ color: "var(--ink-mid)", borderColor: "var(--border)", background: "var(--paper-card)" }}>
                    <RotateCcw className="w-4 h-4" /> Undo
                  </button>
                  <button onClick={handleClean} className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl border text-sm font-semibold transition-all hover:border-purple-300"
                    style={{ color: "var(--ink-mid)", borderColor: "var(--border)", background: "var(--paper-card)" }}>
                    <Wand2 className="w-4 h-4" /> Clean
                  </button>
                  <button onClick={handleCopy} className="ml-auto flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90 hover:-translate-y-px"
                    style={{ background: "var(--accent)", boxShadow: "0 2px 12px rgba(10,102,194,.3)" }}>
                    <Copy className="w-4 h-4" /> Copy to Clipboard
                  </button>
                </div>
              </div>
            )}

            {/* ── TEMPLATES TAB ── */}
            {tab === "templates" && (
              <div className="flex flex-col gap-3">
                <p className="text-sm" style={{ color: "var(--ink-soft)" }}>Tap any template to load it into the editor</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {TEMPLATES.map(t => (
                    <button key={t.name} onClick={() => loadTemplate(t.body)}
                      className="text-left rounded-xl p-4 border transition-all hover:-translate-y-0.5 hover:shadow-md active:scale-[0.98]"
                      style={{ background: "var(--paper-card)", borderColor: "var(--border)" }}>
                      <div className="font-bold text-sm mb-1.5" style={{ color: "var(--ink)" }}>{t.name}</div>
                      <div className="text-xs leading-relaxed whitespace-pre-wrap line-clamp-3" style={{ color: "var(--ink-soft)" }}>{t.body.slice(0, 90)}…</div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* ── FONTS TAB ── */}
            {tab === "fonts" && (
              <div className="flex flex-col gap-3">
                <p className="text-sm" style={{ color: "var(--ink-soft)" }}>Select text in the Write tab first, then tap Apply</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {FONT_STYLES.map(f => (
                    <div key={f.fmt} className="flex items-center justify-between rounded-xl p-3.5 border transition-all"
                      style={{ borderColor: "var(--border)", background: "var(--paper-card)" }}>
                      <span className="text-base" style={{ color: "var(--ink)" }}>{f.preview}</span>
                      <button onClick={() => applyFont(f.fmt)}
                        className="px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-all hover:bg-blue-600 hover:text-white hover:border-blue-600"
                        style={{ color: "var(--accent)", borderColor: "rgba(10,102,194,.3)", background: "var(--accent-light)" }}>
                        Apply
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ── EMOJIS TAB ── */}
            {tab === "emojis" && (
              <div className="flex flex-col gap-3">
                <input type="text" value={emojiQuery} onChange={e => setEmojiQuery(e.target.value)}
                  placeholder="Search emojis…"
                  className="w-full px-4 py-2.5 rounded-xl border text-sm"
                  style={{ borderColor: "var(--border)", background: "var(--paper-card)", color: "var(--ink)" }} />
                <div className="flex flex-wrap gap-1">
                  {filteredEmojis.map(e => (
                    <button key={e} onClick={() => insertEmoji(e)} title={e}
                      className="w-10 h-10 text-xl rounded-xl flex items-center justify-center transition-all hover:bg-gray-100 active:scale-90">
                      {e}
                    </button>
                  ))}
                </div>
                <p className="text-xs" style={{ color: "var(--ink-soft)" }}>Tap any emoji to insert at your cursor position in the Write tab</p>
              </div>
            )}
          </div>
        </div>

        {/* ── SIDEBAR — preview + tips ── */}
        <aside className="w-full lg:w-[320px] shrink-0 border-t lg:border-t-0 lg:border-l p-4 md:p-6 flex flex-col gap-5"
          style={{ borderColor: "var(--border)", background: "var(--paper-warm)" }}>

          {/* Live preview */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4" style={{ color: "var(--accent)" }} />
              <span className="text-xs font-bold uppercase tracking-wider" style={{ color: "var(--accent)" }}>Live Preview</span>
            </div>
            <div className="rounded-xl p-4 text-sm leading-relaxed whitespace-pre-wrap break-words min-h-[120px]"
              style={{ background: "var(--paper-card)", border: "1px solid var(--border)", color: text ? "var(--ink)" : "var(--ink-soft)", fontStyle: text ? "normal" : "italic" }}>
              {text || "Your formatted post will appear here…"}
            </div>
          </div>

          {/* Quick tips */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: "var(--ink-soft)" }}>Quick Tips</div>
            <div className="flex flex-col gap-2">
              {[
                ["𝗕𝗼𝗹𝗱 your hook", "Make the first line impossible to scroll past"],
                ["◆ Use bullets", "Break up walls of text into scannable lists"],
                ["Keep it under 1300 chars", "Shorter posts get higher reach on LinkedIn"],
                ["Ask a question at the end", "It doubles comment rates"],
              ].map(([title, desc]) => (
                <div key={title} className="rounded-xl p-3 border" style={{ background: "var(--paper-card)", borderColor: "var(--border)" }}>
                  <div className="text-xs font-bold mb-0.5" style={{ color: "var(--ink)" }}>{title}</div>
                  <div className="text-xs leading-relaxed" style={{ color: "var(--ink-soft)" }}>{desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Install CTA */}
          <div className="rounded-xl p-4 mt-auto" style={{ background: "var(--accent)", color: "white" }}>
            <div className="text-sm font-bold mb-1">Format inside LinkedIn</div>
            <p className="text-xs mb-3 opacity-80">Install the extension to format directly in the LinkedIn composer — no copy-paste needed.</p>
            <Link href="/#download" className="flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-semibold no-underline transition-all hover:opacity-90"
              style={{ background: "rgba(255,255,255,.2)", color: "white", border: "1px solid rgba(255,255,255,.3)" }}>
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Install Free — All Browsers
            </Link>
          </div>
        </aside>
      </div>

      <Toast msg={toast.msg} show={toast.show} />
    </>
  );
}
