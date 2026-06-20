import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "LinkedIn Text Formatter — Format Posts That Get Noticed";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#faf9f6",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px 100px",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background accent circle */}
        <div style={{
          position: "absolute", right: -120, top: -120,
          width: 600, height: 600, borderRadius: "50%",
          background: "rgba(10,102,194,0.06)", display: "flex",
        }} />
        <div style={{
          position: "absolute", right: 80, bottom: -80,
          width: 300, height: 300, borderRadius: "50%",
          background: "rgba(10,102,194,0.04)", display: "flex",
        }} />

        {/* Logo mark */}
        <div style={{
          display: "flex", alignItems: "center", gap: 16, marginBottom: 40,
        }}>
          <div style={{
            width: 56, height: 56, borderRadius: 14,
            background: "#0a66c2",
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "white", fontSize: 26, fontWeight: 800, fontStyle: "italic",
          }}>
            Lf
          </div>
          <span style={{ fontSize: 22, fontWeight: 700, color: "#3a3a45" }}>
            LinkedIn Formatter
          </span>
        </div>

        {/* Headline */}
        <div style={{
          fontSize: 64, fontWeight: 800, color: "#0a0a0f",
          lineHeight: 1.1, marginBottom: 24, maxWidth: 800,
        }}>
          Format LinkedIn posts that{" "}
          <span style={{ color: "#0a66c2", fontStyle: "italic" }}>actually</span>
          {" "}get noticed
        </div>

        {/* Sub */}
        <div style={{
          fontSize: 26, color: "#787889", marginBottom: 48, maxWidth: 700,
          lineHeight: 1.5,
        }}>
          Bold · Italic · Bullets · Templates · Free in every browser
        </div>

        {/* Feature pills */}
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          {["𝗕 Bold", "𝘐 Italic", "• Bullets", "📋 Templates", "📊 Score"].map((f) => (
            <div key={f} style={{
              padding: "10px 22px", borderRadius: 100,
              background: "#e8f0fa", color: "#0a66c2",
              fontSize: 20, fontWeight: 700,
              border: "1px solid rgba(10,102,194,0.2)",
            }}>
              {f}
            </div>
          ))}
        </div>

        {/* URL tag */}
        <div style={{
          position: "absolute", bottom: 48, right: 100,
          fontSize: 18, color: "#787889", fontWeight: 600,
        }}>
          linkedinformatter.com
        </div>
      </div>
    ),
    { ...size }
  );
}
