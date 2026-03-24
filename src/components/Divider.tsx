export default function Divider() {
  return (
    <div className="flex items-center justify-center gap-5 px-[clamp(24px,5vw,80px)]">
      <div className="flex-1 max-w-[200px] h-px bg-gradient-to-r from-transparent via-sand to-transparent" />
      <div
        className="w-1.5 h-1.5 bg-gold rotate-45 shrink-0"
        aria-hidden="true"
      />
      <div className="flex-1 max-w-[200px] h-px bg-gradient-to-r from-transparent via-sand to-transparent" />
    </div>
  );
}
