import Zapatilla1 from "../assets/imagenesyotrosrecursos/zapatillasmaqueta/bad-bunny-the-last-campus-dark-brown.webp";
import Zapatilla2 from "../assets/imagenesyotrosrecursos/zapatillasmaqueta/campus-20-x-korn.webp";
import Zapatilla3 from "../assets/imagenesyotrosrecursos/zapatillasmaqueta/new-balance-530-linen-sea-salt.webp";

import IconCare1 from '../assets/imagenesTshirtCollection/icons-tshirt-care/TablerWashTemperature1.svg'
import IconCare2 from '../assets/imagenesTshirtCollection/icons-tshirt-care/PsDoNotBleach.svg'
import IconCare3 from '../assets/imagenesTshirtCollection/icons-tshirt-care/TablerIroningOff.svg'
import IconCare4 from '../assets/imagenesTshirtCollection/icons-tshirt-care/TablerWashDrycleanOff.svg'
import IconCare5 from '../assets/imagenesTshirtCollection/icons-tshirt-care/DryerIcon.svg'

import ZaraImageNormal1 from '../assets/imagenesTshirtCollection/tshirts/tshirt-1/normal/zaraImagenGrande1.jpg'
import ZaraImageNormal2 from '../assets/imagenesTshirtCollection/tshirts/tshirt-1/normal/zaraImagenGrande2.jpg'
import ZaraImageNormal3 from '../assets/imagenesTshirtCollection/tshirts/tshirt-1/normal/zaraImagenGrande3.jpg'
import ZaraImageNormal4 from '../assets/imagenesTshirtCollection/tshirts/tshirt-1/normal/zaraImagenGrande4.jpg'
import ZaraImageNormal5 from '../assets/imagenesTshirtCollection/tshirts/tshirt-1/normal/zaraImagenGrande5.jpg'
import ZaraImageNormal6 from '../assets/imagenesTshirtCollection/tshirts/tshirt-1/normal/zaraImagenGrande6.jpg'
import ZaraImageNormal7 from '../assets/imagenesTshirtCollection/tshirts/tshirt-1/normal/zaraImagenGrande7.jpg'

import ZaraImageSmall1 from '../assets/imagenesTshirtCollection/tshirts/tshirt-1/small/zaraImagen1.jpg'
import ZaraImageSmall2 from '../assets/imagenesTshirtCollection/tshirts/tshirt-1/small/zaraImagen2.jpg'
import ZaraImageSmall3 from '../assets/imagenesTshirtCollection/tshirts/tshirt-1/small/zaraImagen3.jpg'
import ZaraImageSmall4 from '../assets/imagenesTshirtCollection/tshirts/tshirt-1/small/zaraImagen4.jpg'
import ZaraImageSmall5 from '../assets/imagenesTshirtCollection/tshirts/tshirt-1/small/zaraImagen5.jpg'
import ZaraImageSmall6 from '../assets/imagenesTshirtCollection/tshirts/tshirt-1/small/zaraImagen6.jpg'
import ZaraImageSmall7 from '../assets/imagenesTshirtCollection/tshirts/tshirt-1/small/zaraImagen7.jpg'

export const infoTShirts = [
    {
        id: 0,
        image: ZaraImageNormal1,
        normalImages: [
            { id: 'nI1', normalImageSrc: ZaraImageNormal1, altNormalImage: 'Tshirt 1' },
            { id: 'nI2', normalImageSrc: ZaraImageNormal2, altNormalImage: 'Tshirt 2' },
            { id: 'nI3', normalImageSrc: ZaraImageNormal3, altNormalImage: 'Tshirt 3' },
            { id: 'nI4', normalImageSrc: ZaraImageNormal4, altNormalImage: 'Tshirt 4' },
            { id: 'nI5', normalImageSrc: ZaraImageNormal5, altNormalImage: 'Tshirt 5' },
            { id: 'nI6', normalImageSrc: ZaraImageNormal6, altNormalImage: 'Tshirt 6' },
            { id: 'nI7', normalImageSrc: ZaraImageNormal7, altNormalImage: 'Tshirt 7' },
        ],
        smallImages: [
            { id: 'sI1', smallImageSrc: ZaraImageSmall1, altNormalImage: 'Miniature Tshirt 1' },
            { id: 'sI2', smallImageSrc: ZaraImageSmall2, altNormalImage: 'Miniature Tshirt 2' },
            { id: 'sI3', smallImageSrc: ZaraImageSmall3, altNormalImage: 'MiniatureTshirt 3' },
            { id: 'sI4', smallImageSrc: ZaraImageSmall4, altNormalImage: 'Miniature Tshirt 4' },
            { id: 'sI5', smallImageSrc: ZaraImageSmall5, altNormalImage: 'Miniature Tshirt 5' },
            { id: 'sI6', smallImageSrc: ZaraImageSmall6, altNormalImage: 'Miniature Tshirt 6' },
            { id: 'sI7', smallImageSrc: ZaraImageSmall7, altNormalImage: 'Miniature Tshirt 7' },
        ],
        brand: "adidas",
        nameZapatilla: "Bad bunny campus",
        precio: "649.00",
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