// utils/getTshirtData.js
import { infoTShirts } from "@/utils/2024_collection";

export async function getTshirtData(id) {
    return infoTShirts.find(tshirt => tshirt.id === Number(id));
}
