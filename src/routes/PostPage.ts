import PostManager from '../lib/PostManager';
import Router from '../lib/Router';

export class PostPageRouter extends Router {
    constructor() {
        super();
        this._router.get('/', async (ctx, next) => {
            if (ctx.loginedUser === null) {
                ctx.redirect('/people');
                return;
            }
            let categories = (await PostManager.getCategory(ctx)).values();
            let renderRes = this.renderLayout(ctx, ['post.ejs'], {
                stylesheets: ['post', 'image'],
                javascripts: ['post'],
                data: {
                    categories: Array.from(categories),
                },
            });

            ctx.status = 200;
            ctx.type = 'text/html; charset=utf-8';
            ctx.body = renderRes;
        });
    }
}

export default PostPageRouter;
