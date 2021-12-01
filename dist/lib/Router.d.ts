import * as KoaRouter from 'koa-router';
import { Context } from 'koa';
export interface renderGlobalData {
    isLogin: boolean;
    userData: renderGlobalDataUser | null;
}
export interface renderGlobalDataUser {
    uuid: string;
    loginId: string;
    name: string;
    email: string;
}
export interface renderLayoutOption {
    title?: string;
    stylesheets?: string[];
    javascripts?: string[];
    data?: object;
}
export declare class Router {
    protected _router: KoaRouter;
    constructor();
    static getGlobalData(ctx: Context): renderGlobalData;
    protected renderLayout(ctx: any, renderTarget: string[], options?: renderLayoutOption): string;
    get router(): KoaRouter<any, {}>;
}
export default Router;
