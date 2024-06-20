import { getPolos } from "@/data/polo";
import { jost_font } from "../utils/fonts";
import Image from "next/image";
import Link from "next/link";
import { getImagePoloById } from "@/data/imagesPolo";

export default async function CollectionTshirtsWrapper() {
  const products = await getPolos();

  if (!products) {
    return (
      <p className="w-11/12 md:w-full 2xl:w-[1080px] mx-auto mt-24 text-center">
        No hay registro de productos en la db.
      </p>
    );
  }

  let arrayImages = [];

  for (let i = 0; i < products.length; i++) {
    const imagesPolo = await getImagePoloById(products?.[i].id);
    arrayImages.push(imagesPolo.url);
  }

  return (
    <section className="w-11/12 md:w-full 2xl:w-[1080px] mx-auto  grid grid-cols-2 items-center justify-center gap-3">
      {products &&
        products.map((tshirt, index) => (
          <Link
            key={tshirt.id}
            href={`/2024_collection/tshirts/${tshirt.id}`}
            className={`mt-14 md:mt-16 hover:scale-[1.03] transition-transform ${
              index % 3 === 0
                ? "col-span-2 row-span-1 md:w-[600px] md:mx-auto"
                : "col-span-1 row-span-1 md:w-64 md:mx-auto"
            } ${jost_font.className}`}
          >
            <article className="flex flex-col items-center justify-center">
              <Image
                src={arrayImages[index]}
                alt={`Image polo ${index}`}
                width={563}
                height={845}
                className="w-full rounded-md"
              />
              <h2 className="pl-2 w-full text-sm md:text-base">
                {tshirt.nameProduct}
              </h2>
              <p className="pl-2 w-full text-sm md:text-base">
                S/{tshirt.price}
              </p>
            </article>
          </Link>
        ))}
    </section>
  );
}
