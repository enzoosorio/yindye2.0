import Link from "next/link";
import Image from "next/image";
import { getBlogs, getBlogsPagination } from "@/data/blog";
import { getUserById } from "@/data/user";
import { getFavoritesBlogsIdsPagination } from "@/actions/favoriteBlog";
import { auth } from "@/auth";
import { getFavoriteBlogsByFavoritesIds } from "@/data/favoriteBlog";

export default async function CardBlogsWrapper({
  numberOfBlogs,
  searchindexparam,
  page,
}) {
  let blogsServer = [];
  const INSTAGRAM_ENZO = " (@enzoosorioortiz)";
  const INSTAGRAM_DIEGO = " (@ricardego)";

  const session = await auth();
  const idUser = session?.user.id;
  if (!blogsServer) {
    return (
      <p className="w-11/12 md:w-full 2xl:w-[1080px] mx-auto mt-24 text-center">
        No se pudo encontrar blogs en la base de datos.
      </p>
    );
  }

  if (searchindexparam === "reciente") {
    blogsServer = await getBlogsPagination(numberOfBlogs, page, "desc");
  } else if (searchindexparam === "antiguo") {
    blogsServer = await getBlogsPagination(numberOfBlogs, page, "asc");
  }
  if (searchindexparam === "favoritos") {
    if (!session) {
      return <p>debes loguearte para ver blogs favoritos!</p>;
    }
    const favoriteBlogsIds = await getFavoritesBlogsIdsPagination(
      idUser,
      numberOfBlogs,
      page
    );

    if (!favoriteBlogsIds) {
      return <p>No tienes blogs favoritos guardados!</p>;
    }
    var favoriteBlogs = await getFavoriteBlogsByFavoritesIds(favoriteBlogsIds);
  }

  let blogsWithAuthorName = [];

  for (let index = 0; index < blogsServer.length; index++) {
    const authorBlog = await getUserById(blogsServer[index].authorId);
    let authorName = authorBlog.name;
    if (authorName === "Enzo Martin Osorio Ortiz") {
      authorName += INSTAGRAM_ENZO;
    }
    const blogWithAuthorName = {
      ...blogsServer[index],
      authorName: authorName,
    };

    blogsWithAuthorName.push(blogWithAuthorName);
  }

  return (
    <section className="w-11/12 md:w-full 2xl:w-[1080px] mx-auto mt-14 flex items-center justify-center flex-wrap gap-5">
      {blogsWithAuthorName && searchindexparam !== "favoritos" ? (
        blogsWithAuthorName.map((blog) => (
          <div
            key={blog.id}
            className="w-auto md:w-[48%] border border-gray-600 border-b-gray-400 rounded-lg shadow-lg mb-10 cursor-pointer hover:scale-105 transition-transform"
          >
            <Link href={`/artblog/${blog.id}`} className="w-full">
              {/* div de imagenes, una sera de fondo y la otra nitida, esto es por si no llega a tener las medidas necesarias. */}
              <div className="relative w-full h-[300px] flex overflow-hidden">
                <Image
                  src={blog.mainImage}
                  alt={blog.altMainImage}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 inset-0 w-full -z-10 blur-md rounded-lg"
                  width={250}
                  height={200}
                />
                <Image
                  src={blog.mainImage}
                  alt={blog.altMainImage}
                  className="w-full object-contain bg-no-repeat rounded-lg"
                  width={250}
                  height={200}
                />
              </div>
              <div className="flex flex-col p-2 gap-2">
                <h5 className="text-lg lg:text-xl font-bold text-text-primary">
                  {blog.title}
                </h5>
                <h6 className="text-sm  text-text-secondary ">
                  {blog.authorName}
                </h6>
                <div className="flex justify-between pr-4">
                  <small className="text-text-secondary">
                    {new Date(blog.createdAt).toLocaleDateString()}
                  </small>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="#B8B0B3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 4h10v14a2 2 0 0 1-2 2H9m3-5l3-3m0 0l-3-3m3 3H5"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        ))
      ) : favoriteBlogs ? (
        favoriteBlogs.map((blog) => (
          <div
            key={blog.id}
            className="w-auto md:w-[48%] rounded-lg shadow-lg mb-10 cursor-pointer hover:scale-105 transition-transform"
          >
            <Link href={`/artblog/${blog.id}`} className="w-full">
              <Image
                src={blog.mainImage}
                alt={blog.altMainImage}
                className="w-full object-cover"
                width={250}
                height={200}
              />
              <div className="flex flex-col p-2 gap-2">
                <h5 className="text-lg lg:text-xl font-bold">{blog.title}</h5>
                <h6 className="text-sm  text-gray-500">{blog.authorName}</h6>
                <div className="flex justify-between pr-4">
                  <small className="text-gray-400">
                    {new Date(blog.createdAt).toLocaleDateString()}
                  </small>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="#333333"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 4h10v14a2 2 0 0 1-2 2H9m3-5l3-3m0 0l-3-3m3 3H5"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        ))
      ) : (
        <p>No existen blogs en favoritos!</p>
      )}
    </section>
  );
}
