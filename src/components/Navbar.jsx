"use client";

import React, { useState } from "react";
import Image from "next/image";
import Logo from "../assets/imagenesyotrosrecursos/parte_del_logo/Logo_transparent_yindye_.webp";
import Logo_cat from "../assets/imagenesyotrosrecursos/parte_del_logo/gato_with_shadow.jpg";
import Link from "next/link";
import clsx from "clsx";
import { hepta_slab_font } from "@/utils/fonts";

export default function Navbar() {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <nav className="relative flex items-center justify-between px-6 xl:px-0 mt-10 xl:w-[1080px] mx-auto">
      <div className="relative">
        <Link
          onClick={() => {
            isPressed ? setIsPressed(!isPressed) : "";
          }}
          href={"/"}
        >
          <Image src={Logo} width={140} />
          <Image
            src={Logo_cat}
            width={70}
            className="absolute top-3 -left-2 -z-10"
          />
        </Link>
      </div>
      <ul className="hidden md:flex items-center justify-center gap-9 pr-2">
        <li className="hover:scale-110 transition-transform">
          <Link href={"/2024_collection"}>2024 collection</Link>
        </li>
        <li className="hover:scale-110 transition-transform">
          <Link href={"/artgallery"}>ArtGallery</Link>
        </li>
        <li className="hover:scale-110 transition-transform">
          <Link
            className="bg-orange-400 p-3 rounded-xl text-white"
            href={"/artblog"}
          >
            ArtBlog
          </Link>
        </li>
      </ul>
      <button
        className="md:hidden bg-orange-400 rounded-md hover:scale-110 transition-transform"
        onClick={() => {
          setIsPressed(!isPressed);
        }}
      >
        {!isPressed ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 256 256"
            className="p-1"
          >
            <path
              fill="#ffffff"
              d="M228 128a12 12 0 0 1-12 12H40a12 12 0 0 1 0-24h176a12 12 0 0 1 12 12M40 76h176a12 12 0 0 0 0-24H40a12 12 0 0 0 0 24m176 104H40a12 12 0 0 0 0 24h176a12 12 0 0 0 0-24"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 56 56"
            className="p-1"
          >
            <path
              fill="#ffffff"
              d="M10.023 43.023c-.796.797-.82 2.157 0 2.954c.82.796 2.157.796 2.977 0l15-15l15 15c.797.796 2.156.82 2.977 0c.796-.82.796-2.157 0-2.954L30.953 28l15.024-15c.796-.797.82-2.156 0-2.953c-.844-.82-2.18-.82-2.977 0l-15 15l-15-15c-.82-.82-2.18-.844-2.977 0c-.796.82-.796 2.156 0 2.953l15 15Z"
            />
          </svg>
        )}
      </button>
      <ul
        className={clsx(
          `md:hidden fixed top-0 w-full h-screen flex flex-col items-center justify-center gap-12 text-white bg-orange-400 opacity-0 -z-50 transition-all ${hepta_slab_font.className}`,
          {
            "opacity-100 z-[100] left-0": isPressed,
            "opacity-0 -z-50 left-full": !isPressed,
          }
        )}
      >
        <button
          onClick={() => {
            setIsPressed(!isPressed);
          }}
          className="absolute top-[44px] right-7"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 56 56"
            className="p-1"
          >
            <path
              fill="#ffffff"
              d="M10.023 43.023c-.796.797-.82 2.157 0 2.954c.82.796 2.157.796 2.977 0l15-15l15 15c.797.796 2.156.82 2.977 0c.796-.82.796-2.157 0-2.954L30.953 28l15.024-15c.796-.797.82-2.156 0-2.953c-.844-.82-2.18-.82-2.977 0l-15 15l-15-15c-.82-.82-2.18-.844-2.977 0c-.796.82-.796 2.156 0 2.953l15 15Z"
            />
          </svg>
        </button>
        <li className="text-xl font-bold hover:text-2xl transition-all">
          <Link
            onClick={() => {
              setIsPressed(!isPressed);
            }}
            href={"/"}
          >
            Inicio
          </Link>
        </li>

        <li className="text-xl font-bold hover:text-2xl transition-all">
          <Link
            onClick={() => {
              setIsPressed(!isPressed);
            }}
            href={"/2024_collection"}
          >
            2024 collection
          </Link>
        </li>
        <li className="text-xl font-bold hover:scale-110 transition-all">
          <Link
            onClick={() => {
              setIsPressed(!isPressed);
            }}
            href={"/artgallery"}
          >
            ArtGallery
          </Link>
        </li>
        <li className="text-xl font-bold hover:scale-110 transition-all">
          <Link
            onClick={() => {
              setIsPressed(!isPressed);
            }}
            href={"/artblog"}
          >
            ArtBlog
          </Link>
        </li>
      </ul>
    </nav>
  );
}
