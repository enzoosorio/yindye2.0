import { inter_font } from "@/utils/fonts";

export default function TerminosYCondiciones() {
  const parrafos = [
    {
      textParrafo: `Este documento describe los términos y condiciones generales (en
            adelante los "T&C") y las políticas de privacidad (en adelante, las
            "Políticas de Privacidad") aplicables al acceso y uso de los servicios
            ofrecidos por YinDye S.A.C ("Servicios") dentro del sitio
            www.yindye.com, sus subdominios y/u otros dominios (urls) relacionados,
            en donde estos T&C se encuentren.`,
    },
    {
      textParrafo: `Cualquier persona que desee acceder y/o suscribirse y/o usar el Sitio o
        los Servicios podrá hacerlo sujetándose a los T&C y a las Políticas de
        Privacidad, junto con todas las demás políticas y principios que se
        desarrollan en el presente documento.`,
    },
    {
      textParrafo: `Las compras realizadas a través de YinDye.com están sujetas a
        disponibilidad de stock, por lo cual en un plazo máximo de 24 horas
        hábiles le confirmaremos el éxito de su compra previa verificación de la
        disponibilidad del producto solicitado, así como la confirmación de la
        fecha de entrega aproximada. En caso de incidencias por falta de stock,
        el cliente puede tomar la decisión de realizar un cambio de producto, en
        caso contrario, se procederá con la devolución del dinero, el cuál será
        extornado o reembolsado en un plazo de a 15 días hábiles. Pese a que en
        la página se puede señalar que el producto se encuentra en stock, la
        empresa se reserva el derecho de confirmar nuevamente el stock dentro
        del plazo establecido. En caso el producto solicitado no esté disponible
        en stock, su solicitud de compra no será procesada. Por otro lado, en
        caso de que Future Visions o proveedores de pagos detecten patrones de
        fraude en la compra y/o operaciones no reconocidas, no autorizadas o que
        contravengan la normativa vigente, Estilos podrá a su discreción
        suspender y/o anular la compra realizada, informando de tal hecho al
        cliente.`,
    },
    {
      textParrafo: `En consecuencia, usted se encuentra informado y acepta que todas las
        visitas y todos los contratos y transacciones que se realicen en este
        Sitio, así como sus efectos jurídicos, quedarán regidos por estas reglas
        y sometidos a la legislación aplicable en Perú.`,
    },
    {
      textParrafo: `Los T&C y las Políticas de Privacidad contenidos en este instrumento se
        aplicarán y se entenderán como parte integral de todos los actos y
        contratos que se ejecuten o celebren mediante los sistemas de oferta y
        comercialización comprendidos en este sitio entre los Usuarios de este
        sitio y YinDye S.A.C (en adelante YinDye, indistintamente).`,
    },
    {
      textParrafo: `Cuando usted visita www.yindye.com se está comunicando con YinDye de
        manera electrónica. En ese sentido, usted brinda su consentimiento para
        recibir comunicaciones de YinDye por correo electrónico o mediante la
        publicación de avisos en su portal.`,
    },
    {
      textParrafo: `Los Servicios sólo están disponibles para personas que tengan capacidad
        legal para contratar. No podrán utilizar los servicios las personas que
        no tengan esa capacidad entre estos los menores de edad o Usuarios de
        yindye.com que hayan sido suspendidos temporalmente o inhabilitados
        definitivamente en razón de lo dispuesto en la presente sección referida
        al registro de Usuario.`,
    },
    {
      textParrafo: `Los actos que los menores realicen en este sitio serán responsabilidad
        de sus padres, tutores, encargados o curadores, y por tanto se
        considerarán realizados por éstos en ejercicio de la representación
        legal con la que cuentan.`,
    },
    {
      textParrafo: `Este documento se encontrará regido en todos sus puntos por las leyes
        vigentes en la República del Perú. Cualquier controversia derivada del
        presente acuerdo, su existencia, validez, interpretación, alcance o
        cumplimiento, será sometida a los tribunales competentes de la ciudad de
        Lima, Perú.`,
    },
    {
      textParrafo: `OPERACIONES CANCELADAS`,
      isSubtitle: true,
    },
    {
      textParrafo: `Nos reservamos el derecho de anular cualquier tipo de operación que entre en consideración como sugerencia por parte de entidades bancarias y filtros de pasarelas de pagos por su seguridad.`,
    },
    {
      textParrafo: `OFERTAS DE YINDYE.COM Y TÉRMINOS DE PROMOCIONES`,
      isSubtitle: true,
    },
    {
      textParrafo: `El plazo de validez de la oferta es aquel que coincide con la fecha de vigencia indicada en la promoción o en virtud del agotamiento de las cantidades de productos disponibles para esa promoción debidamente informados al Usuario, o mientras la oferta se mantenga disponible, el menor de estos plazos. Los códigos promocionales no se aplican a los productos rebajados.`,
    },
    {
      textParrafo: `El stock mínimo de los productos ofrecidos en yindye.com es de una (01) unidad por producto.`,
    },
    {
      textParrafo: `CÓDIGOS PROMOCIONALES`,
      isSubtitle: true,
    },
    {
      textParrafo: `Promoción Cat-art y Yindye : 20% OFF en los productos de nuestra tienda online y tiendas físicas. El descuento aplica para todos los productos de nuestra tienda online con excepción de DROPS`,
    },
    {
      textParrafo: `Los códigos promocionales no se aplican a los productos rebajados. Si se ha devuelto o cancelado un pedido en el que se ha utilizado un código promocional, el valor de dicho código no será reembolsado. Asimismo, no podrás volver a hacer uso de ese código promocional.`,
    },
    {
      textParrafo: `Los códigos promocionales solo son válidos durante un tiempo determinado.`,
    },
    {
      textParrafo: `RESPONSABILIDAD DE YINDYE`,
      isSubtitle: true,
    },
    {
      textParrafo: `YinDye hará lo posible dentro de sus capacidades para que la transmisión del Sitio sea ininterrumpida y libre de errores. Sin embargo, dada la naturaleza de la Internet, dichas condiciones no pueden ser garantizadas. En el mismo sentido, el acceso del Usuario a la Cuenta puede ser ocasionalmente restringido o suspendido con el objeto de efectuar reparaciones, mantenimiento o introducir nuevos Servicios.`,
    },
    {
      textParrafo: `AVISO LEGAL`,
      isSubtitle: true,
    },
    {
      textParrafo: `Todas las fotos de producto utilizadas en este sitio web son referenciales, tratando de conservar la imagen más fidedigna de cada producto.`,
    },
  ];

  return (
    <section
      className={`w-11/12 md:w-[70ch] lg:w-[80ch] text-text-primary 2xl:w-[1080px] mx-auto mt-24 ${inter_font.className} `}
    >
      <h1 className={`text-2xl tracking-wide mb-5`}>Términos y condiciones</h1>
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
