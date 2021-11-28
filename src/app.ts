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
import UserAPIRouter from './routes/UserAPI';
import LoginPageRouter from './routes/LoginPage';
import RegisterPageRouter from './routes/RegisterPage';
import PeoplePageRouter from './routes/PeoplePage';

const APPPORT = 3000;

class MainServer {
    private app: Koa;
    private router: Router;

    constructor() {
        this.app = new Koa(); //서버를 여는 Koa 객체
        this.router = new Router(); // 요 Router에 어느 경로에서 어떻게 요청을 받을지 정의.

        // 윈도우는 폴더 구분이 \, 리눅스/Mac은 폴더 구분이 /
        KoaEjs(this.app, {
            root: path.join(__dirname, '..', 'views'),
            layout: false,
            viewExt: 'ejs',
            cache: false,
            debug: true,
        });

        this.app.use(KoaServe(path.join(__dirname, '..', 'views', 'public')));
        // 기본적으로 Koa에는 Raw Data만이 날아오지만, KoaBodyParser는 그 데이터를 Parsing해서 쉽게 처리할 수 있게 만들어줌.
        this.app.use(KoaBodyParser());
        this.app.use(DBMiddleware);
        this.app.use(UserMiddleWare);

        this.router.use('/', new IndexPageRouter().router.routes());
        this.router.use('/login', new LoginPageRouter().router.routes());
        this.router.use('/register', new RegisterPageRouter().router.routes());
        this.router.use('/people', new PeoplePageRouter().router.routes());

        this.router.use('/api/users', new UserAPIRouter().router.routes());

        this.app.use(this.router.routes()).use(this.router.allowedMethods()); // 이건 그냥 필요한 거.

        this.app.listen(APPPORT, () => {
            // 환경변수에 PORT가 정의되어 있으면 그걸 사용, 아니면 3000에서 열기
            Logger.info('server is open!');
        });
    }
}

/* 

public class MainServer {
    private Koa app;
    private Router router;

    public static void MainServer(String args[]) {
        this.app = new Koa();
        this.router = new Router();
    }
}

*/

let app = new MainServer();
