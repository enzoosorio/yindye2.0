"use client";

import Gallery1 from "../assets/imagenesyotrosrecursos/banners/marley_foto_playa_2_gallery.webp";
import Gallery2 from "../assets/imagenesyotrosrecursos/banners/eleva_tu_estilo_gallery.webp";
import Gallery3 from "../assets/imagenesyotrosrecursos/banners/banner_shany_bg_violet.webp";
import Gallery4 from "../assets/imagenesyotrosrecursos/banners/tu_moda_tu_estilo_diego_gallery.webp";
import Gallery5 from "../assets/imagenesyotrosrecursos/banners/banner_gallery_3.webp";
import Gallery6 from "../assets/imagenesyotrosrecursos/banners/marley_foto_playa_1_gallery.webp";
import Gallery7 from "../assets/imagenesyotrosrecursos/banners/banner_imagen_farro_bg_brown_comprimido.webp";
import Image from "next/image";
import useIsVisible from "@/utils/useIsVisible";
import { useRef } from "react";

export default function Gallery() {
  const textRef = useRef();
  const image1Ref = useRef();
  const image2Ref = useRef();
  const image3Ref = useRef();
  const image4Ref = useRef();
  const image5Ref = useRef();
  const image6Ref = useRef();
  const image7Ref = useRef();

  const isTextVisible = useIsVisible(textRef);
  const isImage1Visible = useIsVisible(image1Ref);
  const isImage2Visible = useIsVisible(image2Ref);
  const isImage3Visible = useIsVisible(image3Ref);
  const isImage4Visible = useIsVisible(image4Ref);
  const isImage5Visible = useIsVisible(image5Ref);
  const isImage6Visible = useIsVisible(image6Ref);
  const isImage7Visible = useIsVisible(image7Ref);

  return (
    <>
      <h1
        ref={textRef}
        className={`absolute top-5 ${
          isTextVisible ? "left-0" : "left-full"
        } w-full text-center md:text-left 2xl:w-[1080px] text-3xl mx-auto text-sky-400 transition-all duration-700`}
      >
        ArtGallery
      </h1>
      <div className="w-full 2xl:w-[1080px] grid grid-cols-4 mx-auto mt-36 mb-20 gap-2 p-2 md:p-0">
        <Image
          ref={image1Ref}
          src={Gallery1}
          className={`col-span-2 row-span-1 w-[530px] ${
            isImage1Visible ? "opacity-100" : "opacity-0"
          } h-full rounded-xl transition-all duration-700`}
        />
        <Image
          ref={image2Ref}
          src={Gallery2}
          className={`col-span-2 row-span-1 w-[630px] ${
            isImage2Visible ? "opacity-100" : "opacity-0"
          } h-full rounded-xl transition-all duration-700 `}
        />
        <Image
          ref={image3Ref}
          src={Gallery3}
          className={`col-span-4 row-span-1 ${
            isImage3Visible ? "opacity-100" : "opacity-0"
          } h-full rounded-xl transition-all duration-700`}
        />
        <Image
          ref={image4Ref}
          src={Gallery4}
          className={`col-span-2 row-span-1 ${
            isImage4Visible ? "opacity-100" : "opacity-0"
          } h-full rounded-xl transition-all duration-700`}
        />
        <Image
          ref={image6Ref}
          src={Gallery6}
          className={`col-span-2 row-span-2 ${
            isImage6Visible ? "opacity-100" : "opacity-0"
          } h-full rounded-xl transition-all duration-700`}
        />
        <Image
          ref={image5Ref}
          src={Gallery5}
          className={`col-span-2 row-span-1 ${
            isImage5Visible ? "opacity-100" : "opacity-0"
          } h-full rounded-xl transition-all duration-700`}
        />
        <Image
          ref={image7Ref}
          src={Gallery7}
          className={`col-span-4 row-span-1 ${
            isImage7Visible ? "opacity-100" : "opacity-0"
          } rounded-xl transition-all duration-700`}
        />
      </div>
    </>
  );
}
