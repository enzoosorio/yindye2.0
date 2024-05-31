import Image from "next/image";
import { infoTShirts } from "@/utils/2024_collection";
import Link from "next/link";

export default function CardWrapperTShirt() {
  return (
    <section className="w-11/12 md:w-full  2xl:w-[1080px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-center items-center mb-10 mt-20 mx-auto rounded-lg py-5 md:py-0">
      {infoTShirts &&
        infoTShirts.map((tshirt) => (
          <Link key={tshirt.id} href={`/2024_collection/tshirts/${tshirt.id}`}>
            <div
              key={tshirt.id}
              className="w-full flex flex-col items-center justify-center rounded-xl shadow-xl hover:shadow-2xl cursor-pointer transition-all pb-7"
            >
              <Image src={tshirt.image} alt={tshirt.alt} />
              <article className="flex flex-col gap-5 text-center pt-5">
                <h3>{tshirt.brand.toUpperCase()}</h3>
                <h4>{tshirt.nameZapatilla.toUpperCase()}</h4>
                <h6>S/.{tshirt.precio}</h6>
              </article>
            </div>
          </Link>
        ))}
    </section>
  );
}
