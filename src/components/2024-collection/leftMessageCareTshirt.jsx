"use client";

import { tshirtCares } from "@/utils/2024_collection";
import Image from "next/image";
import { useState } from "react";

export default function LeftMessageCareTshirt() {
  const [isPressed, setIsPressed] = useState(false);
  return (
    <div
      className={`hidden md:flex flex-col gap-5 md:max-w-48 xl:max-w-72 min-h-[350px] h-full lg:h-3/4 lg:max-h-[calc(100%-140px)] overflow-hidden scrollbar-hide-buttons scrollbar-thin scrollbar-webkit  ${
        isPressed
          ? "clip-inset-full-care overflow-y-visible"
          : "clip-inset-small-care"
      } border-2 p-2  transition-all`}
    >
      <h3 className="mt-5">CUIDADOS & ORIGEN</h3>
      <h3 className="text-sm mt-1">
        CUIDADOS Cuidar de tus prendas es cuidar del medioambiente.
        <p
          className={`cursor-pointer font-bold underline my-3 tracking-wide ${
            !isPressed ? "block" : "hidden"
          }`}
          onClick={() => {
            setIsPressed(!isPressed);
          }}
        >
          Ver más
        </p>
        <br /> Para mantener limpias tus chaquetas y abrigos sólo tienes que
        ventilarlas y pasarles un paño o un cepillo para la ropa. Este proceso
        es más delicado con los tejidos y además evita el consumo de agua y
        energía de los procesos de lavado.
        <br />
        <p className={`cursor-pointer font-bold underline my-3 tracking-wide `}>
          Guía para el cuidado de la ropa.
        </p>
      </h3>
      <div className="flex flex-col gap-5 w-max ml-2 mb-5 ">
        {tshirtCares &&
          tshirtCares.map((care) => (
            <div
              key={care.id}
              className="flex gap-4 justify-start items-center"
            >
              <Image src={care.iconCare} alt={`care ${care.id}`} />
              <p className="text-xs w-28 ">{care.label}</p>
            </div>
          ))}
      </div>
      {/* TODO : VER COMO REGRESO AL INICIO DE ESTE CONTAINER SI CLICKO AL VER MENOS, ya que se queda con el contenido de abajo. */}
      {/* <p className={`cursor-pointer font-bold underline my-3 tracking-wide ${!isPressed ? 'hidden' : 'block'}`} onClick={() => { setIsPressed(!isPressed) }}>Ver menos</p> */}
    </div>
  );
}
