function buildMap(uBase: number, lBase: number): Record<string, string> {
  const m: Record<string, string> = {};
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").forEach((c, i) => {
    if (uBase) m[c] = String.fromCodePoint(uBase + i);
  });
  "abcdefghijklmnopqrstuvwxyz".split("").forEach((c, i) => {
    if (lBase) m[c] = String.fromCodePoint(lBase + i);
  });
  return m;
}

function buildDigitMap(base: number): Record<string, string> {
  const m: Record<string, string> = {};
  "0123456789".split("").forEach((c, i) => {
    m[c] = String.fromCodePoint(base + i);
  });
  return m;
}

export const MAPS: Record<string, Record<string, string>> = {
  bold: { ...buildMap(0x1d5d4, 0x1d5ee), ...buildDigitMap(0x1d7ec) },
  italic: buildMap(0x1d608, 0x1d622),
  boldItalic: buildMap(0x1d63c, 0x1d656),
  smallCaps: {
    A:"ᴀ",B:"ʙ",C:"ᴄ",D:"ᴅ",E:"ᴇ",F:"ꜰ",G:"ɢ",H:"ʜ",I:"ɪ",J:"ᴊ",K:"ᴋ",L:"ʟ",
    M:"ᴍ",N:"ɴ",O:"ᴏ",P:"ᴘ",Q:"Q",R:"ʀ",S:"ꜱ",T:"ᴛ",U:"ᴜ",V:"ᴠ",W:"ᴡ",X:"x",Y:"ʏ",Z:"ᴢ",
    a:"ᴀ",b:"ʙ",c:"ᴄ",d:"ᴅ",e:"ᴇ",f:"ꜰ",g:"ɢ",h:"ʜ",i:"ɪ",j:"ᴊ",k:"ᴋ",l:"ʟ",
    m:"ᴍ",n:"ɴ",o:"ᴏ",p:"ᴘ",q:"q",r:"ʀ",s:"ꜱ",t:"ᴛ",u:"ᴜ",v:"ᴠ",w:"ᴡ",x:"x",y:"ʏ",z:"ᴢ",
  },
};

function applyMap(text: string, map: Record<string, string>): string {
  return text.split("").map((c) => map[c] || c).join("");
}

function toWide(text: string): string {
  const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  return text.split("").map((c) => {
    const i = alpha.indexOf(c);
    if (i < 0) return c === " " ? "\u3000" : c;
    if (i < 26) return String.fromCodePoint(0xff21 + i);
    if (i < 52) return String.fromCodePoint(0xff41 + (i - 26));
    return String.fromCodePoint(0xff10 + (i - 52));
  }).join("");
}

function strike(text: string): string {
  return text.split("").map((c) => (c === "\n" ? c : c + "\u0336")).join("");
}
function underln(text: string): string {
  return text.split("").map((c) => (c === "\n" ? c : c + "\u0332")).join("");
}

export function applyFmt(type: string, text: string): string {
  switch (type) {
    case "bold":          return applyMap(text, MAPS.bold);
    case "italic":        return applyMap(text, MAPS.italic);
    case "boldItalic":    return applyMap(text, MAPS.boldItalic);
    case "strike":        return strike(text);
    case "underline":     return underln(text);
    case "smallCaps":     return applyMap(text, MAPS.smallCaps);
    case "widen":         return toWide(text);
    case "caps":          return text.toUpperCase();
    case "lower":         return text.toLowerCase();
    case "titleCase":     return text.replace(/\w\S*/g, (w) => w[0].toUpperCase() + w.slice(1).toLowerCase());
    case "alternate":     return text.split("").map((c, i) => i % 2 === 0 ? c.toLowerCase() : c.toUpperCase()).join("");
    case "bullet1":       return text.split("\n").map((l) => (l.trim() ? "• " + l : l)).join("\n");
    case "bullet2":       return text.split("\n").map((l) => (l.trim() ? "◆ " + l : l)).join("\n");
    case "bullet3":       return text.split("\n").map((l) => (l.trim() ? "▶ " + l : l)).join("\n");
    case "bullet4":       return text.split("\n").map((l) => (l.trim() ? "✅ " + l : l)).join("\n");
    case "numbered": {
      let n = 0;
      return text.split("\n").map((l) => (l.trim() ? ++n + ". " + l : l)).join("\n");
    }
    case "divider":       return "\n─────────────────────────\n";
    case "doubleDivider": return "\n══════════════════════════\n";
    default:              return text;
  }
}

export function getReadability(text: string) {
  const words = text.match(/\b\w+\b/g) || [];
  const lines = text.split("\n");
  const sentences = text.split(/[.!?]+/).filter((s) => s.trim().length > 3);
  const wps = sentences.length ? Math.round(words.length / sentences.length) : 0;
  const readTimeSec = Math.ceil(words.length / 4);
  const rt =
    readTimeSec < 60
      ? readTimeSec + "s"
      : Math.ceil(readTimeSec / 60) + "m " + (readTimeSec % 60) + "s";

  let grade: string, pct: number, tip: string;
  if (wps <= 10)      { grade = "A"; pct = 90; tip = "Great! Short, punchy sentences."; }
  else if (wps <= 15) { grade = "B"; pct = 72; tip = "Good readability — easy to scan."; }
  else if (wps <= 20) { grade = "C"; pct = 54; tip = "A bit dense — try shorter sentences."; }
  else if (wps <= 28) { grade = "D"; pct = 34; tip = "Long sentences — break them up."; }
  else                { grade = "F"; pct = 14; tip = "Too complex — simplify for LinkedIn."; }

  return {
    chars: text.length,
    words: words.length,
    lines: lines.length,
    readTime: words.length ? rt : "—",
    grade: words.length ? grade : "—",
    pct: words.length ? pct : 0,
    tip,
  };
}

export const TEMPLATES = [
  {
    name: "🚀 Lessons Learned",
    body: `𝗜 𝗹𝗲𝗮𝗿𝗻𝗲𝗱 [N] lessons doing [thing].\n\nHere's what surprised me most:\n\n◆ [Lesson 1]\n◆ [Lesson 2]\n◆ [Lesson 3]\n◆ [Lesson 4]\n◆ [Lesson 5]\n\nWhich one resonates with you?`,
  },
  {
    name: "📖 Story Hook",
    body: `[Time period] ago, I [did something].\n\nEveryone said I was crazy.\n\nHere's what happened:\n\n[Tell the story in 3-5 short paragraphs]\n\nThe lesson? [Key takeaway]\n\nWhat's your take?`,
  },
  {
    name: "🎯 Hot Take",
    body: `𝗛𝗼𝘁 𝘁𝗮𝗸𝗲: [Bold contrarian statement]\n\nMost people believe [conventional wisdom].\n\nBut here's the truth:\n\n▶ [Point 1]\n▶ [Point 2]\n▶ [Point 3]\n\nAgree or disagree? Tell me why 👇`,
  },
  {
    name: "💡 How-To Guide",
    body: `𝗛𝗼𝘄 𝘁𝗼 [achieve result] in [timeframe]:\n\n(Even if you're starting from scratch)\n\n1. [Step 1]\n2. [Step 2]\n3. [Step 3]\n4. [Step 4]\n5. [Step 5]\n\nSave this for later. 🔖`,
  },
  {
    name: "🤔 Question Hook",
    body: `[Provocative question]?\n\nMost people answer "[common answer]".\n\nBut the real answer is more interesting.\n\n[Share your perspective in 2-3 paragraphs]\n\nWhat do you think?`,
  },
  {
    name: "📊 Data + Insight",
    body: `[Stat]% of [group] [do/don't do something].\n\nThat number shocked me.\n\nHere's why it matters:\n\n◆ [Implication 1]\n◆ [Implication 2]\n◆ [Implication 3]\n\nThe fix? [Simple actionable solution]\n\nAre you in the [stat]%?`,
  },
];

export const FONT_STYLES = [
  { name: "𝗕𝗼𝗹𝗱",         preview: "𝗔𝗕𝗖 𝗮𝗯𝗰", fmt: "bold" },
  { name: "𝘐𝘵𝘢𝘭𝘪𝘤",        preview: "𝘈𝘉𝘊 𝘢𝘣𝘤", fmt: "italic" },
  { name: "𝗕𝗼𝗹𝗱 𝘐𝘵𝘢𝘭𝘪𝘤",   preview: "𝗔𝘉𝗖 𝗮𝘣𝗰", fmt: "boldItalic" },
  { name: "Sᴍᴀʟʟ Cᴀᴘs",   preview: "ᴀʙᴄ ᴅᴇꜰ",   fmt: "smallCaps" },
  { name: "Ａｂｃ Ｗｉｄｅ",  preview: "Ａ Ｂ Ｃ ａ ｂ ｃ", fmt: "widen" },
  { name: "S̶t̶r̶i̶k̶e̶",        preview: "A̶B̶C̶ a̶b̶c̶", fmt: "strike" },
  { name: "U̲n̲d̲e̲r̲l̲i̲n̲e̲",      preview: "A̲B̲C̲ a̲b̲c̲", fmt: "underline" },
  { name: "aLtErNaTe",     preview: "aLtErNaTe",  fmt: "alternate" },
];

export const EMOJIS = [
  "🚀","💡","🔥","✅","⭐","🎯","💎","🏆","💪","🌟",
  "📈","📊","💼","🤝","📌","🧠","💬","🙌","🎉","✨",
  "👇","👆","👉","👈","🔑","📣","💭","⚡","🌍","🎓",
  "❤️","🙏","😊","🤔","👀","🏅","🔖","📝","🛠️","🌱",
  "💰","🎁","🏋️","🧩","🔐","📱","💻","🎤","🌈","🔔",
  "⚠️","✔️","❌","➡️","⬅️","⬆️","⬇️","🔹","🔷","🔸",
  "1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣","🔟",
];
