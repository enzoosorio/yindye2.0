"use client";

import Monalisa from "../assets/imagenesyotrosrecursos/as-icon-parte-below-hero/la-monalisa-as-icon.webp";
import Cat from "../assets/imagenesyotrosrecursos/as-icon-parte-below-hero/gato-as-icon.webp";
import Microphone from "../assets/imagenesyotrosrecursos/as-icon-parte-below-hero/musica-microfono-as-icon.webp";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import useIsVisible from "@/utils/useIsVisible";
import { josefin_slab_font, jost_font } from "@/utils/fonts";
import monalisaSVG from "../assets/imagenesyotrosrecursos/as-icon-parte-below-hero/la-monalisa-as-icon.svg";
import microfonoSVG from "../assets/imagenesyotrosrecursos/as-icon-parte-below-hero/microfono-as-icon.svg";

export default function CardWrapper() {
  const [showText, setShowText] = useState(true);
  const [counter, setCounter] = useState(0);
  const [isBgActived, setIsBgActived] = useState(false);
  const wrapperRef = useRef();
  const isVisible = useIsVisible(wrapperRef);

  const infoCard = [
    {
      id: 1,
      text: "arte",
      icon: Monalisa,
      font: jost_font,
      bg: "monalisa-bg",
      svgWhite: monalisaSVG,
    },
    {
      id: 2,
      text: "música",
      icon: Microphone,
      font: josefin_slab_font,
      bg: "microphone-bg",
      svgWhite: microfonoSVG,
    },
    {
      id: 3,
      text: "vida.",
      icon: Cat,
      font: jost_font,
      bg: "cat-bg",
      svgWhite: Cat,
    },
  ];

  useEffect(() => {
    let timeout;

    if (counter < 25 && isVisible) {
      const duration =
        counter < 4 ? 810 : counter < 10 ? 600 : counter < 15 ? 350 : 200;
      timeout = setTimeout(() => {
        setShowText((prevShowText) => !prevShowText);
        setCounter((prevCounter) => prevCounter + 1);
      }, duration);
    } else if (counter === 25) {
      setIsBgActived(true);
      setShowText(false);
    }

    return () => clearTimeout(timeout);
  }, [showText, counter, isVisible, isBgActived]);

  return (
    <section
      ref={wrapperRef}
      className="w-full lg:w-[746px] xl:w-[903px] 2xl:w-[1080px] flex gap-5 justify-center items-center md:justify-between mb-20 mt-20 mx-auto "
    >
      {infoCard &&
        infoCard.map((card) => (
          <div
            key={card.id}
            className={`w-[140.67px] md:w-[171px] lg:w-[227.33px] xl:w-[279.67px] 2xl:w-[338.67px] h-[112px] lg:h-[138px] xl:h-[160px] flex items-center justify-center rounded-xl shadow-lg ${
              isBgActived ? `bg-${card.bg} bg-cover` : ""
            }`}
          >
            {showText ? (
              <p className={`text-3xl lg:text-4.5xl ${card.font.className}`}>
                {card.text.toUpperCase()}
              </p>
            ) : (
              <Image
                className={`${
                  card.id === 1
                    ? "w-[140px]"
                    : card.id === 2
                    ? "w-[120px]"
                    : "w-[100px]"
                }  xl:w-[120px] `}
                src={counter === 25 ? card.svgWhite : card.icon}
              />
            )}
          </div>
        ))}
    </section>
  );
}
