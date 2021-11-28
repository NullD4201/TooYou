import { User } from '@prisma/client';
import { Context } from 'koa';
declare module 'koa' {
    interface BaseContext {
        loginedUser: User | null;
    }
}
export declare function UserMiddleWare(ctx: Context, next: any): Promise<any>;
export default UserMiddleWare;
