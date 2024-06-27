import { hepta_slab_font, inter_font } from "@/utils/fonts";
import Image from "next/image";
import BannerFarro from '../../assets/imagenesyotrosrecursos/banners/banner_imagen_farro_bg_brown_comprimido.webp';
import Blogs from "@/components/Blogs";
import TextEffect from "@/components/textEffect";
import CardBlogsWrapper from "@/components/CardBlogsWrapper";
import { Suspense } from "react";
import BlogSkeleton from '@/skeletons/blogWrapperSkeleton'
import { getNumberOfBlogsPosts } from '@/data/blog'
import { auth } from '@/auth'
import { ButtonsPagination } from '@/components/buttonContact/buttonsPagination'
import { getNumberOfFavoritesBlogsPosts } from "@/data/favoriteBlog";

export default async function ArtBlog({ searchParams }) {
    const searchIndex = searchParams?.searchindex;
    const page = parseInt(searchParams?.page || 0);
    const favoritePage = parseInt(searchParams?.favoritepage);
    // TODO : usar Suspense para poder envolver mis componentes que tienen que cargar
    // algunos archivos, para poder colocar un skeleton Fallback, para mejorar la UX.
    const session = await auth()
    const userId = session?.user.id;

    const NUMBER_OF_BLOGS_PER_PAGE = 6;
    const NUMBER_OF_FAVORITES_BLOGS_PER_PAGE = 4;
    const lengthBlogs = await getNumberOfBlogsPosts();

    const numberOfPages = Math.ceil(lengthBlogs / NUMBER_OF_BLOGS_PER_PAGE);

    const lengthFavoriteBlogs = await getNumberOfFavoritesBlogsPosts()
    const numberOfFavoritePages = Math.ceil(lengthFavoriteBlogs / NUMBER_OF_FAVORITES_BLOGS_PER_PAGE);

    return (
        <section className={`relative w-full md:w-3/4 mx-auto mt-24 flex flex-col justify-center ${inter_font.className}`}>
            <Image src={BannerFarro} alt="banner model farro" className="w-full 2xl:w-[1080px] mx-auto" />
            <TextEffect>ArtBlog</TextEffect>
            <h2 className={`mt-[20px] 2xl:w-[1080px] text-center md:text-left text-lg lg:text-xl text-pretty font-bold text-text-secondary w-11/12 md:w-full mx-auto transition-opacity duration-[1000ms]`}>
                En esta sección queremos expresarnos y dar a conocer un poco más los
                estilos de arte que podemos hacer, y que tú también puedes. Súmate a
                #freeart #yindyeart
            </h2>
            <div className="w-11/12 md:w-full mx-auto mt-24 2xl:w-[1080px] ">
                <Blogs searchIndex={searchIndex} />
                <Suspense fallback={<BlogSkeleton />}>
                    {page > numberOfPages ? <p>La pagina seleccionada no existe!</p> :
                        <CardBlogsWrapper searchindexparam={searchIndex} numberOfBlogs={NUMBER_OF_BLOGS_PER_PAGE} page={page} />}
                </Suspense>
                <ButtonsPagination numberOfPages={numberOfPages} numberOfFavoritePages={numberOfFavoritePages} />
            </div>
            <p className={`${hepta_slab_font.className} w-11/12 md:w-full text-pretty  2xl:w-[1080px] mx-auto mt-24`}>
                En esta sección, nos proponemos no solo mostrar nuestras creaciones artísticas, sino también inspirarte a explorar y desarrollar tu propio estilo.
                El arte es un lenguaje universal que nos permite expresar nuestras emociones, pensamientos y perspectivas de una manera única
                y personal.
                <br />
                Bajo ésta iniciativa, promovemos la libertad creativa sin restricciones, donde cada pincelada, nota tocada o actuación en
                un centro es una manifestación auténtica del artista.
            </p>
            <p className={`${hepta_slab_font.className} w-11/12 md:w-full text-pretty  2xl:w-[1080px] mx-auto mt-10 mb-10`}>
                Queremos que te sumes a nosotros en esta apasionante travesía artística. Ya seas un artista experimentado o un principiante, aquí encontrarás
                inspiración y apoyo para que puedas descubrir y perfeccionar tu estilo único. ¡Súmate a #freeart y #yindyeart y deja que
                tu creatividad florezca sin límites!
            </p>
        </section>
    );
}
