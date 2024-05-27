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
import bgMonalisa from "../assets/imagenesyotrosrecursos/as-icon-parte-below-hero/background-monalisa-as-icon.jpg";
import bgCat from "../assets/imagenesyotrosrecursos/as-icon-parte-below-hero/background-park-cat-as-icon.jpg";
import microphoneBg from "../assets/imagenesyotrosrecursos/as-icon-parte-below-hero/fondo-niebla-dinamica-realista.jpg";
import bgWhite from "../assets/imagenesyotrosrecursos/as-icon-parte-below-hero/bgWhite.jpg";

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
      bg: bgMonalisa,
      svgWhite: monalisaSVG,
    },
    {
      id: 2,
      text: "música",
      icon: Microphone,
      font: josefin_slab_font,
      bg: microphoneBg,
      svgWhite: microfonoSVG,
    },
    {
      id: 3,
      text: "vida.",
      icon: Cat,
      font: jost_font,
      bg: bgCat,
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
            className={`relative w-[140.67px] md:w-[171px] lg:w-[227.33px] xl:w-[279.67px] 2xl:w-[338.67px] h-[112px] lg:h-[138px] xl:h-[160px] flex items-center justify-center rounded-xl shadow-lg `}
          >
            <Image
              src={isBgActived ? card.bg : bgWhite}
              className="absolute top-0 w-full h-full rounded-xl"
            />
            {showText ? (
              <p
                className={`text-3xl lg:text-4.5xl ${card.font.className} z-40`}
              >
                {card.text.toUpperCase()}
              </p>
            ) : (
              <Image
                className={`${
                  card.id === 1
                    ? "w-[140px] lg:w-[160px] xl:w-[180px]"
                    : card.id === 2
                    ? "w-[120px] lg:w-[140px] xl:w-[160px]"
                    : "w-[100px] lg:w-[110px]"
                }  xl:w-[120px] z-50 `}
                src={isBgActived ? card.svgWhite : card.icon}
              />
            )}
          </div>
        ))}
    </section>
  );
}
