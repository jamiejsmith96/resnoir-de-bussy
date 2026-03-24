export default function SectionLabel({
  children,
  center = false,
}: {
  children: React.ReactNode;
  center?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-4 mb-5 font-[family-name:var(--font-body)] text-[0.7rem] font-medium tracking-[0.25em] uppercase text-gold ${
        center ? "justify-center" : ""
      }`}
    >
      {!center && (
        <span className="w-10 h-px bg-gold" aria-hidden="true" />
      )}
      {children}
    </div>
  );
}
