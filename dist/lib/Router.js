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
        var layout = fs.readFileSync(p.join(__dirname, '..', '..', 'views', 'layout.ejs'), 'utf-8');
        var target = fs.readFileSync(p.join.apply(p, __spreadArray([__dirname, '..', '..', 'views'], renderTarget, false)), 'utf-8');
        var title = options.title ? options.title : 'TooYou';
        var css = options.stylesheets
            ? __spreadArray(['global'], options.stylesheets, true) : ['global'];
        var js = options.javascripts
            ? __spreadArray(['global'], options.javascripts, true) : ['global'];
        var gd = Router.getGlobalData(ctx);
        var renderResult = koa_ejs_1.ejs.render(layout, __assign(__assign({ title: title, content: koa_ejs_1.ejs.render(target, __assign(__assign({ title: title }, options.data), gd)), css: css, js: js }, options.data), gd));
        return renderResult;
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