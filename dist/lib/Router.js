"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Router = void 0;
var fs = require("fs");
var p = require("path");
var koa_ejs_1 = require("koa-ejs");
var KoaRouter = require("koa-router");
var Logger_1 = require("./Logger");
var Router = /** @class */ (function () {
    function Router() {
        this._router = new KoaRouter();
    }
    Router.getGlobalData = function (ctx) {
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
    };
    Router.prototype.renderLayout = function (ctx, renderTarget, options) {
        if (options === void 0) { options = {}; }
        var layout = fs.readFileSync(
        // layout.ejs를 읽어온다
        p.join(__dirname, '..', '..', 'views', 'layout.ejs'), 'utf-8');
        var target = fs.readFileSync(
        // renderTarget을 읽어온다
        p.join.apply(
        // renderTarget을 읽어온다
        p, __spreadArray([__dirname, '..', '..', 'views'], renderTarget, false)), 'utf-8');
        /**
         * b = ['d', 'e']
         * a = ['a', 'b', 'c', ...b]
         *
         * console.log(a); <- ['a', 'b', 'c', ['d', 'e']]];
         */
        var title = options.title // options.title이 존재한다면
            ? options.title // options.title을 설정하고
            : 'TooYou'; // 아니라면 기본 title사용
        var css = options.stylesheets // options.stylesheets가 있다면
            ? __spreadArray(['global'], options.stylesheets, true) : ['global']; // 아니라면 global만 배열에 넣는다.
        var js = options.javascripts // css와 동일
            ? __spreadArray(['global'], options.javascripts, true) : ['global'];
        var gd = Router.getGlobalData(ctx);
        Logger_1.default.log(gd);
        var renderResult = koa_ejs_1.ejs.render(layout, __assign(__assign({ 
            // ejs의 render를 실행하는데, layout을 render
            title: title, content: koa_ejs_1.ejs.render(target, __assign(__assign({ 
                // target을 render하여 layout의 content로 넘겨준다
                title: title }, options.data), gd)), css: css, js: js }, options.data), gd));
        return renderResult; // render된 layout을 반환.
    };
    Object.defineProperty(Router.prototype, "router", {
        get: function () {
            return this._router;
        },
        enumerable: false,
        configurable: true
    });
    return Router;
}());
exports.Router = Router;
exports.default = Router;
//# sourceMappingURL=Router.js.map