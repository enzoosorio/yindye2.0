import { getTshirtData } from "@/utils/getTshirtData";
import TshirtPresentation from "@/components/2024-collection/TshirtPresentation";
import LeftMessageCareTshirt from "@/components/2024-collection/leftMessageCareTshirt";
import RightWrapperSizeTshirt from "@/components/2024-collection/RightWrapperSizeTshirt";

export default async function IndividualTshirt({ params }) {
    const { id } = params;
    const tshirt = await getTshirtData(id);

    if (!tshirt) {
        return <p className="w-11/12 md:w-full 2xl:w-[1080px] mx-auto mt-24 text-center">Prenda no encontrada.</p>;
    }

    return (
        <section className="relative w-11/12 2xl:w-[1200px] overflow-auto md:h-[calc(100vh-140px)] mx-auto mt-24 mb-10 flex flex-col md:flex-row justify-center items-start md:items-center lg:items-start gap-14">
            <LeftMessageCareTshirt />
            <TshirtPresentation tshirt={tshirt} />
            <RightWrapperSizeTshirt />
        </section>
    );
}
