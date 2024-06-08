"use client";

import { useState, useEffect, useRef } from "react";
import playButtonBlack from "@/assets/imagenesyotrosrecursos/iconssvgs/PlayIconColorBlack.svg";
import playButtonGray from "@/assets/imagenesyotrosrecursos/iconssvgs/PlayIconColorGray.svg";
import stopButtonBlack from "@/assets/imagenesyotrosrecursos/iconssvgs/StopIconColorBlack.svg";
import stopButtonGray from "@/assets/imagenesyotrosrecursos/iconssvgs/StopIconColorGray.svg";
import Image from "next/image";
import farrosofia1 from "@/assets/imagenesyotrosrecursos/farro_sofia_modelos/farro_sofia1.webp";
import farrosofia2 from "@/assets/imagenesyotrosrecursos/farro_sofia_modelos/farro_sofia2.webp";
import farrosofia3 from "@/assets/imagenesyotrosrecursos/farro_sofia_modelos/farro_sofia3.webp";
import farrosofia4 from "@/assets/imagenesyotrosrecursos/farro_sofia_modelos/farro_sofia4.webp";
import farrosofia5 from "@/assets/imagenesyotrosrecursos/farro_sofia_modelos/farro_sofia5.webp";
import farrosofia6 from "@/assets/imagenesyotrosrecursos/farro_sofia_modelos/farro_sofia6.webp";
import farrosofia7 from "@/assets/imagenesyotrosrecursos/farro_sofia_modelos/farro_sofia7.webp";
import farrosofia8 from "@/assets/imagenesyotrosrecursos/farro_sofia_modelos/farro_sofia8.webp";
import farrosofia9 from "@/assets/imagenesyotrosrecursos/farro_sofia_modelos/farro_sofia9.webp";

import marley1 from "@/assets/imagenesyotrosrecursos/marly_modelo/marly1.webp";
import marley2 from "@/assets/imagenesyotrosrecursos/marly_modelo/marly2.webp";
import marley3 from "@/assets/imagenesyotrosrecursos/marly_modelo/marly3.webp";
import marley4 from "@/assets/imagenesyotrosrecursos/marly_modelo/marly4.webp";
import marley5 from "@/assets/imagenesyotrosrecursos/marly_modelo/marly5.webp";
import marley6 from "@/assets/imagenesyotrosrecursos/marly_modelo/marly6.webp";
import marley7 from "@/assets/imagenesyotrosrecursos/marly_modelo/marly7.webp";
import marley8 from "@/assets/imagenesyotrosrecursos/marly_modelo/marly8.webp";
import marley9 from "@/assets/imagenesyotrosrecursos/marly_modelo/marly9.webp";

export default function ImagesModels() {
  const [isReproducing, setIsReproducing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  const farroSofiaPhotos = [
    { id: 1, src: farrosofia1, altImg: "farro and sofia models photo 1" },
    { id: 2, src: farrosofia2, altImg: "farro and sofia models photo 2" },
    { id: 3, src: farrosofia3, altImg: "farro and sofia models photo 3" },
    { id: 4, src: farrosofia4, altImg: "farro and sofia models photo 4" },
    { id: 5, src: farrosofia5, altImg: "farro and sofia models photo 5" },
    { id: 6, src: farrosofia6, altImg: "farro and sofia models photo 6" },
    { id: 7, src: farrosofia7, altImg: "farro and sofia models photo 7" },
    { id: 8, src: farrosofia8, altImg: "farro and sofia models photo 8" },
    { id: 9, src: farrosofia9, altImg: "farro and sofia models photo 9" },
  ];

  const marleyPhotos = [
    { id: 1, src: marley1, altImg: "marley model photo 1" },
    { id: 2, src: marley2, altImg: "marley model photo 2" },
    { id: 3, src: marley3, altImg: "marley model photo 3" },
    { id: 4, src: marley4, altImg: "marley model photo 4" },
    { id: 5, src: marley5, altImg: "marley model photo 5" },
    { id: 6, src: marley6, altImg: "marley model photo 6" },
    { id: 7, src: marley7, altImg: "marley model photo 7" },
    { id: 8, src: marley8, altImg: "marley model photo 8" },
    { id: 9, src: marley9, altImg: "marley model photo 9" },
  ];

  useEffect(() => {
    if (isReproducing) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex(
          (prevIndex) => (prevIndex + 1) % farroSofiaPhotos.length
        );
      }, 1000);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isReproducing, farroSofiaPhotos.length]);

  return (
    <section className="w-11/12 md:w-full 2xl:w-[1080px] grid grid-cols-2 grid-rows-5 gap-x-2 lg:gap-x-10 gap-y-10 mb-10 mt-14 ">
      <div className="col-span-1 row-span-4">
        <Image
          src={farroSofiaPhotos[currentIndex].src}
          alt={farroSofiaPhotos[currentIndex].altImg}
          className="rounded-xl"
        />
      </div>
      <div className="col-span-1 row-span-4">
        <Image
          src={marleyPhotos[currentIndex].src}
          alt={marleyPhotos[currentIndex].altImg}
          className="rounded-xl"
        />
      </div>
      <div className="col-span-2 row-span-1 justify-center items-center w-max mx-auto ">
        <button
          onClick={() => setIsReproducing(true)}
          disabled={isReproducing}
          className={`${
            !isReproducing ? "hover:scale-110 transition-transform" : ""
          }`}
        >
          <Image
            src={isReproducing ? playButtonGray : playButtonBlack}
            className="w-10 lg:w-[70px]"
            alt="Play Button"
          />
        </button>
        <button
          onClick={() => setIsReproducing(false)}
          disabled={!isReproducing}
          className={`${
            isReproducing ? "hover:scale-110 transition-transform" : ""
          }`}
        >
          <Image
            src={isReproducing ? stopButtonBlack : stopButtonGray}
            className="w-10 lg:w-[70px]"
            alt="Stop Button"
          />
        </button>
      </div>
    </section>
  );
}
