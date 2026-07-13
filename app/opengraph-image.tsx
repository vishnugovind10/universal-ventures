import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const alt =
  "Universal Ventures — Economic architecture for digital asset systems";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const colors = {
  background: "#060a12",
  foreground: "#ede8df",
  muted: "#9aa3ad",
  subtle: "#687482",
  line: "#202a36",
  accent: "#c9a84c",
};

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: colors.background,
          padding: 56,
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            border: `1px solid ${colors.line}`,
            padding: "48px 56px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 20,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 52,
                  height: 52,
                  border: `1px solid ${colors.accent}`,
                  color: colors.accent,
                  fontSize: 24,
                  fontWeight: 600,
                  letterSpacing: 2,
                }}
              >
                UV
              </div>
              <div
                style={{
                  display: "flex",
                  color: colors.foreground,
                  fontSize: 26,
                  fontWeight: 600,
                  letterSpacing: 6,
                }}
              >
                UNIVERSAL VENTURES
              </div>
            </div>
            <div
              style={{
                display: "flex",
                color: colors.subtle,
                fontSize: 18,
                letterSpacing: 4,
              }}
            >
              ADVISORY / RESEARCH
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 28,
            }}
          >
            <div
              style={{
                display: "flex",
                width: 88,
                height: 4,
                backgroundColor: colors.accent,
              }}
            />
            <div
              style={{
                display: "flex",
                color: colors.foreground,
                fontSize: 58,
                fontWeight: 600,
                lineHeight: 1.15,
                maxWidth: 940,
              }}
            >
              Economic architecture for digital asset systems.
            </div>
            <div
              style={{
                display: "flex",
                color: colors.muted,
                fontSize: 26,
                lineHeight: 1.4,
                maxWidth: 900,
              }}
            >
              Token economies, treasury structures, governance, and market
              mechanisms designed to survive real constraints.
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderTop: `1px solid ${colors.line}`,
              paddingTop: 28,
            }}
          >
            <div
              style={{
                display: "flex",
                gap: 32,
                color: colors.subtle,
                fontSize: 18,
                letterSpacing: 3,
              }}
            >
              <span>TOKENOMICS</span>
              <span>TREASURY</span>
              <span>GOVERNANCE</span>
              <span>LIQUIDITY</span>
            </div>
            <div
              style={{
                display: "flex",
                color: colors.accent,
                fontSize: 18,
                letterSpacing: 2,
              }}
            >
              universal-ventures.vercel.app
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
