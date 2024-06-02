import { inter_font } from "@/utils/fonts";

export default function Nosotros() {
  const parrafos = [
    {
      textParrafo: `La idea de nuestra iniciativa nació de la pasión compartida por el arte y la creencia profunda de que la creatividad es una fuerza poderosa que puede transformar la sociedad. Nos inspiramos en la belleza de lo extravagante, en los colores vibrantes de los polos tie dye y en las expresiones artísticas que inundan las calles y los centros urbanos. Creemos que cada individuo tiene una forma única de arte dentro de sí, esperando ser descubierta y celebrada.`,
    },
    {
      textParrafo: `Así, nuestra misión es fomentar un mundo donde el arte sea valorado y accesible para todos, promoviendo la aceptación de lo diverso y lo colorido, y desafiando las normas tradicionales para abrir espacio a nuevas formas de expresión. A través de esta plataforma, queremos empoderar a las personas a abrazar su creatividad y a mostrar al mundo el impacto positivo del arte en nuestras vidas.`,
    },
  ];

  return (
    <section
      className={`w-11/12 md:w-[70ch] lg:w-[80ch] 2xl:w-[1080px] mx-auto mt-24 ${inter_font.className} `}
    >
      <h1 className={`text-2xl tracking-wide mb-5`}>Nosotros</h1>
      <hr className={`border-black`} />
      <div>
        {parrafos &&
          parrafos.map((parrafo, index) => (
            <p
              key={index}
              className={`text-sm ${
                parrafo.isSubtitle ? "text-2xl font-bold mt-10" : "mt-5"
              }`}
            >
              {parrafo.textParrafo}
            </p>
          ))}
      </div>
    </section>
  );
}
