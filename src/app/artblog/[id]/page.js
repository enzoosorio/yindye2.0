'use client'
import { usePathname } from "next/navigation"
import { useBlogArray } from "@/utils/blogs";
import Image from "next/image";
import { hepta_slab_font, jost_font } from "@/utils/fonts";

export default function IndividualBlog() {
    const pathname = usePathname();
    const idPathname = pathname.split('/')[2];

    const individualBlog = useBlogArray(idPathname);
    if (!individualBlog) {
        return <p className="w-11/12 md:w-full 2xl:w-[1080px] mx-auto mt-24 text-center">Blog no encontrado.</p>;
    }

    return (
        <article className="relative w-full md:w-3/4 2xl:w-[1080px] mx-auto my-24">
            <Image
                src={individualBlog.src.src}
                alt={individualBlog.alt}
                width={individualBlog.src.width}
                height={individualBlog.src.height}
                className="w-full"
            />
            <div className="flex flex-col md:flex-row justify-between items-center md:h-28 py-7 md:py-0 gap-6 md:gap-0">
                <h2 className={`text-center md:text-left text-3.5xl lg:text-4xl font-bold ${jost_font.className}`}>
                    {individualBlog.title}
                </h2>
                <button className="group border-2 border-orange-400 p-2 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" className="fill-none stroke-current text-orange-400 group-hover:fill-orange-400">
                        <path d="m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53z" />
                    </svg>
                </button>
            </div>
            <div className={`flex items-center justify-between w-11/12 md:w-full 2xl:w-[1080px] mt-8 mx-auto text-gray-500 ${jost_font.className}`}>
                <p>{individualBlog.creator}</p>
                <p>{individualBlog.createdAt}</p>
            </div>
            <div className={`text-sm ${hepta_slab_font.className} w-11/12 md:w-full 2xl:w-[1080px] mx-auto mt-14`} dangerouslySetInnerHTML={{ __html: individualBlog.description }} />
            {individualBlog.aditionalImage && (
                <Image
                    className="w-1/2 mx-auto mt-14"
                    src={individualBlog.aditionalImage.src}
                    alt={individualBlog.alt}
                    width={individualBlog.aditionalImage.width}
                    height={individualBlog.aditionalImage.height}
                />
            )}
        </article>
    );
}
