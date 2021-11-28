"use strict";
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
exports.JsonWebToken = void 0;
var jwt = require("jsonwebtoken");
require("dotenv/config"); // 루트의 .env파일을 가져와 process.env에 넣어줍니다.
var SECRET_KEY = // process.env의 JWT_SECRET이 있으면 해당 키를 사용, 없으면 TOOYOUSECRETKEY라는 키를 사용합니다.
 process.env.JWT_SECRET !== undefined
    ? process.env.JWT_SECRET
    : 'TOOYOUSECRETKEY';
var JsonWebToken = /** @class */ (function () {
    function JsonWebToken() {
    }
    // JsonWebToken 클래스 (static 함수만 있어요)
    JsonWebToken.generateToken = function (payload) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, jwt.sign(payload, SECRET_KEY, {
                            expiresIn: '7d',
                        })];
                    case 1: 
                    // JWT를 생성합니다. payload에 원하는 object를 넣어주면 해당 키를 KEY와 함께 7일동안 유효한 토큰으로 암호화해줍니다.
                    return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    JsonWebToken.decodeToken = function (token) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, jwt.verify(token, SECRET_KEY)];
                    case 1: 
                    // JWT를 파싱합니다. token에 JWT를 넣어주면 해당 토큰을 해석해 Object(JwtPayload)형식으로 반환합니다.
                    return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return JsonWebToken;
}());
exports.JsonWebToken = JsonWebToken;
exports.default = JsonWebToken; // import JsonWebToken from 'JsonWebToken'; <- "node.js"에선 파일 확장자의 .js 및 .ts는 생략 가능합니다. "deno"에선 불가능!
//# sourceMappingURL=JsonWebToken.js.map