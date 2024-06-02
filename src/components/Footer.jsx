import Link from "next/link";

export default function Footer() {
  const messageCustomTshirts = `Hola! quisiera pintar 
  mi polo con un diseño personalizado, 
  ¿puedes ayudarme?`;

  const messageColabWithUs = `Hola! quisiera colaborar
  con ustedes, quisiera más información por favor`;

  return (
    <section className="relative flex w-11/12 md:w-full  2xl:w-[1080px] mx-auto items-center justify-center mt-20  mb-3 gap-5 ">
      <h2 className="w-20 text-sm md:text-base ">
        YinDye - 2023 &copy; Todos los derechos reservados.
      </h2>
      <div className="flex flex-col items-center justify-center w-3/12">
        <small className="absolute text-center -top-10 w-16 md:w-auto ">
          <b>Redes sociales</b>
        </small>
        <div className="flex flex-col gap-7 md:gap-5">
          <Link
            href={`https://www.facebook.com/profile.php?id=100092885012426`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 md:w-8 md:h-8"
              viewBox="0 0 24 24"
            >
              <path
                fill="#666666"
                d="M12 2.04c-5.5 0-10 4.49-10 10.02c0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89c1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02"
              />
            </svg>
          </Link>
          <Link href={`https://www.instagram.com/yindyeart/`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 md:w-8 md:h-8"
              viewBox="0 0 24 24"
            >
              <path
                fill="#666666"
                d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
              />
            </svg>
          </Link>
          <Link href={`https://www.tiktok.com/@yindyeart`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 md:w-8 md:h-8"
              viewBox="0 0 1024 1024"
            >
              <path
                fill="#666666"
                fill-rule="evenodd"
                d="M912 224.962C912 162.575 861.425 112 799.038 112H224.962C162.575 112 112 162.575 112 224.962v574.076C112 861.426 162.575 912 224.962 912h574.076C861.425 912 912 861.426 912 799.038zM774.759 460.916c-51.615.577-99.71-15.027-141.938-43.927v202.874c0 90.166-61.72 167.62-148.996 187.848c-119.068 27.165-219.864-58.954-232.577-161.835c-13.294-102.884 52.322-193.051 152.892-213.281c19.651-4.045 49.209-4.045 64.458-.577v108.661c-4.692-1.153-9.086-2.31-13.709-2.888c-39.304-6.937-77.371 12.715-92.977 48.55c-15.605 35.838-5.16 77.451 26.629 101.73c26.586 20.806 56.085 23.694 86.14 9.822c30.057-13.291 46.21-37.567 49.676-70.512c.578-4.622.546-9.826.546-15.028V222.206c0-10.981.086-10.502 11.068-10.502h86.12c6.36 0 8.673.915 9.25 8.433c4.621 67.047 55.526 124.147 120.838 132.818c6.937 1.155 14.369 1.613 22.58 2.19z"
              />
            </svg>
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-4/12 ">
        <small className="absolute text-center -top-12 md:-top-10  w-20 md:w-auto">
          <b>
            Servicio <span className="hidden md:inline">-</span> Contacto
          </b>
        </small>
        <div className="text-xs md:text-sm flex flex-col items-center justify-center text-center gap-6">
          <Link
            href={`/content/1-nosotros`}
            className={`hover:text-orange-400 hover:font-bold transition-all`}
          >
            Nosotros
          </Link>
          <a
            href={`https://wa.me/+51950306310?text=${encodeURIComponent(
              messageCustomTshirts
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`hover:text-orange-400 hover:font-bold transition-all`}
          >
            Pedidos tie dye personalizados
          </a>

          <a
            href={`https://wa.me/+51950306310?text=${encodeURIComponent(
              messageColabWithUs
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`hover:text-orange-400 hover:font-bold transition-all`}
          >
            Colabora con nosotros
          </a>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-8 text-xs md:text-sm w-3/12  text-center">
        <Link
          href={`/content/2-terminos-y-condiciones`}
          className={`hover:text-orange-400 hover:font-bold transition-all`}
        >
          Términos y condiciones
        </Link>
        <Link
          href={`/content/3-politica-cookies`}
          className={`hover:text-orange-400 hover:font-bold transition-all`}
        >
          Política de cookies
        </Link>
      </div>
    </section>
  );
}
