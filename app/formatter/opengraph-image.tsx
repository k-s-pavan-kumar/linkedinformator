import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Free LinkedIn Post Formatter — Bold, Italic, Bullets & More";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div style={{
        background: "#0a0a0f", width: "100%", height: "100%",
        display: "flex", flexDirection: "column",
        alignItems: "flex-start", justifyContent: "center",
        padding: "80px 100px", fontFamily: "sans-serif",
        position: "relative", overflow: "hidden",
      }}>
        {/* Glow */}
        <div style={{
          position: "absolute", left: -100, top: -100,
          width: 500, height: 500, borderRadius: "50%",
          background: "rgba(10,102,194,0.15)", display: "flex",
        }} />

        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 40 }}>
          <div style={{
            width: 56, height: 56, borderRadius: 14, background: "#0a66c2",
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "white", fontSize: 26, fontWeight: 800, fontStyle: "italic",
          }}>Lf</div>
          <span style={{ fontSize: 22, fontWeight: 700, color: "rgba(255,255,255,0.7)" }}>
            LinkedIn Formatter
          </span>
        </div>

        <div style={{
          fontSize: 60, fontWeight: 800, color: "white",
          lineHeight: 1.1, marginBottom: 24, maxWidth: 820,
        }}>
          Free LinkedIn Post{" "}
          <span style={{ color: "#7ab8f5", fontStyle: "italic" }}>Formatter</span>
        </div>

        <div style={{ fontSize: 26, color: "rgba(255,255,255,0.55)", marginBottom: 52, maxWidth: 680 }}>
          Bold, italic, bullets, templates — format directly in your browser. No install. No login.
        </div>

        {/* Mock toolbar */}
        <div style={{
          display: "flex", gap: 10,
          background: "rgba(255,255,255,0.06)",
          padding: "16px 24px", borderRadius: 16,
          border: "1px solid rgba(255,255,255,0.1)",
        }}>
          {["𝗕","𝘐","𝗕𝘐","S̶","•","◆","▶","✅","😊"].map((b) => (
            <div key={b} style={{
              width: 44, height: 40, borderRadius: 8,
              background: "rgba(255,255,255,0.08)",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "white", fontSize: 18, fontWeight: 700,
              border: "1px solid rgba(255,255,255,0.12)",
            }}>{b}</div>
          ))}
        </div>

        <div style={{
          position: "absolute", bottom: 48, right: 100,
          fontSize: 18, color: "rgba(255,255,255,0.3)", fontWeight: 600,
        }}>
          linkedinformatter.com/formatter
        </div>
      </div>
    ),
    { ...size }
  );
}
