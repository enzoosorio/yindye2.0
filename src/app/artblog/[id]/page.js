import Image from "next/image";
import { hepta_slab_font, jost_font } from "../../../utils/fonts";
import { ButtonFavoriteBlog } from '@/components/buttonContact/buttonFavoriteBlog'
import { auth } from "@/auth";
import { Calification } from './_component/calification'
import { getBlogById } from '../../../data/blog'
import { getUserById } from '../../../data/user'
import { getCalificationBlogByUserAndBlogId } from "@/data/calificationblog";
import { getIsFavoriteBlog } from "../../../actions/favoriteBlog";

export default async function IndividualBlog({ params }) {
    const { id } = params;
    const individualBlogServer = await getBlogById(id);

    const session = await auth();
    const userIdSession = session?.user.id
    let notSession = !(session?.user);

    const isFavorite = await getIsFavoriteBlog(userIdSession || '', id);

    const calificationBlog = await getCalificationBlogByUserAndBlogId(userIdSession, id)
    const valueCalification = calificationBlog?.value || 0;

    if (!individualBlogServer) {
        return <p className="w-11/12 md:w-full 2xl:w-[1080px] mx-auto mt-24 text-center">Blog no encontrado.</p>;
    }

    const authorBlog = await getUserById(individualBlogServer.authorId);
    const authorName = authorBlog.name;

    return (
        <article className="relative w-full md:w-3/4 2xl:w-[1080px] mx-auto my-24">
            <Image
                src={individualBlogServer.mainImage}
                alt={individualBlogServer.altMainImage}
                width={500}
                height={300}
                className="w-full"
            />
            <div className="flex flex-col md:flex-row justify-between items-center md:h-28 py-7 md:py-0 gap-6 md:gap-0">
                <h2 className={`text-center md:text-left text-3.5xl lg:text-4xl font-bold ${jost_font.className}`}>
                    {individualBlogServer.title}
                </h2>
                <ButtonFavoriteBlog notSession={notSession} idUser={userIdSession} idBlog={id} initialFavorite={isFavorite} />
            </div>
            <div className={`flex items-center justify-between w-11/12 md:w-full 2xl:w-[1080px] mt-8 mx-auto text-text-secondary ${jost_font.className}`}>
                <p>{authorName}</p>
                <p>{new Date(individualBlogServer.createdAt).toLocaleDateString()}</p>
            </div>
            <div className={`text-sm ${hepta_slab_font.className} w-11/12 md:w/full 2xl:w-[1080px] mx-auto mt-14`} dangerouslySetInnerHTML={{ __html: individualBlogServer.description }} />
            {individualBlogServer.finalImage && (
                <Image
                    className="w-1/2 mx-auto mt-14"
                    src={individualBlogServer.finalImage}
                    alt={individualBlogServer.altFinalImage}
                    width={500}
                    height={300}
                />
            )}

            <div className=" w-3/4  mx-auto mt-14 text-center">
                <h3 className={`text-4xl ${notSession ? 'text-gray-600' : ''}`}>
                    ¿Cómo calificarías este blog?
                </h3>
                <Calification notSession={notSession} valueCalification={valueCalification} />
            </div>
        </article>
    );
}
