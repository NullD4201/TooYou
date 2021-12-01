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
var LoginPage_1 = require("./routes/LoginPage");
var RegisterPage_1 = require("./routes/RegisterPage");
var PeoplePage_1 = require("./routes/PeoplePage");
var PostPage_1 = require("./routes/PostPage");
var UserAPI_1 = require("./routes/UserAPI");
var PostAPI_1 = require("./routes/PostAPI");
var APPPORT = 3000;
var MainServer = /** @class */ (function () {
    function MainServer() {
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
        this.app.use(DBMiddleWare_1.default);
        this.app.use(UserMiddleWare_1.default);
        this.router.use('/', new IndexPage_1.default().router.routes());
        this.router.use('/login', new LoginPage_1.default().router.routes());
        this.router.use('/register', new RegisterPage_1.default().router.routes());
        this.router.use('/people', new PeoplePage_1.default().router.routes());
        this.router.use('/post', new PostPage_1.default().router.routes());
        this.router.use('/api/users', new UserAPI_1.default().router.routes());
        this.router.use('/api/posts', new PostAPI_1.default().router.routes());
        this.app.use(this.router.routes()).use(this.router.allowedMethods());
        this.app.listen(APPPORT, function () {
            Logger_1.default.info('server is open!');
        });
    }
    return MainServer;
}());
var app = new MainServer();
//# sourceMappingURL=app.js.map