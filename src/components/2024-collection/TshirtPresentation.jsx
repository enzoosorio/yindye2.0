"use client";

import { infoTShirts } from "@/utils/2024_collection";
import Image from "next/image";
import { usePathname } from "next/navigation";
import "../../utils/custom-scrollbar.css";

export default function TshirtPresentation() {
  const pathname = usePathname();
  const idTshirt = pathname.split("/")[3];

  const tshirt = infoTShirts.find((tshirt) => tshirt.id === Number(idTshirt));

  let counterImages = 2;

  //   no lo puedo importar de otro lado porque necesito tenerlo en cada tshirt individual
  const subImagesTshirt = [
    tshirt.image,
    tshirt.image2,
    tshirt.image3,
    tshirt.image4,
    tshirt.image5,
    tshirt.image6,
    tshirt.image7,
  ];

  return (
    // <Image
    //   src={tshirt.image.src}
    //   alt={tshirt.alt}
    //   className="w-3/5 lg:w-4/5 h-full mx-auto object-contain"
    //   width={100}
    //   height={100}
    //   // ref={shirtImagesWrapperRef}
    // />
    <div className="flex md:items-center justify-start h-full w-full gap-8 custom-scrollbar  ">
      <div className="relative flex flex-col w-full lg:mx-auto h-full custom-scrollbar overflow-scroll aspect-auto scroll-smooth snap-y snap-mandatory scroll-container">
        {subImagesTshirt.map((imageTshirt, index) => (
          <Image
            key={index}
            src={imageTshirt}
            alt="Subimage"
            width={100}
            height={50}
            className="w-full object-contain  h-full snap-center"
          />
        ))}
      </div>

      <div className="hidden lg:flex flex-col items-center justify-end gap-2 w-8">
        {subImagesTshirt.map((subImage, index) => (
          <Image
            key={index}
            src={subImage}
            alt="Subimage"
            width={100}
            height={50}
            className="w-full"
          />
        ))}
      </div>
    </div>
  );
}
