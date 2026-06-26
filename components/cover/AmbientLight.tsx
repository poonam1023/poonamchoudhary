export default function AmbientLight() {
  return (
    <div
      className="pointer-events-none fixed left-0 top-0 h-full w-full"
      aria-hidden="true"
    >
      <div
        className="absolute -left-16 -top-16 h-[50vh] w-[50vh] opacity-20"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, rgba(169,134,74,0.3) 0%, rgba(248,243,232,0.1) 40%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 h-[40vh] w-[40vh] opacity-10"
        style={{
          background:
            "radial-gradient(circle at 70% 70%, rgba(44,34,26,0.15) 0%, transparent 60%)",
          filter: "blur(60px)",
        }}
      />
    </div>
  );
}
