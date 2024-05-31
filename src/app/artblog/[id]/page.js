'use client'
import { usePathname } from "next/navigation"
import { blogsArray } from "@/utils/blogs";
import Image from "next/image";
import { hepta_slab_font, jost_font } from "@/utils/fonts";

export default function IndividualBlog() {
    const pathname = usePathname();
    const idPathname = pathname.split('/')[2];

    const individualBlog = blogsArray.find(blog => blog.id === idPathname);

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
            <h2 className={`mt-[68px] w-full 2xl:w-[1080px] text-center md:text-left text-3.5xl lg:text-4xl font-bold ${jost_font.className}`}>
                {individualBlog.title}
            </h2>
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
