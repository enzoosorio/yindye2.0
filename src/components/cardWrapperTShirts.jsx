import Image from "next/image";
import Link from "next/link";
import { getPolosToHero } from "@/data/polo";
import { getImagePoloById } from "@/data/imagesPolo";

export default async function CardWrapperTShirt() {
  const polos = await getPolosToHero();

  console.log(polos);

  if (!polos || !polos.length) {
    <p className="w-11/12 md:w-full 2xl:w-[1080px] mx-auto mt-24 text-center">
      No existen polos 😖
    </p>;
  }

  return (
    <section className="w-11/12 md:w-full  2xl:w-[1080px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-center items-center mb-10 mt-20 mx-auto rounded-lg py-5 md:py-0">
      {polos &&
        polos.map((tshirt, index) => (
          <Link key={tshirt.id} href={`/2024_collection/tshirts/${tshirt.id}`}>
            <div
              key={tshirt.id}
              className="w-full flex flex-col items-center justify-center shadow-xl border border-gray-400 hover:shadow-2xl cursor-pointer transition-all pb-7"
            >
              <Image
                src={tshirt.imageUrl}
                alt={`Polo numero ${index}`}
                width={563}
                height={845}
              />
              <article className="flex flex-col gap-5 text-text-primary text-center pt-5">
                <h3>{tshirt.smallNameProduct.toUpperCase()}</h3>
                <h4>{tshirt.nameProduct.toUpperCase()}</h4>
                <h6>S/.{tshirt.price}</h6>
              </article>
            </div>
          </Link>
        ))}
    </section>
  );
}
