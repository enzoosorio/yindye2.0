import CollectionTshirtsWrapper from "@/components/CollectionTshirtsWrapper";
import TextEffect from "@/components/textEffect";
import { inter_font } from "@/utils/fonts";


export default function Last_Collection() {
    return (
        <section className={`relative w-full md:w-3/4 mx-auto mt-24 flex flex-col justify-center ${inter_font.className}`}>
            <TextEffect>Colección 2024</TextEffect>
            <h2
                className={`mt-[20px] 2xl:w-[1080px] text-center md:text-left text-lg lg:text-xl text-pretty font-bold text-gray-500 w-11/12 md:w-full mx-auto transition-opacity duration-[1000ms]`}
            >
                Polos de distintos estilos, colores y diseños.
            </h2>
            <CollectionTshirtsWrapper />
        </section>
    )

}