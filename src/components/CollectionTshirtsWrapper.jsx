import { infoTShirts } from "@/utils/2024_collection";
import { jost_font } from "@/utils/fonts";
import Image from "next/image";
import Link from "next/link";

export default function CollectionTshirtsWrapper() {
  return (
    <section className="w-11/12 md:w-full 2xl:w-[1080px] mx-auto  grid grid-cols-2 items-center justify-center gap-3">
      {infoTShirts &&
        infoTShirts.map((tshirt) => (
          <Link
            key={tshirt.id}
            href={`/2024_collection/tshirts/${tshirt.id}`}
            className={`mt-14 md:mt-16 hover:scale-[1.03] transition-transform ${
              tshirt.id % 3 === 0
                ? "col-span-2 row-span-1 md:w-[600px] md:mx-auto"
                : "col-span-1 row-span-1 md:w-64 md:mx-auto"
            } ${jost_font.className}`}
          >
            <article className="flex flex-col items-center justify-center">
              <Image
                src={tshirt.image}
                alt={tshirt.alt}
                className="w-full rounded-md"
              />
              <h2 className="pl-2 w-full text-sm md:text-base">
                {tshirt.nameZapatilla}
              </h2>
              <p className="pl-2 w-full text-sm md:text-base">
                S/{tshirt.precio}
              </p>
            </article>
          </Link>
        ))}
    </section>
  );
}
