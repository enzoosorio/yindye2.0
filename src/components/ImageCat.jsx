"use client";

import { useState } from "react";
import GatoPlaya from "../assets/imagenesyotrosrecursos/banners/gato_en_la_playa_landing_page.webp";
import Image from "next/image";

export default function ImageCat() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      onClick={() => {
        setIsExpanded(!isExpanded);
      }}
      className={`w-full md:w-full  2xl:w-[1080px]  mb-10 mt-20 md:rounded-xl bg-red-400 cursor-pointer 
      ${
        isExpanded ? "clip-circle-full" : "clip-circle"
      } transition-all duration-300 `}
    >
      <Image src={GatoPlaya} alt="cat in the beach" className="md:rounded-xl" />
    </div>
  );
}
