import 'dotenv/config';
import Router from '../lib/Router';
import Logger from '../lib/Logger';
import UserCrypto from '../lib/UserCrypto';
import JsonWebToken from '../lib/JsonWebToken';
import { Context } from 'koa';
import { PostData, PostManager } from '../lib/PostManager';

export class PostAPIRouter extends Router {
    constructor() {
        super();

        this._router.post('/create', async (ctx, next) => {
            if (ctx.loginedUser === null) {
                ctx.redirect('/people');
                return;
            }
            let body = ctx.request.body;
            let data: PostData = {
                authorUUID: ctx.loginedUser.uuid,
                title: body.title,
                imageLink: body.imageLink,
                description: body.description,
                hyperLink: body.hyperLink,
                category: parseInt(body.category)
            }
            let post = await PostManager.createPost(ctx, data);
            ctx.redirect('/people');
        });
    }
}

export default PostAPIRouter;
