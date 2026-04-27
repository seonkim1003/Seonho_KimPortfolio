import { ImageResponse } from "next/og";
import { profile } from "@/lib/data";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${profile.name} — ${profile.headline}`;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#f6f8fb",

          color: "#0f172a",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            color: "#475569",
            fontSize: 22,
          }}
        >
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: 10,
              backgroundColor: "#0ea5e9",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 18,
              fontWeight: 700,
            }}
          >
            SK
          </div>
          {profile.shortName}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontSize: 76,
              fontWeight: 600,
              letterSpacing: "-0.035em",
              lineHeight: 1.05,
              maxWidth: 980,
              color: "#0f172a",
            }}
          >
            {`Hi, I'm ${profile.name.split(" ")[0]}.`}
          </div>
          <div
            style={{
              fontSize: 44,
              fontWeight: 500,
              letterSpacing: "-0.03em",
              lineHeight: 1.15,
              maxWidth: 980,
              color: "#0f172a",
            }}
          >
            {profile.headline}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#64748b",
            fontSize: 20,
            borderTop: "1px solid rgba(15,23,42,0.08)",
            paddingTop: 24,
          }}
        >
          <span>{`${profile.tagline} · ${profile.location}`}</span>
          <span style={{ fontFamily: "monospace" }}>{profile.email}</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
