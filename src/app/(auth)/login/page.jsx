import { jost_font } from "@/utils/fonts";

export default function LoginPage() {
  return (
    <section
      className={`w-[45ch] sm:7/12 md:w-[55ch] 2xl:w-[1080px] mb-10 mt-20 py-10 mx-auto flex items-center justify-center text-center border-2 rounded-xl ${jost_font.className}`}
    >
      <div className="card flex flex-col items-center justify-center gap-2">
        <h2 className="text-3xl">Iniciar sesión</h2>
        <small>
          Inicia sesión para poder reaccionar y opinar en nuestro blog!
        </small>
        <form className="mt-7 flex flex-col gap-3">
          <label>
            Correo electrónico
            <input
              type="email"
              name="email"
              placeholder="juan.perez@gmail.com"
              className="mt-2 block border-2 rounded-sm py-1 px-2 mx-auto w-[35ch] md:w-[45ch] transition-all duration-700  outline-orange-400"
            />
          </label>
          <label>
            Contraseña
            <input
              type="password"
              name="password"
              placeholder="******"
              className="mt-2 block border-2 rounded-sm py-1 px-2 mx-auto w-[35ch] md:w-[45ch] transition-all duration-700 outline-orange-400"
            />
          </label>
          <button className="mt-5 rounded-xl bg-black transition-colors hover:bg-orange-400 text-white w-[15ch] mx-auto py-[6px] transition-custom-ease">
            Iniciar sesión
          </button>
        </form>
      </div>
    </section>
  );
}
