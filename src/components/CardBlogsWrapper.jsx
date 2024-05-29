import Image from "next/image";
import imagenExample from "../assets/imagenesyotrosrecursos/banners/banner_gallery_3.webp";

export default function CardBlogsWrapper() {
  const blogs = [
    {
      id: "blog001",
      src: imagenExample,
      alt: "Descripción de la imagen del blog 1",
      title: "Titulo del blog 1",
      creator: "Enzo Osorio (@enzoosorioortiz)",
      createdAt: "5h ago",
    },
    {
      id: "blog002",
      src: imagenExample,
      alt: "Descripción de la imagen del blog 2",
      title: "Titulo del blog 2",
      creator: "Ana Perez (@anaperez)",
      createdAt: "3h ago",
    },
    {
      id: "blog003",
      src: imagenExample,
      alt: "Descripción de la imagen del blog 3",
      title: "Titulo del blog 3",
      creator: "Carlos Ruiz (@carlosruiz)",
      createdAt: "1h ago",
    },
    {
      id: "blog004",
      src: imagenExample,
      alt: "Descripción de la imagen del blog 4",
      title: "Titulo del blog 4",
      creator: "Luisa Gomez (@luisagomez)",
      createdAt: "2d ago",
    },
    {
      id: "blog005",
      src: imagenExample,
      alt: "Descripción de la imagen del blog 5",
      title: "Titulo del blog 5",
      creator: "Miguel Torres (@migueltorres)",
      createdAt: "1w ago",
    },
    {
      id: "blog006",
      src: imagenExample,
      alt: "Descripción de la imagen del blog 6",
      title: "Titulo del blog 6",
      creator: "Laura Mendoza (@lauramendoza)",
      createdAt: "3d ago",
    },
  ];

  return (
    <section className="w-11/12 md:w-full 2xl:w-[1080px] mx-auto mt-14 flex items-center justify-center flex-wrap gap-5">
      {blogs &&
        blogs.map((blog) => (
          /* TODO : colocar la etiqueta LINK en cada una de los blogs para redirigir a la pagina de cada blog. */
          <div
            key={blog.id}
            className="w-auto md:w-[48%] border-2 shadow-lg mb-10 cursor-pointer hover:scale-105 transition-transform"
          >
            <Image src={blog.src} alt={blog.alt} className="w-full" />
            <div className="flex flex-col p-2 gap-2">
              <h5 className="text-xl font-bold">{blog.title}</h5>
              <h6 className="text-base text-gray-500">{blog.creator}</h6>
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
          </div>
        ))}
    </section>
  );
}
