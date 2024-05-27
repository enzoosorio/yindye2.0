import Image from "next/image";
import Banner from '../assets/imagenesyotrosrecursos/banners/banner_landscape_1080_px.webp';
import CardWrapper from "@/components/CardWrapper";
import CardWrapperTShirt from "@/components/cardWrapperTShirts";
import ImageCat from "@/components/ImageCat";
import ImagesModels from "@/components/ImagesModels";
import { jost_font } from "@/utils/fonts";
import monalisa from '../assets/imagenesyotrosrecursos/as-icon-parte-below-hero/la-monalisa-as-icon.svg'
import microfono from '../assets/imagenesyotrosrecursos/as-icon-parte-below-hero/microfono-as-icon.svg'

export default function Home() {
  return (
    <main className={`w-full md:w-3/4 mx-auto  mt-24 flex flex-col items-center justify-center ${jost_font.className}`}>
      <Image src={Banner} alt="banner yindyeart" className="w-[576px] md:w-[577px] lg:w-[746px] xl:w-[903px] 2xl:w-[1080px]" />
      <h2 className="mt-[68px] w-full 2xl:w-[1080px] text-center md:text-left text-2xl lg:text-3xl">Un estilo fuera de la <span className="text-lime-400/80">rutina.</span></h2>
      <CardWrapper />
      <h2 className="mt-[68px] w-full 2xl:w-[1080px] text-center md:text-left text-2xl lg:text-3xl">Todo empezó con el<span className="text-orange-400/80">&nbsp;TIE DYE.</span></h2>
      <CardWrapperTShirt />
      <h2 className="mt-[68px] w-full 2xl:w-[1080px] text-center md:text-left text-2xl lg:text-3xl">Acá amamos a los <span className="text-sky-400">gatos.</span></h2>
      <ImageCat />
      <h2 className="mt-[50px] w-11/12 2xl:w-[1080px] text-pretty md:w-full text-center md:text-left text-2xl lg:text-3xl">Agradecemos a la gente que nos ayuda a hacer crecer esta comunidad 🤍</h2>
      <ImagesModels />
    </main>
  );
}
