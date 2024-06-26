import CardWrapper from "../components/CardWrapper";
import CardWrapperTShirt from "../components/cardWrapperTShirts";
import ImageCat from "../components/ImageCat";
import { jost_font } from "../utils/fonts";
import Carousel from "../components/Carousel";
import { Subtitle } from "../utils/subtitle";
import { Suspense, lazy } from "react";
import { ModelsSkeleton } from '@/skeletons/modelsSkeleton'
export default function Home() {

  const LazyImagesModels = lazy(() => import('../components/ImagesModels.jsx'));

  return (
    <main className={`w-full md:w-3/4 mx-auto  mt-24 flex flex-col items-center justify-center ${jost_font.className}`}>
      <Carousel />
      <h2 className={`mt-[68px] w-full 2xl:w-[1080px] text-text-primary text-center md:text-left text-2xl lg:text-3xl `}>
        Un estilo fuera de la <span className="text-lime-400/80">rutina.</span>
      </h2>
      <CardWrapper />
      <Subtitle classnameprovided={'mb-10'}>Todo empezó con el<span className="text-orange-400/80">&nbsp;TIE DYE.</span></Subtitle>
      <CardWrapperTShirt />
      <Subtitle classnameprovided={''}>Acá amamos a los <span className="text-sky-400">gatos.</span></Subtitle>
      <ImageCat />
      <Subtitle classnameprovided={'mt-[50px] w-11/12 text-pretty md:w-full'}>Agradecemos a la gente que nos ayuda a hacer crecer esta comunidad 🤍</Subtitle>
      <Suspense fallback={<ModelsSkeleton />}>
        <LazyImagesModels />
      </Suspense>
      <Subtitle classnameprovided={'mt-[50px] w-11/12 md:w-full'}>Mira nuestro último video de <span className="text-red-600">Youtube.</span></Subtitle>

    </main>
  );
}
