'use client'

import { infoTShirts, tshirtCares } from "@/utils/2024_collection";
import Image from "next/image";
import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react";
import Whatsapp from '../../../../assets/imagenesyotrosrecursos/iconssvgs/MdiWhatsappWhite.svg'

export default function IndividualTshirt() {

    // TODO : ACOMODAR TODO EL CODIGO PARA TENER MAS COMPONENTES Y NO TENER EL USE CLIENT ACA EN LA MISMO NUCLEO DE LA PAGINA.
    const shirtImagesWrapperRef = useRef(null);
    const pathname = usePathname()
    const [isPressed, setIsPressed] = useState(false);

    const idTshirt = pathname.split('/')[3];

    const tshirt = infoTShirts.find(tshirt => tshirt.id === Number(idTshirt));

    useEffect(() => {
        const shirtImagesWrapper = shirtImagesWrapperRef.current;

        if (!shirtImagesWrapper) return;

        let scale = 1;

        const handleWheel = (event) => {
            event.preventDefault();

            scale += event.deltaY * -0.01;
            scale = Math.min(Math.max(0.125, scale), 4);
            shirtImagesWrapper.style.transform = `scale(${scale})`;
        };

        shirtImagesWrapper.addEventListener('wheel', handleWheel);

        // Cleanup the event listener on component unmount
        return () => {
            shirtImagesWrapper.removeEventListener('wheel', handleWheel);
        };
    }, []);


    if (!tshirt) {
        return <p className="w-11/12 md:w-full 2xl:w-[1080px] mx-auto mt-24 text-center">Prenda no encontrada.</p>;
    }

    let counterImages = 2;

    const subImagesTshirt = [
        tshirt.image,
        tshirt.image2,
        tshirt.image3,
        tshirt.image4,
        tshirt.image5,
        tshirt.image6,
        tshirt.image7
    ];

    const sizes = tshirt.sizes;

    return (
        <section className="relative w-11/12 2xl:w-[1200px] md:h-[calc(100vh-140px)] mx-auto mt-24 flex flex-col md:flex-row justify-center items-start gap-14">
            <div className={`hidden lg:flex flex-col gap-5 w-1/3 lg:w-[314px] h-full  overflow-hidden  ${isPressed ? 'clip-inset-full-care overflow-y-visible' : 'clip-inset-small-care'} border-2 p-2 `}>
                <h3 className="mt-5">
                    CUIDADOS & ORIGEN
                </h3>
                <h3 className="text-sm mt-1">
                    CUIDADOS
                    Cuidar de tus prendas es cuidar del medioambiente.
                    <p className={`cursor-pointer font-bold underline my-3 tracking-wide ${!isPressed ? 'block' : 'hidden'}`} onClick={() => { setIsPressed(!isPressed) }}>Ver más</p>

                    Para mantener limpias tus chaquetas y abrigos sólo tienes que ventilarlas y pasarles un paño o un cepillo para la ropa. Este proceso es más delicado con los tejidos y además evita el consumo de agua y energía de los procesos de lavado.
                    <br />
                    <p className={`cursor-pointer font-bold underline my-3 tracking-wide `}>Guía para el cuidado de la ropa.</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis, itaque. Autem soluta porro atque consequatur blanditiis mollitia modi nostrum ex hic laudantium optio fugit unde quo excepturi praesentium ducimus repellendus, odit voluptas ipsa quisquam, nemo nesciunt laboriosam, tempora id. Modi.</p>

                </h3>
                <div className="flex flex-col gap-5 w-max ml-2 mb-5 ">
                    {tshirtCares && tshirtCares.map(care => (
                        <div key={care.id} className="flex gap-4 justify-start items-center">
                            <Image src={care.iconCare} alt={`care ${care.id}`} width={16} height={16} />
                            <p className="text-xs w-28 ">{care.label}</p>
                        </div>
                    ))}
                </div>
                {/* TODO : VER COMO REGRESO AL INICIO DE ESTE CONTAINER SI CLICKO AL VER MENOS, ya que se queda con el contenido de abajo. */}
                {/* <p className={`cursor-pointer font-bold underline my-3 tracking-wide ${!isPressed ? 'hidden' : 'block'}`} onClick={() => { setIsPressed(!isPressed) }}>Ver menos</p> */}
            </div>
            <div className=" flex md:items-end md:h-full w-full gap-8 ">
                <Image src={tshirt.image.src} alt={tshirt.alt} className="w-4/5 h-full mx-auto " width={100} height={100} />
                <div className="hidden lg:flex flex-col items-center justify-end gap-2 w-8">
                    {subImagesTshirt.map((subImage, index) => (
                        <Image key={index} src={subImage} alt="Subimage" width={100} height={50} className="w-full" />
                    ))}
                </div>
            </div>
            <div className="w-full md:max-w-60 xl:max-w-72 flex flex-col gap-3 h-auto py-7 px-16 md:px-6 md:border-4 text-xs ">
                <h3>{tshirt.nameZapatilla.toUpperCase()}</h3>
                <h4>{tshirt.brand.toUpperCase()}</h4>
                <h4>S/{tshirt.precio}</h4>
                <p>{tshirt.descriptionTshirt}</p>
                <div className="grid grid-cols-2 grid-rows-2  p-4 w-full gap-2 my-3">
                    {sizes.map((size, index) => (
                        <p key={index} className={`col-span-1  row-span-1 px-3 py-1 text-center border border-black hover:scale-105 transition-all ${size.isAvailable ? 'font-bold cursor-pointer' : 'bg-slate-100 text-gray-700'} `}>{size.size}</p>
                    ))}
                </div>
                <button className="flex gap-3 bg-slate-500 w-max mx-auto rounded-xl px-5 py-[6px] hover:bg-slate-600 transition-colors text-white">
                    Contáctanos
                    <Image src={Whatsapp} alt="whatsapp icon" width={16} height={16} />
                </button>
            </div>
        </section>
    )
}