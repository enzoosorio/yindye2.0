"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import useIsVisible from "../utils/useIsVisible";
import bgWhite from "../assets/imagenesyotrosrecursos/as-icon-parte-below-hero/bgWhite.jpg";
import { infoCard } from "../utils/cardIconsArtWrapper";
export default function CardWrapper() {
  const [showText, setShowText] = useState(true);
  const [counter, setCounter] = useState(0);
  const [isBgActived, setIsBgActived] = useState(false);
  const wrapperRef = useRef();
  const isVisible = useIsVisible(wrapperRef);

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
              alt={`icon Art ${card.id}`}
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
                alt={`alt icon ${card.id}`}
              />
            )}
          </div>
        ))}
    </section>
  );
}
