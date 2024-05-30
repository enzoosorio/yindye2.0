"use client";

import useIsVisible from "@/utils/useIsVisible";
import { useRef } from "react";

export default function TextEffect() {
  const subtitleRef = useRef();
  const isVisible = useIsVisible(subtitleRef);

  return (
    <>
      <h2
        ref={subtitleRef}
        className={`mt-[68px] w-full 2xl:w-[1080px] text-center md:text-left text-3xl lg:text-4xl font-bold mx-auto transition-opacity duration-700 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <span className="hover:text-4xl hover:text-blue-700 lg:hover:text-4.5xl transition-colors duration-75">
          A
        </span>
        <span className="hover:text-4xl hover:text-blue-700 lg:hover:text-4.5xl transition-colors duration-75">
          r
        </span>
        <span className="hover:text-4xl hover:text-blue-700 lg:hover:text-4.5xl transition-colors duration-75">
          t
        </span>
        <span className="hover:text-4xl hover:text-blue-700  lg:hover:text-4.5xl transition-colors duration-75">
          b
        </span>
        <span className="hover:text-4xl hover:text-blue-700 lg:hover:text-4.5xl transition-colors duration-75">
          l
        </span>
        <span className="hover:text-4xl hover:text-blue-700 lg:hover:text-4.5xl transition-colors duration-75">
          o
        </span>
        <span className="hover:text-4xl hover:text-blue-700 lg:hover:text-4.5xl transition-colors duration-75">
          g
        </span>
      </h2>
      <h2
        className={`mt-[20px] 2xl:w-[1080px] text-center md:text-left text-lg lg:text-xl text-pretty font-bold text-gray-500 w-11/12 md:w-full mx-auto transition-opacity duration-[1000ms] ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        En esta sección queremos expresarnos y dar a conocer un poco más los
        estilos de arte que podemos hacer, y que tú también puedes. Súmate a
        #freeart #yindyeart
      </h2>
    </>
  );
}
