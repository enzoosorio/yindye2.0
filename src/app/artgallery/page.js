import Gallery from "@/components/Gallery";
import { roboto_font } from "@/utils/fonts";

export default function ArtGallery() {


    return (
        <section className={`relative w-full md:w-3/4 2xl:w-[1080px] mx-auto  mt-24 flex flex-col justify-center ${roboto_font.className}`}>
            <Gallery />
        </section>
    )
}