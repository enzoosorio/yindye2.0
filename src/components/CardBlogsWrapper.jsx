import Link from "next/link";
import { blogsArray } from "@/utils/blogs";
import Image from "next/image";
export default function CardBlogsWrapper({ searchindexparam }) {
  const blogs = [...blogsArray];
  const parseDate = (dateString) => {
    const [day, month, year] = dateString.split("-");
    return new Date(`${year}-${month}-${day}`);
  };

  if (searchindexparam === "reciente") {
    blogs.sort((a, b) => parseDate(b.createdAt) - parseDate(a.createdAt));
  } else if (searchindexparam === "recomendado") {
    blogs.sort((a, b) => b.rating - a.rating);
  } else if (searchindexparam === "antiguo") {
    blogs.sort((a, b) => parseDate(a.createdAt) - parseDate(b.createdAt));
  }

  return (
    <section className="w-11/12 md:w-full 2xl:w-[1080px] mx-auto mt-14 flex items-center justify-center flex-wrap gap-5">
      {blogs &&
        blogs.map((blog) => (
          /* TODO : colocar la etiqueta LINK en cada una de los blogs para redirigir a la pagina de cada blog. */

          <div
            key={blog.id}
            className="w-auto md:w-[48%] border-2 shadow-lg mb-10 cursor-pointer hover:scale-105 transition-transform"
          >
            <Link href={`/artblog/${blog.id}`} className="w-full">
              <Image src={blog.src} alt={blog.alt} className="w-full" />
              <div className="flex flex-col p-2 gap-2">
                <h5 className="text-lg lg:text-xl font-bold">{blog.title}</h5>
                <h6 className="text-sm lg:text-base text-gray-500">
                  {blog.creator}
                </h6>
                <div className="flex justify-between pr-4">
                  <small className="text-gray-400">{blog.createdAt}</small>
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
        ))}
    </section>
  );
}
