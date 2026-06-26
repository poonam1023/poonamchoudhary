import React from "react";
import Image from "next/image";

export default function VintageIllustration() {
  return (
    <div className="relative w-44 h-44 md:w-52 md:h-52 mx-auto mb-8 pointer-events-none select-none mix-blend-multiply opacity-20 filter contrast-125 saturate-[10%] brightness-[0.95]">
      <Image
        src="/vintage-illustration.png"
        alt="Vintage Botanical Illustration"
        fill
        sizes="(max-width: 768px) 176px, 208px"
        className="object-contain"
        priority
      />
    </div>
  );
}
