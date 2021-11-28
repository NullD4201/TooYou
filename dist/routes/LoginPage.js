"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var Lang_1 = require("../lib/Lang");
var Router_1 = require("../lib/Router");
var LoginPageRouter = /** @class */ (function (_super) {
    __extends(LoginPageRouter, _super);
    function LoginPageRouter() {
        var _this = _super.call(this) || this;
        _this._router.get('/', function (ctx, next) { return __awaiter(_this, void 0, void 0, function () {
            var _a, id, message, redirect, msg, red, renderRes, _b, _c, _d;
            var _e, _f;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        _a = ctx.query, id = _a.id, message = _a.message, redirect = _a.redirect;
                        msg = message !== null && typeof message === 'string'
                            ? message
                            : null;
                        red = redirect !== null && typeof redirect === 'string'
                            ? redirect
                            : null;
                        _b = this.renderLayout;
                        _c = [ctx, ['login.ejs']];
                        _e = {
                            stylesheets: ['login'],
                            javascripts: ['login']
                        };
                        _f = {
                            previousId: id ? id : null,
                            redLink: red
                        };
                        if (!msg) return [3 /*break*/, 2];
                        return [4 /*yield*/, Lang_1.default.getLangByCode('ko_kr', msg)];
                    case 1:
                        _d = _g.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        _d = null;
                        _g.label = 3;
                    case 3:
                        renderRes = _b.apply(this, _c.concat([(_e.data = (_f.errMessage = _d,
                                _f),
                                _e)]));
                        ctx.status = 200;
                        ctx.type = 'text/html; charset=utf-8';
                        ctx.body = renderRes;
                        return [2 /*return*/];
                }
            });
        }); });
        return _this;
    }
    return LoginPageRouter;
}(Router_1.default));
exports.default = LoginPageRouter;
//# sourceMappingURL=LoginPage.js.map