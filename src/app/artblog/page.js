'use client'

import { hepta_slab_font, inter_font, jost_font, roboto_font } from "@/utils/fonts";
import Image from "next/image";
import BannerFarro from '../../assets/imagenesyotrosrecursos/banners/banner_imagen_farro_bg_brown_comprimido.webp'
import Subtitle from "@/utils/subtitle";
import Blogs from "@/components/Blogs";
import { useRef } from "react";
import useIsVisible from "@/utils/useIsVisible";



export default function ArtBlog() {

    const subtitleRef = useRef();
    const isVisible = useIsVisible(subtitleRef);

    return (
        <section className={`relative w-full md:w-3/4 mx-auto mt-24 flex flex-col justify-center ${inter_font.className}`}>
            <Image src={BannerFarro} alt="banner model farro" className="w-full 2xl:w-[1080px] mx-auto" />
            <h2 ref={subtitleRef} className={`mt-[68px] w-full 2xl:w-[1080px] text-center md:text-left text-3xl lg:text-4xl font-bold mx-auto transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                <span className="hover:text-4xl hover:text-blue-700 lg:hover:text-4.5xl transition-colors duration-75">A</span>
                <span className="hover:text-4xl hover:text-blue-700 lg:hover:text-4.5xl transition-colors duration-75">r</span>
                <span className="hover:text-4xl hover:text-blue-700 lg:hover:text-4.5xl transition-colors duration-75">t</span>
                <span className="hover:text-4xl hover:text-blue-700  lg:hover:text-4.5xl transition-colors duration-75">b</span>
                <span className="hover:text-4xl hover:text-blue-700 lg:hover:text-4.5xl transition-colors duration-75">l</span>
                <span className="hover:text-4xl hover:text-blue-700 lg:hover:text-4.5xl transition-colors duration-75">o</span>
                <span className="hover:text-4xl hover:text-blue-700 lg:hover:text-4.5xl transition-colors duration-75">g</span>
            </h2>
            <h2 className={`mt-[20px] 2xl:w-[1080px] text-center md:text-left text-lg lg:text-xl text-pretty font-bold text-gray-500 w-11/12 md:w-full mx-auto transition-opacity duration-[1000ms] ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                En esta sección queremos expresarnos y dar a conocer un poco más los estilos de arte que podemos hacer, y que tú también puedes. Súmate a #freeart #yindyeart
            </h2>
            <Blogs />
            <p className={`${hepta_slab_font.className} w-11/12 md:w-full text-pretty  2xl:w-[1080px] mx-auto mt-24`}>En esta sección, nos
                proponemos no solo mostrar nuestras creaciones artísticas, sino también inspirarte a explorar y desarrollar tu propio estilo.
                El arte es un lenguaje universal que nos permite expresar nuestras emociones, pensamientos y perspectivas de una manera única
                y personal.
                <br />
                Bajo ésta iniciativa, promovemos la libertad creativa sin restricciones, donde cada pincelada, nota tocada o actuación en
                un centro es una manifestación auténtica del artista. </p>
            <p className={`${hepta_slab_font.className} w-11/12 md:w-full text-pretty  2xl:w-[1080px] mx-auto mt-10 mb-10`}>Queremos que te sumes
                a nosotros en esta apasionante travesía artística. Ya seas un artista experimentado o un principiante, aquí encontrarás
                inspiración y apoyo para que puedas descubrir y perfeccionar tu estilo único. ¡Súmate a #freeart y #yindyeart y deja que
                tu creatividad florezca sin límites!</p>
        </section>
    )
}