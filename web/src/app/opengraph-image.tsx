import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { profile } from "@/lib/data";

export const alt = `${profile.name} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const [grotesk, inter] = await Promise.all([
    readFile(join(process.cwd(), "assets/SpaceGrotesk-Bold.ttf")),
    readFile(join(process.cwd(), "assets/Inter-Medium.ttf")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#080b14",
          backgroundImage:
            "radial-gradient(900px circle at 6% -14%, rgba(34,197,94,0.30), transparent 42%), radial-gradient(900px circle at 106% 6%, rgba(56,189,248,0.20), transparent 45%), radial-gradient(760px circle at 90% 120%, rgba(167,139,250,0.22), transparent 46%)",
          color: "#e6edf6",
          fontFamily: "Inter",
        }}
      >
        {/* top row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 54,
                height: 54,
                borderRadius: 13,
                border: "1px solid rgba(34,197,94,0.5)",
                background: "rgba(34,197,94,0.12)",
                color: "#22c55e",
                fontFamily: "Space Grotesk",
                fontSize: 32,
              }}
            >
              J
            </div>
            <div
              style={{
                display: "flex",
                fontFamily: "Space Grotesk",
                fontSize: 30,
              }}
            >
              <span>jill</span>
              <span style={{ color: "#22c55e" }}>.</span>
              <span>vadsola</span>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              color: "#94a3b8",
              fontSize: 24,
            }}
          >
            <div
              style={{
                width: 13,
                height: 13,
                borderRadius: 99,
                background: "#22c55e",
              }}
            />
            Open to opportunities
          </div>
        </div>

        {/* middle */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", color: "#4ade80", fontSize: 34 }}>
            {`> ${profile.role} · Agentic AI & LLM`}
          </div>
          <div
            style={{
              display: "flex",
              fontFamily: "Space Grotesk",
              fontSize: 122,
              lineHeight: 1,
              letterSpacing: "-4px",
              marginTop: 10,
            }}
          >
            {profile.name}
          </div>
          <div
            style={{
              display: "flex",
              color: "#94a3b8",
              fontSize: 34,
              marginTop: 26,
              maxWidth: 940,
            }}
          >
            {profile.tagline}
          </div>
        </div>

        {/* bottom row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", gap: 12 }}>
            {["Mastra", "RAG", "OpenRouter", "Next.js"].map((t) => (
              <div
                key={t}
                style={{
                  display: "flex",
                  padding: "9px 18px",
                  borderRadius: 9,
                  border: "1px solid rgba(148,163,184,0.25)",
                  background: "rgba(148,163,184,0.08)",
                  color: "#cbd5e1",
                  fontSize: 23,
                }}
              >
                {t}
              </div>
            ))}
          </div>
          <div
            style={{
              display: "flex",
              color: "#22c55e",
              fontFamily: "Space Grotesk",
              fontSize: 28,
            }}
          >
            jillvadsola.me
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Space Grotesk", data: grotesk, style: "normal", weight: 700 },
        { name: "Inter", data: inter, style: "normal", weight: 500 },
      ],
    }
  );
}
