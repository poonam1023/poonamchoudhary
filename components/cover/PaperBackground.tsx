export default function PaperBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-paper" />
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cdefs%3E%3Cfilter id='a'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3C/defs%3E%3Crect width='400' height='400' filter='url(%23a)' opacity='1'/%3E%3C/svg%3E\")",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 30% 20%, rgba(169,134,74,0.15) 0%, transparent 70%), radial-gradient(ellipse 60% 50% at 70% 80%, rgba(169,134,74,0.08) 0%, transparent 60%), radial-gradient(ellipse 100% 100% at 50% 50%, transparent 40%, rgba(44,34,26,0.06) 100%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          background:
            "radial-gradient(ellipse 30% 20% at 15% 40%, rgba(169,134,74,0.3) 0%, transparent 100%), radial-gradient(ellipse 25% 15% at 80% 60%, rgba(44,34,26,0.15) 0%, transparent 100%)",
        }}
      />
    </div>
  );
}
