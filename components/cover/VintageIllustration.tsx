import React from "react";
import Image from "next/image";

export default function VintageIllustration() {
  return (
    <div className="relative w-48 h-48 md:w-[260px] md:h-[260px] mx-auto pointer-events-none select-none mix-blend-multiply opacity-10 filter contrast-[1.3] saturate-[5%] brightness-[0.98]">
      <Image
        src="/vintage-illustration.png"
        alt="Vintage Botanical Illustration"
        fill
        sizes="(max-width: 768px) 192px, 260px"
        className="object-contain"
        priority
      />
    </div>
  );
}
