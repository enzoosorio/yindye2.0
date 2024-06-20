"use client";

import { useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Blogs() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearchParams = (index) => () => {
    const params = new URLSearchParams(searchParams);

    if (index) {
      params.set("searchindex", index);
    } else {
      params.delete("searchindex");
    }
    replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    if (!params.get("searchindex")) {
      params.set("searchindex", "reciente");
      replace(`${pathname}?${params.toString()}`);
    }
  }, []);

  return (
    <>
      <div className="flex justify-between items-center ">
        <h3>Ordenar por:</h3>
        <ul className="flex justify-center items-center gap-3 bg-stone-400 p-1 lg:p-2 rounded-2xl">
          <li
            onClick={handleSearchParams("reciente")}
            className={`px-1 py-2 rounded-xl text-sm lg:text-base transition-all ${
              searchParams.get("searchindex") === "reciente"
                ? "bg-slate-100 font-bold"
                : "bg-slate-300 cursor-pointer hover:font-bold hover:bg-slate-200"
            }`}
          >
            Más reciente
          </li>
          <li
            onClick={handleSearchParams("antiguo")}
            className={`px-1 py-2 rounded-xl text-sm lg:text-base transition-all ${
              searchParams.get("searchindex") === "antiguo"
                ? "bg-slate-100 font-bold"
                : "bg-slate-300 cursor-pointer hover:font-bold hover:bg-slate-200"
            }`}
          >
            Más antiguo
          </li>
          <li
            onClick={handleSearchParams("favoritos")}
            className={`px-1 py-2 rounded-xl text-sm lg:text-base transition-all ${
              searchParams.get("searchindex") === "favoritos"
                ? "bg-slate-100 font-bold"
                : "bg-slate-300 cursor-pointer hover:font-bold hover:bg-slate-200"
            }`}
          >
            Favoritos
          </li>
        </ul>
      </div>
    </>
  );
}
