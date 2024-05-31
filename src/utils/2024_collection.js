import Zapatilla1 from "../assets/imagenesyotrosrecursos/zapatillasmaqueta/bad-bunny-the-last-campus-dark-brown.webp";
import Zapatilla2 from "../assets/imagenesyotrosrecursos/zapatillasmaqueta/campus-20-x-korn.webp";
import Zapatilla3 from "../assets/imagenesyotrosrecursos/zapatillasmaqueta/new-balance-530-linen-sea-salt.webp";

import IconCare1 from '../assets/imagenesyotrosrecursos/icons-tshirt-care/TablerWashTemperature1.svg'
import IconCare2 from '../assets/imagenesyotrosrecursos/icons-tshirt-care/PsDoNotBleach.svg'
import IconCare3 from '../assets/imagenesyotrosrecursos/icons-tshirt-care/TablerIroningOff.svg'
import IconCare4 from '../assets/imagenesyotrosrecursos/icons-tshirt-care/TablerWashDrycleanOff.svg'
import IconCare5 from '../assets/imagenesyotrosrecursos/icons-tshirt-care/DryerIcon.svg'

export const infoTShirts = [
    {
        id: 0,
        image: Zapatilla1,
        alt: "Zapatilla1",
        brand: "adidas",
        nameZapatilla: "Bad bunny campus",
        precio: "649.00",
        image2: Zapatilla1,
        image3: Zapatilla1,
        image4: Zapatilla1,
        image5: Zapatilla1,
        image6: Zapatilla1,
        image7: Zapatilla1,
        descriptionTshirt: 'Abrigo largo acolchado en su interior con relleno de pluma y plumón. Cuello subido y manga larga acabada en puño con elástico. Bolsillos de plastrón con solapa en cadera y detalle de bolsillo interior. Cierre frontal con cremallera oculta por solapa con botones.',
        sizes: [
            { size: 'S', isAvailable: true },
            { size: 'M', isAvailable: false },
            { size: 'L', isAvailable: true },
            { size: 'XL', isAvailable: false },
        ],
    },
    {
        id: 1,
        image: Zapatilla2,
        alt: "Zapatilla2",
        brand: "adidas",
        nameZapatilla: "Campus 2.0 korn",
        precio: "449.00",
        image2: Zapatilla2,
        image3: Zapatilla2,
        image4: Zapatilla2,
        image5: Zapatilla2,
        image6: Zapatilla2,
        image7: Zapatilla2,
        descriptionTshirt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ad at harum aspernatur exercitationem recusandae dolore odit eaque quod officia? Recusandae facere deleniti labore quae.',
        sizes: [
            { size: 'S', isAvailable: true },
            { size: 'M', isAvailable: true },
            { size: 'L', isAvailable: true },
            { size: 'XL', isAvailable: true },
        ],
    },
    {
        id: 2,
        image: Zapatilla3,
        alt: "Zapatilla3",
        brand: "new balance",
        nameZapatilla: "NB 530 linen sea salt",
        precio: "419.00",
        image2: Zapatilla3,
        image3: Zapatilla3,
        image4: Zapatilla3,
        image5: Zapatilla3,
        image6: Zapatilla3,
        image7: Zapatilla3,
        descriptionTshirt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ad at harum aspernatur exercitationem recusandae dolore odit eaque quod officia? Recusandae facere deleniti labore quae.',
        sizes: [
            { size: 'S', isAvailable: false },
            { size: 'M', isAvailable: true },
            { size: 'L', isAvailable: true },
            { size: 'XL', isAvailable: false },
        ],
    },
    {
        id: 3,
        image: Zapatilla1,
        alt: "Zapatilla1",
        brand: "adidas",
        nameZapatilla: "Bad bunny campus",
        precio: "649.00",
        image2: Zapatilla1,
        image3: Zapatilla1,
        image4: Zapatilla1,
        image5: Zapatilla1,
        image6: Zapatilla1,
        image7: Zapatilla1,
        descriptionTshirt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ad at harum aspernatur exercitationem recusandae dolore odit eaque quod officia? Recusandae facere deleniti labore quae.',
        sizes: [
            { size: 'S', isAvailable: true },
            { size: 'M', isAvailable: true },
            { size: 'L', isAvailable: true },
            { size: 'XL', isAvailable: false },
        ],
    },
    {
        id: 4,
        image: Zapatilla2,
        alt: "Zapatilla2",
        brand: "adidas",
        nameZapatilla: "Campus 2.0 korn",
        precio: "449.00",
        image2: Zapatilla2,
        image3: Zapatilla2,
        image4: Zapatilla2,
        image5: Zapatilla2,
        image6: Zapatilla2,
        image7: Zapatilla2,
        descriptionTshirt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ad at harum aspernatur exercitationem recusandae dolore odit eaque quod officia? Recusandae facere deleniti labore quae.',
        sizes: [
            { size: 'S', isAvailable: false },
            { size: 'M', isAvailable: false },
            { size: 'L', isAvailable: false },
            { size: 'XL', isAvailable: true },
        ],
    },
    {
        id: 5,
        image: Zapatilla3,
        alt: "Zapatilla3",
        brand: "new balance",
        nameZapatilla: "NB 530 linen sea salt",
        precio: "419.00",
        image2: Zapatilla3,
        image3: Zapatilla3,
        image4: Zapatilla3,
        image5: Zapatilla3,
        image6: Zapatilla3,
        image7: Zapatilla3,
        descriptionTshirt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ad at harum aspernatur exercitationem recusandae dolore odit eaque quod officia? Recusandae facere deleniti labore quae.',
        sizes: [
            { size: 'S', isAvailable: false },
            { size: 'M', isAvailable: false },
            { size: 'L', isAvailable: true },
            { size: 'XL', isAvailable: false },
        ],
    },
];


export const tshirtCares = [
    { id: 0, label: 'Lavar a máquina max. 30ºC. Centrifugado corto', iconCare: IconCare1 },
    { id: 1, label: 'No usar lejía / blanqueador', iconCare: IconCare2 },
    { id: 2, label: 'No planchar', iconCare: IconCare3 },
    { id: 3, label: 'No limpieza en seco', iconCare: IconCare4 },
    { id: 4, label: 'Se puede usar secadora temperatura reducida', iconCare: IconCare5 },
]