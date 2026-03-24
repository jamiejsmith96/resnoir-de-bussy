"use client";

import {
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
  Easing,
} from "remotion";
import { loadFont } from "@remotion/google-fonts/CormorantGaramond";

const { fontFamily } = loadFont("normal", {
  weights: ["400", "500"],
  subsets: ["latin"],
});

const { fontFamily: fontFamilyItalic } = loadFont("italic", {
  weights: ["400"],
  subsets: ["latin"],
});

export const SignatureComposition: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // "Resnoir" reveals first (0-1.2s)
  const firstReveal = interpolate(frame, [0.2 * fps, 1.2 * fps], [0, 100], {
    easing: Easing.bezier(0.25, 0.1, 0.25, 1),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // "de Bussy" reveals after (0.6-1.8s)
  const secondReveal = interpolate(frame, [0.6 * fps, 1.8 * fps], [0, 100], {
    easing: Easing.bezier(0.25, 0.1, 0.25, 1),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Subtitle fades in (1.8s-2.4s)
  const subtitleSpring = spring({
    frame: frame - 1.8 * fps,
    fps,
    config: { damping: 200 },
  });

  // Subtle scale entrance
  const scaleIn = spring({
    frame,
    fps,
    config: { damping: 200, stiffness: 80 },
  });
  const scale = interpolate(scaleIn, [0, 1], [0.96, 1]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        transform: `scale(${scale})`,
      }}
    >
      {/* Logo text matching nav style */}
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          gap: 12,
          whiteSpace: "nowrap",
        }}
      >
        <span
          style={{
            fontFamily,
            fontSize: 52,
            fontWeight: 500,
            color: "#2C2C2C",
            letterSpacing: "0.02em",
            clipPath: `inset(0 ${100 - firstReveal}% 0 0)`,
          }}
        >
          Resnoir
        </span>
        <span
          style={{
            fontFamily: fontFamilyItalic,
            fontSize: 52,
            fontWeight: 400,
            fontStyle: "italic",
            color: "#B8965A",
            letterSpacing: "0.02em",
            clipPath: `inset(0 ${100 - secondReveal}% 0 0)`,
          }}
        >
          de Bussy
        </span>
      </div>

      {/* Subtitle */}
      <div
        style={{
          fontSize: 10,
          fontFamily: "'Sora', sans-serif",
          fontWeight: 500,
          letterSpacing: "0.25em",
          textTransform: "uppercase" as const,
          color: "#6B6B6B",
          opacity: subtitleSpring,
          marginTop: 12,
          transform: `translateY(${interpolate(subtitleSpring, [0, 1], [6, 0])}px)`,
        }}
      >
        Shamanic Practitioner
      </div>
    </div>
  );
};
