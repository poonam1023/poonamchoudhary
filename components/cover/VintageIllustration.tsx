import React from "react";
import Image from "next/image";

function VintageIllustration() {
  return (
    <div className="absolute top-[8%] left-1/2 -translate-x-1/2 w-[280px] h-[280px] md:w-[360px] md:h-[360px] pointer-events-none select-none mix-blend-multiply opacity-[0.08] filter contrast-[1.35] saturate-[3%] brightness-[0.97] z-0">
      <Image
        src="/vintage-illustration.png"
        alt="Vintage Botanical Illustration Watermark"
        fill
        sizes="(max-width: 768px) 280px, 360px"
        className="object-contain"
        priority
      />
    </div>
  );
}

export default React.memo(VintageIllustration);
