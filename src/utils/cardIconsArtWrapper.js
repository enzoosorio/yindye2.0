import { josefin_slab_font, jost_font } from "@/utils/fonts";
import monalisaSVG from "@/assets/imagenesyotrosrecursos/as-icon-parte-below-hero/la-monalisa-as-icon.svg";
import microfonoSVG from "@/assets/imagenesyotrosrecursos/as-icon-parte-below-hero/microfono-as-icon.svg";
import bgMonalisa from "@/assets/imagenesyotrosrecursos/as-icon-parte-below-hero/background-monalisa-as-icon.jpg";
import bgCat from "@/assets/imagenesyotrosrecursos/as-icon-parte-below-hero/background-park-cat-as-icon.jpg";
import microphoneBg from "@/assets/imagenesyotrosrecursos/as-icon-parte-below-hero/fondo-niebla-dinamica-realista.jpg";
import Monalisa from "@/assets/imagenesyotrosrecursos/as-icon-parte-below-hero/la-monalisa-as-icon.webp";
import Cat from "@/assets/imagenesyotrosrecursos/as-icon-parte-below-hero/gato-as-icon.webp";
import Microphone from "@/assets/imagenesyotrosrecursos/as-icon-parte-below-hero/musica-microfono-as-icon.webp";

export const infoCard = [
    {
        id: 1,
        text: "arte",
        icon: Monalisa,
        font: jost_font,
        bg: bgMonalisa,
        svgWhite: monalisaSVG,
    },
    {
        id: 2,
        text: "música",
        icon: Microphone,
        font: josefin_slab_font,
        bg: microphoneBg,
        svgWhite: microfonoSVG,
    },
    {
        id: 3,
        text: "vida.",
        icon: Cat,
        font: jost_font,
        bg: bgCat,
        svgWhite: Cat,
    },
];
