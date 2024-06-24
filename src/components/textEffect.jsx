"use client";

import useIsVisible from "../utils/useIsVisible";
import { useRef } from "react";

export default function TextEffect({ children }) {
  const subtitleRef = useRef();
  const isVisible = useIsVisible(subtitleRef);

  const arrayChildren = children?.split("");

  return (
    <>
      <h2
        ref={subtitleRef}
        className={`mt-[68px] w-full 2xl:w-[1080px] text-center md:text-left text-3xl lg:text-4xl font-bold text-text-primary mx-auto transition-opacity duration-700 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {arrayChildren &&
          arrayChildren.map((letter, index) => (
            <span
              key={index}
              className="hover:text-4xl hover:text-blue-700 lg:hover:text-4.5xl transition-colors duration-75"
            >
              {letter}
            </span>
          ))}
      </h2>
    </>
  );
}
