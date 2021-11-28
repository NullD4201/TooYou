import 'dotenv/config';
import Router from '../lib/Router';
import { Context } from 'koa';
export interface UserData {
    uuid: string;
    loginId: string;
    nickname: string;
    password: string;
    name: string;
    email: string;
}
export declare class UserAPIRouter extends Router {
    constructor();
    static loginUser(ctx: Context, id: string, password: string): Promise<string>;
    static registerUser(ctx: Context, data: UserData): Promise<import(".prisma/client").User>;
    static getUserByUUID(ctx: Context, uuid: string): Promise<import(".prisma/client").User>;
    static getUserByLoginID(ctx: Context, loginId: string): Promise<import(".prisma/client").User>;
    static getUserByName(ctx: Context, name: string): Promise<import(".prisma/client").User>;
    static deleteUserByUUID(ctx: Context, uuid: string): Promise<boolean>;
}
export default UserAPIRouter;
