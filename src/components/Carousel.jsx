"use client";

import Image from "next/image";
import rightArrow from "@/assets/imagenesyotrosrecursos/iconssvgs/right-arrow-svg.svg";
import { useEffect, useRef, useState } from "react";

import Banner1 from "@/assets/imagenesyotrosrecursos/banners/banner_landscape.webp";
import Banner2 from "@/assets/imagenesyotrosrecursos/banners/banner_imagen_farro_bg_brown_comprimido.webp";
import Banner3 from "@/assets/imagenesyotrosrecursos/banners/banner_shany_bg_violet.webp";
import Banner4 from "@/assets/imagenesyotrosrecursos/banners/eleva_tu_estilo_gallery.webp";

export default function Carousel() {
  const [isHovered, setIsHovered] = useState(false);
  const [indexBanner, setIndexBanner] = useState(1);
  const bannerRef = useRef();

  const banners = [
    {
      id: 1,
      src: Banner1,
      alt: "banner yindyeart 1",
      width: 1080,
      height: 480,
    },
    {
      id: 2,
      src: Banner2,
      alt: "banner yindyeart 2",
      width: 576,
      height: 480,
    },
    {
      id: 3,
      src: Banner3,
      alt: "banner yindyeart 3",
      width: 576,
      height: 480,
    },
    {
      id: 4,
      src: Banner4,
      alt: "banner yindyeart 4",
      width: 576,
      height: 480,
    },
  ];

  // Preload images when the component mounts
  useEffect(() => {
    banners.forEach((banner) => {
      // Use priority="true" to preload the image
      // Use loading="eager" to force the image to load immediately
      <Image
        src={banner.src}
        priority={true}
        alt="banner Image Yindye"
        loading="eager"
      />;
    });
  }, []);

  useEffect(() => {
    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    const bannerElement = bannerRef.current;
    if (bannerElement) {
      bannerElement.addEventListener("mouseenter", handleMouseEnter);
      bannerElement.addEventListener("mouseleave", handleMouseLeave);
    }

    // Cleanup the event listeners on component unmount
    return () => {
      if (bannerElement) {
        bannerElement.removeEventListener("mouseenter", handleMouseEnter);
        bannerElement.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndexBanner((prevIndex) =>
        prevIndex === banners.length ? 1 : prevIndex + 1
      );
    }, 6000);

    return () => clearInterval(intervalId);
  }, [banners.length, indexBanner]);

  const bannerToShow = banners.find((banner) => banner.id === indexBanner);

  return (
    <div
      ref={bannerRef}
      className="relative w-full 2xl:w-[1080px] overflow-x-hidden"
    >
      {bannerToShow && (
        <Image
          src={bannerToShow.src}
          alt={bannerToShow.alt}
          className="w-full"
        />
      )}

      <button
        className={`absolute ${
          isHovered ? "left-3 opacity-100" : "right-full opacity-0"
        } top-1/2 z-30 transition-all duration-300`}
        onClick={() => {
          setIndexBanner((prevIndex) => prevIndex - 1);
        }}
        disabled={indexBanner === 1}
      >
        <Image
          src={rightArrow}
          alt="Previous"
          className={`rotate-180 w-6 md:w-8 ${
            indexBanner !== 1 ? "hover:scale-110" : ""
          } transition-transform`}
        />
      </button>
      <button
        className={`absolute ${
          isHovered ? "right-3 opacity-100" : "left-full opacity-0"
        } top-1/2 z-30 transition-all duration-300`}
        onClick={() => {
          setIndexBanner((prevIndex) =>
            prevIndex === banners.length ? 1 : prevIndex + 1
          );
        }}
      >
        <Image
          src={rightArrow}
          alt="Next"
          className={`w-6 md:w-8 ${
            indexBanner !== banners.length ? "hover:scale-110" : ""
          } transition-transform`}
        />
      </button>
    </div>
  );
}
