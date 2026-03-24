"use client";

interface SignatureProps {
  className?: string;
  color?: string;
  animate?: boolean;
  duration?: number;
  delay?: number;
  showUnderline?: boolean;
}

export default function Signature({
  className = "",
  color,
  animate = true,
  duration = 2,
  delay = 0,
  showUnderline = true,
}: SignatureProps) {
  const colorStyle = color ?? "var(--color-charcoal, #2C2C2C)";

  return (
    <div className={`relative inline-block ${className}`} aria-label="Resnoir de Bussy" role="img">
      <span
        className="font-signature block whitespace-nowrap"
        style={{
          color: colorStyle,
          fontSize: "inherit",
          lineHeight: 1.2,
          ...(animate
            ? {
                clipPath: "inset(0 100% 0 0)",
                animation: `sig-reveal ${duration}s cubic-bezier(0.25, 0.1, 0.25, 1) ${delay}s forwards`,
              }
            : {}),
        }}
      >
        Resnoir de Bussy
      </span>
      {showUnderline && (
        <span
          className="block h-px mt-1 origin-left"
          style={{
            background: colorStyle,
            opacity: 0.3,
            transform: animate ? "scaleX(0)" : "scaleX(1)",
            ...(animate
              ? {
                  animation: `sig-underline ${duration * 0.4}s cubic-bezier(0.16, 1, 0.3, 1) ${delay + duration * 0.8}s forwards`,
                }
              : {}),
          }}
        />
      )}
    </div>
  );
}
