import PostManager from '../lib/PostManager';
import Router from '../lib/Router';

export class PeoplePageRouter extends Router {
    constructor() {
        super();
        this._router.get('/', async (ctx, next) => {
            let { page, cut, category } = ctx.query;
            let ppage: number = 1,
                ccut: number = 500,
                ccategory: number = 0;
            if (typeof page === 'string') ppage = parseInt(page);
            if (typeof cut === 'string') ccut = parseInt(cut);
            if (typeof category === 'string') ccategory = parseInt(category);
            let posts = await PostManager.getPost(ctx, {
                cut: ccut,
                page: ppage,
                category: ccategory,
            });
            let categories = (await PostManager.getCategory(ctx)).values();
            let renderRes = this.renderLayout(ctx, ['people.ejs'], {
                stylesheets: ['people', 'image'],
                javascripts: ['people'],
                data: {
                    categories: Array.from(categories),
                    posts: posts,
                },
            });

            ctx.status = 200;
            ctx.type = 'text/html; charset=utf-8';
            ctx.body = renderRes;
        });
    }
}

export default PeoplePageRouter;
