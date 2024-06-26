"use client";

import Image from "next/image";
import "../../utils/custom-scrollbar.css";
import { useEffect, useRef, useState } from "react";

export default function TshirtPresentation({
  normalImagesTshirt,
  subImagesTshirt,
}) {
  const wrapperRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startY, setStartY] = useState(0);
  const liHeight = 419.33; // Altura de cada <li>

  useEffect(() => {
    const wrapper = wrapperRef.current;
    let timeoutId = null;

    const handleScroll = (event) => {
      event.preventDefault();

      if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = null;
      }

      timeoutId = setTimeout(() => {
        setCurrentIndex((prevIndex) => {
          const newIndex = event.deltaY > 0 ? prevIndex + 1 : prevIndex - 1;
          return Math.max(0, Math.min(normalImagesTshirt.length - 1, newIndex));
        });
      }, 50);
    };

    const handleTouchStart = (event) => {
      setStartY(event.touches[0].clientY);
      event.preventDefault();
    };

    const handleTouchMove = (event) => {
      const deltaY = event.touches[0].clientY - startY;
      event.preventDefault();

      if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = null;
      }

      timeoutId = setTimeout(() => {
        setCurrentIndex((prevIndex) => {
          const newIndex = deltaY > 0 ? prevIndex - 1 : prevIndex + 1;
          return Math.max(0, Math.min(normalImagesTshirt.length - 1, newIndex));
        });
      }, 50);
    };

    wrapper.addEventListener("wheel", handleScroll);
    wrapper.addEventListener("touchstart", handleTouchStart);
    wrapper.addEventListener("touchmove", handleTouchMove);

    return () => {
      wrapper.removeEventListener("wheel", handleScroll);
      wrapper.removeEventListener("touchstart", handleTouchStart);
      wrapper.removeEventListener("touchmove", handleTouchMove);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [normalImagesTshirt.length, startY]);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    wrapper.style.transition = "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)";
    wrapper.style.transform = `translate3d(0, -${
      currentIndex * liHeight
    }px, 0)`;
  }, [currentIndex]);

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="flex md:items-start justify-center lg:justify-center h-max  w-full mx-auto overflow-hidden gap-8 custom-scrollbar">
      <ul
        ref={wrapperRef}
        className="flex flex-col w-[279.33px] lg:mx-auto h-[419.33px] aspect-auto"
      >
        {normalImagesTshirt.map((normalImage, index) => (
          <li
            key={index}
            className={`absolute w-[279.33px] object-contain h-[419.33px] transition-opacity duration-500 ease-in-out scale-[1.15] md:scale-100 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{ top: `${index * liHeight}px` }}
          >
            <Image
              src={normalImage.url}
              alt={`Tshirt Image ${index + 1}`}
              width={279.33}
              height={419.33}
              className="w-full h-full"
            />
          </li>
        ))}
      </ul>

      <div className="hidden lg:flex flex-col items-center justify-self-center gap-2 w-7">
        {subImagesTshirt.map((smallImage, index) => (
          <div
            key={index}
            className={`w-full cursor-pointer ${
              index === currentIndex ? "opacity-100" : "opacity-50"
            }`}
            onClick={() => handleThumbnailClick(index)}
          >
            <Image
              src={smallImage.url}
              alt={`Thumbnail ${index + 1}`}
              width={100}
              height={50}
              className="w-full"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
