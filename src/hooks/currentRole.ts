

import { useSession } from "next-auth/react"

export const useCurrentRole = () => {
    const session = useSession();

    if(session.data?.user){
        return session.data.user.role
    }

    return null;
}