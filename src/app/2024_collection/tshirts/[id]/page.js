import TshirtPresentation from "../../../../components/2024-collection/TshirtPresentation";
import LeftMessageCareTshirt from "../../../../components/2024-collection/leftMessageCareTshirt";
import RightWrapperSizeTshirt from "../../../../components/2024-collection/RightWrapperSizeTshirt";
import { getImagesPoloByPoloId } from "@/data/imagesPolo";
import { getPoloById } from "@/data/polo";
import SizeSkeleton from '../../skeletons/sizesSkeleton'
import { Suspense } from "react";

export default async function IndividualTshirt({ params }) {
    const { id } = params;
    const singleProduct = await getPoloById(id);
    if (!singleProduct) {
        return <p className="w-11/12 md:w-full 2xl:w-[1080px] mx-auto mt-24 text-center">Prenda no encontrada.</p>;
    }

    const sizes = [
        { quantityOfSize: singleProduct.sizeS, sizeName: 'S' },
        { quantityOfSize: singleProduct.sizeM, sizeName: 'M' },
        { quantityOfSize: singleProduct.sizeL, sizeName: 'L' },
        { quantityOfSize: singleProduct.sizeXL, sizeName: 'XL' }
    ]

    const images = await getImagesPoloByPoloId(singleProduct.id);

    const normalImages = images.slice(0, 7);
    const smallImages = images.slice(7, 14);

    return (
        <section className="relative w-11/12 2xl:w-[1200px] overflow-auto md:h-[calc(100vh-140px)] mx-auto mt-24 mb-10 flex flex-col md:flex-row justify-center items-start md:items-center lg:items-start gap-14">
            <LeftMessageCareTshirt />
            <TshirtPresentation normalImagesTshirt={normalImages} subImagesTshirt={smallImages} />
            <RightWrapperSizeTshirt polo={singleProduct} sizes={sizes} />

        </section>
    );
}
