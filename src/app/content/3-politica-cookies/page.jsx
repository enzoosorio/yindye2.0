import { inter_font } from "@/utils/fonts";

export default function Cookies() {
  const parrafos = [
    {
      textParrafo: `La Política de Privacidad del presente sitio determina las medidas que se han tomado para asegurar su información personal. Asimismo se establecen los procedimientos que seguimos frente a la recopilación, uso y divulgación de su información personal.`,
    },
    {
      textParrafo: `La protección de datos es una cuestión de confianza y privacidad, por ello es importante para nosotros. Por lo tanto, utilizaremos solamente su nombre y la información referente a Ud. bajo los términos previstos en nuestra Política de Privacidad.`,
    },
    {
      textParrafo: `Sólo mantendremos su información durante el tiempo que nos sea requerido por la ley o debido a la relevancia de los propios fines para los que fueron recopilados.`,
    },
    {
      textParrafo: `Ud. puede visitar el sitio y navegar sin tener que proporcionar datos personales. Durante su visita al sitio, Ud. permanecerá anónimo y en ningún momento podremos identificarlo, a menos que Ud. tenga una cuenta en el sitio e inicie sesión con su nombre de Usuario y contraseña.`,
    },
    {
      textParrafo: `El Usuario autoriza y conoce que su información de contacto, así como sus demás datos personales serán almacenados en la base de datos de clientes o proveedores de YinDye, según corresponda, y utilizados por éste para remitirle publicidad y/o información relevante y relacionada con el negocio de YinDye.`,
    },

    {
      textParrafo: `El Usuario entregará a YinDye los Datos Personales, respecto de los cuales se tendrá en cuenta lo siguiente:`,
      isSubtitle: true,
    },
    {
      textParrafo: `El Usuario otorga su total y absoluto consentimiento a YinDye para que este realice el tratamiento de los Datos Personales a los que ha tenido acceso, conforme a lo establecido en la normativa de Protección de Datos Personales peruana y su Reglamento, manifestando haber tomado conocimiento de que la única finalidad para la que los Datos Personales han sido obtenidos es de carácter informativo y como parte de las actividades económicas de YinDye`,
    },
    {
      textParrafo: `El Usuario ha tomado conocimiento del tratamiento al que los Datos Personales serán sometidos, el cual se basará únicamente en el almacenamiento, registro, organización, recopilación, conservación, consulta y utilización de los mismos.`,
    },
    {
      textParrafo: `El Usuario ha tomado conocimiento de que no existirá transferencia de los Datos Personales.`,
    },
    {
      textParrafo: `El Usuario ha tomado conocimiento de la posibilidad de ejercer los derechos que la Ley de Protección de Datos Personales y su Reglamento le concede, estando a su disposición los medios y procedimientos previstos para ello en YinDye.`,
    },
  ];

  return (
    <section
      className={`w-11/12 md:w-[70ch] lg:w-[80ch] text-text-primary 2xl:w-[1080px] mx-auto mt-24 ${inter_font.className} `}
    >
      <h1 className={`text-2xl tracking-wide mb-5`}>Privacidad</h1>
      <hr className={`border-text-secondary`} />
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
