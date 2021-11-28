import * as fs from 'fs';
import * as p from 'path';
import { ejs } from 'koa-ejs';
import * as KoaRouter from 'koa-router';
import Logger from './Logger';
import { Context } from 'koa';

// const layout = fs.readFileSync(
//     path.join(__dirname, '..', '..', 'views', 'layout.ejs'),
//     'utf-8'
// );

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
    data?: Record<string, any>; // object = {} = json
}

export class Router {
    protected _router: KoaRouter;

    constructor() {
        this._router = new KoaRouter();
    }

    public static getGlobalData(ctx: Context): renderGlobalData {
        if (ctx.loginedUser !== null)
            return {
                isLogin: true,
                userData: {
                    uuid: ctx.loginedUser.uuid,
                    loginId: ctx.loginedUser.loginId,
                    name: ctx.loginedUser.name,
                    email: ctx.loginedUser.email,
                },
            };
        else
            return {
                isLogin: false,
                userData: null,
            };
    }

    protected renderLayout(
        ctx: any,
        renderTarget: string[],
        options: renderLayoutOption = {}
    ): string {
        let layout = fs.readFileSync(
            // layout.ejs를 읽어온다
            p.join(__dirname, '..', '..', 'views', 'layout.ejs'),
            'utf-8'
        );
        let target = fs.readFileSync(
            // renderTarget을 읽어온다
            p.join(__dirname, '..', '..', 'views', ...renderTarget),
            'utf-8'
        );

        /**
         * b = ['d', 'e']
         * a = ['a', 'b', 'c', ...b]
         *
         * console.log(a); <- ['a', 'b', 'c', ['d', 'e']]];
         */

        let title = options.title // options.title이 존재한다면
            ? options.title // options.title을 설정하고
            : 'TooYou'; // 아니라면 기본 title사용
        let css = options.stylesheets // options.stylesheets가 있다면
            ? ['global', ...options.stylesheets] // options.stylesheets를 풀어서 배열에 넣고
            : ['global']; // 아니라면 global만 배열에 넣는다.
        let js = options.javascripts // css와 동일
            ? ['global', ...options.javascripts]
            : ['global'];

        let gd = Router.getGlobalData(ctx);
        Logger.log(gd);

        let renderResult = ejs.render(layout, {
            // ejs의 render를 실행하는데, layout을 render
            title: title, // title주고
            content: ejs.render(target, {
                // target을 render하여 layout의 content로 넘겨준다
                title: title, // title주고
                ...options.data, // data주고
                ...gd,
            }),
            css: css, // css주고
            js: js, // js 주고
            ...options.data, // data 주고
            ...gd,
        });

        return renderResult; // render된 layout을 반환.
    }

    get router() {
        return this._router;
    }
}
export default Router;
