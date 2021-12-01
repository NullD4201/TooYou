import * as path from 'path';
import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as KoaEjs from 'koa-ejs';
import * as KoaBodyParser from 'koa-bodyparser';
import * as KoaServe from 'koa-static';

import Logger from './lib/Logger';

import DBMiddleware from './middleware/DBMiddleWare';
import UserMiddleWare from './middleware/UserMiddleWare';

import IndexPageRouter from './routes/IndexPage';
import LoginPageRouter from './routes/LoginPage';
import RegisterPageRouter from './routes/RegisterPage';
import PeoplePageRouter from './routes/PeoplePage';
import PostPageRouter from './routes/PostPage';

import UserAPIRouter from './routes/UserAPI';
import PostAPIRouter from './routes/PostAPI';

const APPPORT = 3000;

class MainServer {
    private app: Koa;
    private router: Router;

    constructor() {
        this.app = new Koa();
        this.router = new Router();

        KoaEjs(this.app, {
            root: path.join(__dirname, '..', 'views'),
            layout: false,
            viewExt: 'ejs',
            cache: false,
            debug: true,
        });

        this.app.use(KoaServe(path.join(__dirname, '..', 'views', 'public')));
        this.app.use(KoaBodyParser());
        this.app.use(DBMiddleware);
        this.app.use(UserMiddleWare);

        this.router.use('/', new IndexPageRouter().router.routes());
        this.router.use('/login', new LoginPageRouter().router.routes());
        this.router.use('/register', new RegisterPageRouter().router.routes());
        this.router.use('/people', new PeoplePageRouter().router.routes());
        this.router.use('/post', new PostPageRouter().router.routes());

        this.router.use('/api/users', new UserAPIRouter().router.routes());
        this.router.use('/api/posts', new PostAPIRouter().router.routes());

        this.app.use(this.router.routes()).use(this.router.allowedMethods());

        this.app.listen(APPPORT, () => {
            Logger.info('server is open!');
        });
    }
}

let app = new MainServer();
