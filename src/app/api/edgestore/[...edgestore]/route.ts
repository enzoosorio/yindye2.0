import { initEdgeStore } from "@edgestore/server";
import {createEdgeStoreNextHandler} from '@edgestore/server/adapters/next/app'
import { z } from "zod";

const es = initEdgeStore.create();

const edgeStoreRouter = es.router({
    myPublicFiles : es.imageBucket().input(
        z.object({
            type : z.enum(['post', 'product'])
        })
    )
    .path(({input}) => [{type : input.type}])
})

const handler = createEdgeStoreNextHandler({
    router : edgeStoreRouter
})


export { handler as GET, handler as POST};

export type EdgeStoreRouter = typeof edgeStoreRouter;








