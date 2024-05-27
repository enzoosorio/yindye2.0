"use client";

import useIsVisible from "@/utils/useIsVisible";
import example1 from "../assets/imagenesyotrosrecursos/zapatillasmaqueta/bad-bunny-the-last-campus-dark-brown.webp";
import example2 from "../assets/imagenesyotrosrecursos/zapatillasmaqueta/campus-20-x-korn.webp";
import example3 from "../assets/imagenesyotrosrecursos/zapatillasmaqueta/new-balance-530-linen-sea-salt.webp";
import Image from "next/image";
import { useRef } from "react";

export default function CardWrapperTShirt() {
  const wrapperRef = useRef();
  const isVisible = useIsVisible(wrapperRef);

  const infoTShirts = [
    {
      id: 1,
      image: example1,
      alt: "Zapatilla1",
      brand: "adidas",
      nameZapatilla: "Bad bunny campus",
      precio: "649.00",
    },
    {
      id: 2,
      image: example2,
      alt: "Zapatilla2",
      brand: "adidas",
      nameZapatilla: "Campus 2.0 korn",
      precio: "449.00",
    },
    {
      id: 3,
      image: example3,
      alt: "Zapatilla3",
      brand: "new balance",
      nameZapatilla: "NB 530 linen sea salt",
      precio: "419.00",
    },
  ];

  return (
    <section
      ref={wrapperRef}
      className="w-11/12 md:w-full  2xl:w-[1080px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-center items-center mb-10 mt-20 mx-auto rounded-lg py-5 md:py-0"
    >
      {infoTShirts &&
        infoTShirts.map((tshirt) => (
          <div
            key={tshirt.id}
            className="w-full flex flex-col items-center justify-center rounded-xl shadow-xl hover:shadow-2xl cursor-pointer transition-all pb-7"
          >
            <Image src={tshirt.image} alt={tshirt.alt} />
            <article className="flex flex-col gap-5 text-center pt-5">
              <h3>{tshirt.brand.toUpperCase()}</h3>
              <h4>{tshirt.nameZapatilla.toUpperCase()}</h4>
              <h6>S/.{tshirt.precio}</h6>
            </article>
          </div>
        ))}
    </section>
  );
}
