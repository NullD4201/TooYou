"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
var Koa = require("koa");
var Router = require("koa-router");
var KoaEjs = require("koa-ejs");
var KoaBodyParser = require("koa-bodyparser");
var KoaServe = require("koa-static");
var Logger_1 = require("./lib/Logger");
var DBMiddleWare_1 = require("./middleware/DBMiddleWare");
var UserMiddleWare_1 = require("./middleware/UserMiddleWare");
var IndexPage_1 = require("./routes/IndexPage");
var UserAPI_1 = require("./routes/UserAPI");
var LoginPage_1 = require("./routes/LoginPage");
var RegisterPage_1 = require("./routes/RegisterPage");
var PeoplePage_1 = require("./routes/PeoplePage");
var MainServer = /** @class */ (function () {
    function MainServer() {
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
        this.app.use(DBMiddleWare_1.default);
        this.app.use(UserMiddleWare_1.default);
        this.router.use('/', new IndexPage_1.default().router.routes());
        this.router.use('/login', new LoginPage_1.default().router.routes());
        this.router.use('/register', new RegisterPage_1.default().router.routes());
        this.router.use('/people', new PeoplePage_1.default().router.routes());
        this.router.use('/api/users', new UserAPI_1.default().router.routes());
        this.app.use(this.router.routes()).use(this.router.allowedMethods()); // 이건 그냥 필요한 거.
        this.app.listen(process.env.PORT || 3000, function () {
            // 환경변수에 PORT가 정의되어 있으면 그걸 사용, 아니면 3000에서 열기
            Logger_1.default.info('server is open!');
        });
    }
    return MainServer;
}());
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
var app = new MainServer();
//# sourceMappingURL=app.js.map