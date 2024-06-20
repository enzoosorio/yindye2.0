import { signOut } from "@/auth"
import { unstable_cache } from "next/cache"
import { unstable_noStore as noStore } from 'next/cache';

export const Logout = async() => {
    
    await signOut({
        redirectTo : '/login',
    })

    noStore();
}