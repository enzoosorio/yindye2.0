import CardWrapper from "@/components/CardWrapper";
import CardWrapperTShirt from "@/components/cardWrapperTShirts";
import ImageCat from "@/components/ImageCat";
import ImagesModels from "@/components/ImagesModels";
import { jost_font } from "@/utils/fonts";
import monalisa from '../assets/imagenesyotrosrecursos/as-icon-parte-below-hero/la-monalisa-as-icon.svg'
import microfono from '../assets/imagenesyotrosrecursos/as-icon-parte-below-hero/microfono-as-icon.svg'
import Carousel from "@/components/Carousel";
import { Subtitle } from "@/utils/subtitle";

export default function Home() {
  return (
    <main className={`w-full md:w-3/4 mx-auto  mt-24 flex flex-col items-center justify-center ${jost_font.className}`}>
      <Carousel />
      <h2 className={`mt-[68px] w-full 2xl:w-[1080px] text-center md:text-left text-2xl lg:text-3xl `}>
        Un estilo fuera de la <span className="text-lime-400/80">rutina.</span>
      </h2>
      <CardWrapper />
      <Subtitle classnameprovided={'mb-10'}>Todo empezó con el<span className="text-orange-400/80">&nbsp;TIE DYE.</span></Subtitle>
      <CardWrapperTShirt />
      <Subtitle classnameprovided={''}>Acá amamos a los <span className="text-sky-400">gatos.</span></Subtitle>
      <ImageCat />
      <Subtitle classnameprovided={'mt-[50px] w-11/12 text-pretty md:w-full'}>Agradecemos a la gente que nos ayuda a hacer crecer esta comunidad 🤍</Subtitle>
      <ImagesModels />
      <Subtitle classnameprovided={'mt-[50px] w-11/12 md:w-full'}>Mira nuestro último video de <span className="text-red-600">Youtube.</span></Subtitle>

    </main>
  );
}
