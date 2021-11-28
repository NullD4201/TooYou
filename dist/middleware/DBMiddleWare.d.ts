import { PrismaClient } from '@prisma/client';
import { Context } from 'koa';
export declare const prisma: PrismaClient<import(".prisma/client").Prisma.PrismaClientOptions, never, import(".prisma/client").Prisma.RejectOnNotFound | import(".prisma/client").Prisma.RejectPerOperation | undefined>;
declare module 'koa' {
    interface BaseContext {
        prisma: PrismaClient;
    }
}
export declare function DBMiddleware(ctx: Context, next: any): Promise<any>;
export default DBMiddleware;
