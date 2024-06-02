"use client";
import { infoTShirts } from "@/utils/2024_collection";
import Image from "next/image";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import Whatsapp from "../../assets/imagenesyotrosrecursos/iconssvgs/MdiWhatsappWhite.svg";
import Link from "next/link";

export default function RightWrapperSizeTshirt() {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();
  const idTshirt = pathname.split("/")[3];

  const tshirt = infoTShirts.find((tshirt) => tshirt.id === Number(idTshirt));

  const sizes = tshirt.sizes;
  const params = new URLSearchParams(searchParams);

  const handleSearchParamsSize = (size) => () => {
    if (size) {
      params.set("size", size);
    } else {
      params.delete("size");
    }
    replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const message = `Hola! quisiera adquirir el polo ${
    tshirt.nameZapatilla
  } en la talla ${params.get("size")}`;

  return (
    <div className="w-full md:max-w-60 xl:max-w-72 flex flex-col gap-3 h-auto  py-7 px-16 md:px-6 md:border-4 text-xs ">
      <h3>{tshirt.nameZapatilla.toUpperCase()}</h3>
      <h4>{tshirt.brand.toUpperCase()}</h4>
      <h4>S/{tshirt.precio}</h4>
      <p>{tshirt.descriptionTshirt}</p>
      <div className="grid grid-cols-2 grid-rows-2  p-4 w-full gap-2 my-3">
        {sizes.map((sizeTshirt, index) => (
          <button
            key={index}
            className={`col-span-1 row-span-1 px-3 py-1 text-center border border-black transition-all ${
              sizeTshirt.isAvailable
                ? params.get("size") === sizeTshirt.size
                  ? "bg-slate-500"
                  : "font-bold cursor-pointer hover:scale-105 active:bg-sky-800"
                : "bg-slate-100 text-gray-700 cursor-default"
            } `}
            onClick={
              sizeTshirt.isAvailable
                ? handleSearchParamsSize(`${sizeTshirt.size}`)
                : ""
            }
            disabled={!sizeTshirt.isAvailable}
          >
            {sizeTshirt.size}
          </button>
        ))}
      </div>
      <Link
        href={`https://wa.me/+51950306310?text=${encodeURIComponent(message)}`}
        className={`flex gap-3 bg-slate-500 w-max mx-auto rounded-xl px-5 py-[6px] hover:bg-slate-600 transition-colors text-white ${
          !params.get("size") ? "pointer-events-none opacity-50" : ""
        }`}
      >
        Contáctanos
        <Image src={Whatsapp} alt="whatsapp icon" width={16} height={16} />
      </Link>
    </div>
  );
}
