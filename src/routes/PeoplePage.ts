import Router from '../lib/Router';

export class PeoplePageRouter extends Router {
    constructor() {
        super();
        this._router.get('/', async (ctx, next) => {
            let renderRes = this.renderLayout(ctx, ['people.ejs'], {
                stylesheets: ['people', 'image'],
                javascripts: ['people']
            });

            ctx.status = 200;
            ctx.type = 'text/html; charset=utf-8';
            ctx.body = renderRes;
        });
    }
}

export default PeoplePageRouter;
