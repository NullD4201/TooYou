import Router from '../lib/Router';

export class IndexPageRouter extends Router {
    constructor() {
        super();
        this._router.get('/', async (ctx, next) => {
            let renderRes = this.renderLayout(ctx, ['index.ejs'], {
                stylesheets: ['index', 'image'],
                javascripts: ['index'],
            });

            ctx.status = 200;
            ctx.type = 'text/html; charset=utf-8';
            ctx.body = renderRes;
        });
    }
}

export default IndexPageRouter;
