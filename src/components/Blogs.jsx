"use client";

import { useState } from "react";
import CardBlogsWrapper from "./CardBlogsWrapper";

export default function Blogs() {
  const [indexSelected, setIndexSelected] = useState(1);

  return (
    <div className="w-11/12 md:w-full mx-auto mt-24 2xl:w-[1080px] ">
      <div className="flex justify-between items-center ">
        <h3>Ordenar por:</h3>
        <ul className="flex justify-center items-center gap-3 bg-stone-400 p-1 lg:p-2 rounded-2xl">
          {/* manejar estado global para compartir con el otro componente, entorno a actualizar los blogs por filtro, ya que esta en otro componente */}
          <li
            onClick={() => {
              setIndexSelected(1);
            }}
            className={`px-1 py-2  rounded-xl text-sm lg:text-base transition-all ${
              indexSelected === 1
                ? "bg-slate-100 font-bold"
                : "bg-slate-300 cursor-pointer hover:font-bold hover:bg-slate-200"
            }`}
          >
            Más reciente
          </li>
          <li
            onClick={() => {
              setIndexSelected(2);
            }}
            className={`px-1 py-2 rounded-xl text-sm lg:text-base transition-all ${
              indexSelected === 2
                ? "bg-slate-100 font-bold"
                : "bg-slate-300 cursor-pointer hover:font-bold hover:bg-slate-200"
            }`}
          >
            Más visto
          </li>
          <li
            onClick={() => {
              setIndexSelected(3);
            }}
            className={`px-1 py-2  rounded-xl text-sm lg:text-base transition-all ${
              indexSelected === 3
                ? "bg-slate-100 font-bold"
                : "bg-slate-300 cursor-pointer hover:font-bold  hover:bg-slate-200"
            }`}
          >
            Recomendado
          </li>
        </ul>
      </div>
      <CardBlogsWrapper />
    </div>
  );
}
