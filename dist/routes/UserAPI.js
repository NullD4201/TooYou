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
exports.UserAPIRouter = void 0;
require("dotenv/config");
var Router_1 = require("../lib/Router");
var Logger_1 = require("../lib/Logger");
var UserCrypto_1 = require("../lib/UserCrypto");
var JsonWebToken_1 = require("../lib/JsonWebToken");
var UserAPIRouter = /** @class */ (function (_super) {
    __extends(UserAPIRouter, _super);
    function UserAPIRouter() {
        var _this = _super.call(this) || this;
        _this._router.post('/get/loginid', function (ctx, next) { return __awaiter(_this, void 0, void 0, function () {
            var user, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, UserAPIRouter.getUserByLoginID(ctx, ctx.request.body.loginId)];
                    case 1:
                        user = _a.sent();
                        ctx.body = {
                            type: 'Success',
                            data: {
                                uuid: user.uuid,
                                loginId: user.loginId,
                                name: user.name,
                                email: user.email,
                            },
                        };
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _a.sent();
                        if (err_1.message && err_1.message.startsWith('BLE:')) {
                            ctx.body = {
                                type: 'Error',
                                message: err_1.message,
                            };
                        }
                        else {
                            Logger_1.default.error(err_1);
                        }
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); });
        _this._router.post('/get/name', function (ctx, next) { return __awaiter(_this, void 0, void 0, function () {
            var user, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, UserAPIRouter.getUserByName(ctx, ctx.request.body.name)];
                    case 1:
                        user = _a.sent();
                        ctx.body = {
                            type: 'Success',
                            data: {
                                uuid: user.uuid,
                                loginId: user.loginId,
                                name: user.name,
                                email: user.email,
                            },
                        };
                        return [3 /*break*/, 3];
                    case 2:
                        err_2 = _a.sent();
                        if (err_2.message && err_2.message.startsWith('BLE:')) {
                            ctx.body = {
                                type: 'Error',
                                message: err_2.message,
                            };
                        }
                        else {
                            Logger_1.default.error(err_2);
                        }
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); });
        _this._router.post('/login', function (ctx, next) { return __awaiter(_this, void 0, void 0, function () {
            var body, jwt, err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        body = ctx.request.body;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, UserAPIRouter.loginUser(ctx, body.loginId, body.password)];
                    case 2:
                        jwt = _a.sent();
                        ctx.cookies.set('access_token', jwt, {
                            httpOnly: true,
                            maxAge: 1000 * 60 * 60 * 24 * 7,
                        });
                        if (body.redirect)
                            ctx.redirect(body.redirect);
                        else
                            ctx.redirect('/');
                        return [3 /*break*/, 4];
                    case 3:
                        err_3 = _a.sent();
                        if (err_3.message && err_3.message.startsWith('BLE:')) {
                            ctx.redirect("/login?id=".concat(body.loginId, "&message=").concat(err_3.message));
                        }
                        else {
                            Logger_1.default.error(err_3);
                        }
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); });
        _this._router.post('/logout', function (ctx, next) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                ctx.cookies.set('access_token', null, {
                    httpOnly: true,
                    maxAge: 0,
                });
                ctx.body = {
                    type: 'Success',
                    message: '로그아웃 하였습니다.',
                };
                return [2 /*return*/];
            });
        }); });
        _this._router.get('/logout', function (ctx, next) { return __awaiter(_this, void 0, void 0, function () {
            var redirect;
            return __generator(this, function (_a) {
                redirect = ctx.query.redirect;
                ctx.cookies.set('access_token', null, {
                    httpOnly: true,
                    maxAge: 0,
                });
                if (redirect && typeof redirect === 'string')
                    ctx.redirect(redirect);
                else
                    ctx.redirect('/');
                return [2 /*return*/];
            });
        }); });
        _this._router.post('/register', function (ctx, next) { return __awaiter(_this, void 0, void 0, function () {
            var body, user, jwt, err_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        body = ctx.request.body;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, UserAPIRouter.registerUser(ctx, body)];
                    case 2:
                        user = _a.sent();
                        return [4 /*yield*/, UserAPIRouter.loginUser(ctx, body.loginId, body.password)];
                    case 3:
                        jwt = _a.sent();
                        ctx.cookies.set('access_token', jwt, {
                            httpOnly: true,
                            maxAge: 1000 * 60 * 60 * 24 * 7,
                        });
                        if (user)
                            ctx.redirect('/');
                        else
                            ctx.redirect("/register?id=".concat(body.loginId, "&message=BLE:NONE"));
                        return [3 /*break*/, 5];
                    case 4:
                        err_4 = _a.sent();
                        if (err_4.message && err_4.message.startsWith('BLE:')) {
                            ctx.redirect("/register?id=".concat(body.loginId, "&message=").concat(err_4.message));
                        }
                        else {
                            Logger_1.default.error(err_4);
                        }
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        }); });
        return _this;
    }
    UserAPIRouter.loginUser = function (ctx, id, password) {
        return __awaiter(this, void 0, void 0, function () {
            var getUser, hashedPW;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, ctx.prisma.user.findFirst({
                            where: {
                                loginId: id,
                            },
                        })];
                    case 1:
                        getUser = _a.sent();
                        if (getUser === null) {
                            throw new Error('BLE:IDPW_IS_NOT_CORRECT');
                        }
                        return [4 /*yield*/, UserCrypto_1.default.makePasswordHashed(password, getUser.pwsalt)];
                    case 2:
                        hashedPW = _a.sent();
                        if (hashedPW !== getUser.password) {
                            throw new Error('BLE:IDPW_IS_NOT_CORRECT');
                        }
                        return [2 /*return*/, JsonWebToken_1.default.generateToken({
                                uuid: getUser.uuid,
                            })];
                }
            });
        });
    };
    UserAPIRouter.registerUser = function (ctx, data) {
        return __awaiter(this, void 0, void 0, function () {
            var checkId, checkNick, emailPattern, checkMail, salt, hashedPW, newUser;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, ctx.prisma.user.findFirst({
                            where: {
                                loginId: data.loginId,
                            },
                        })];
                    case 1:
                        checkId = _a.sent();
                        if (checkId !== null) {
                            throw new Error('BLE:ALREADY_USING_ID');
                        }
                        return [4 /*yield*/, ctx.prisma.user.findFirst({
                                where: {
                                    name: data.name,
                                },
                            })];
                    case 2:
                        checkNick = _a.sent();
                        if (checkNick !== null) {
                            throw new Error('BLE:ALREADY_USING_NAME');
                        }
                        emailPattern = new RegExp(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]+$/);
                        if (!emailPattern.test(data.email)) {
                            throw new Error('BLE:EMAIL_REGEXP_FAILED');
                        }
                        return [4 /*yield*/, ctx.prisma.user.findFirst({
                                where: {
                                    email: data.email,
                                },
                            })];
                    case 3:
                        checkMail = _a.sent();
                        if (checkMail !== null) {
                            throw new Error('BLE:ALREADY_USING_EMAIL');
                        }
                        return [4 /*yield*/, UserCrypto_1.default.createRandomSalt()];
                    case 4:
                        salt = _a.sent();
                        return [4 /*yield*/, UserCrypto_1.default.makePasswordHashed(data.password, salt)];
                    case 5:
                        hashedPW = _a.sent();
                        return [4 /*yield*/, ctx.prisma.user.create({
                                data: {
                                    loginId: data.loginId,
                                    name: data.name,
                                    password: hashedPW,
                                    pwsalt: salt,
                                    email: data.email,
                                },
                            })];
                    case 6:
                        newUser = _a.sent();
                        return [2 /*return*/, newUser];
                }
            });
        });
    };
    UserAPIRouter.getUserByUUID = function (ctx, uuid) {
        return __awaiter(this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, ctx.prisma.user.findFirst({
                            where: {
                                uuid: uuid,
                            },
                        })];
                    case 1:
                        user = _a.sent();
                        if (user === null) {
                            throw new Error('BLE:USER_NOT_FOUND');
                        }
                        else
                            return [2 /*return*/, user];
                        return [2 /*return*/];
                }
            });
        });
    };
    UserAPIRouter.getUserByLoginID = function (ctx, loginId) {
        return __awaiter(this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, ctx.prisma.user.findFirst({
                            where: {
                                loginId: loginId,
                            },
                        })];
                    case 1:
                        user = _a.sent();
                        if (user === null) {
                            throw new Error('BLE:USER_NOT_FOUND');
                        }
                        else
                            return [2 /*return*/, user];
                        return [2 /*return*/];
                }
            });
        });
    };
    UserAPIRouter.getUserByName = function (ctx, name) {
        return __awaiter(this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, ctx.prisma.user.findFirst({
                            where: {
                                name: name,
                            },
                        })];
                    case 1:
                        user = _a.sent();
                        if (user === null) {
                            throw new Error('BLE:USER_NOT_FOUND');
                        }
                        else
                            return [2 /*return*/, user];
                        return [2 /*return*/];
                }
            });
        });
    };
    UserAPIRouter.deleteUserByUUID = function (ctx, uuid) {
        return __awaiter(this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, ctx.prisma.user.delete({
                            where: {
                                uuid: uuid,
                            },
                        })];
                    case 1:
                        user = _a.sent();
                        if (user === null) {
                            throw new Error('BLE:USER_NOT_FOUND');
                        }
                        return [2 /*return*/, true];
                }
            });
        });
    };
    return UserAPIRouter;
}(Router_1.default));
exports.UserAPIRouter = UserAPIRouter;
exports.default = UserAPIRouter;
//# sourceMappingURL=UserAPI.js.map