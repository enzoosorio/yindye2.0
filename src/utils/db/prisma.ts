import { PrismaClient } from "@prisma/client";

declare global {
    var prisma : PrismaClient | undefined
}

// hacemos esto por el hot reload de nextjs. Cada vez que guardamos un archivo, se crearia un
// nuevo prisma client, si solo lo exportamos como new PrismaClient(), pero no queremos eso,
// queremos que cuando haga un hot reload, se quede con el mismo client
// y el globalthis no es afectado por el hot reload, por eso lo usamos asi

export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV === "production") globalThis.prisma = db;

