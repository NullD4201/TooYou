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
exports.IndexPageRouter = void 0;
var Router_1 = require("../lib/Router");
var IndexPageRouter = /** @class */ (function (_super) {
    __extends(IndexPageRouter, _super);
    // import { IndexPageRouter } from 'IndexPage.ts'
    function IndexPageRouter() {
        var _this = _super.call(this) || this;
        // HTTP 메소드 잘 지키고 대강 대강 깔끔한 API = RESTful API
        // HTTP 메소드? GET, POST, PUT, PATCH, DELETE. 보통 우리는 GET, POST를 가장 많이 씁니다.
        // 브라우저 주소창에 주소를 입력하는 행위 = GET요청 (해당 사이트의 페이지를 '가져온다.')
        // POST요청 : POST = 게시하다. 서버의 DATA Create를 위해 사용. (근데 사실 이거 잘 안지킴ㅋㅋ)
        // CRUD = Create, Read, Update, Delete
        // koa는 express개발진들이 집나와 만든 새로운 서버 모듈
        // express는 HTTP 요청을 처리할때 async를 비권장하지만, (써도 상관은 없어)
        // koa는 HTTP요청을 처리할때 async를 권장 (이거 안하면 오류 생기는 경우도 되게 많아)
        _this._router.get('/', function (ctx, next) { return __awaiter(_this, void 0, void 0, function () {
            var renderRes;
            return __generator(this, function (_a) {
                renderRes = this.renderLayout(ctx, ['index.ejs'], {
                    stylesheets: ['index', 'image'],
                    javascripts: ['index']
                });
                ctx.status = 200; // 우리는 응답을 받았어. (200 OK)
                ctx.type = 'text/html; charset=utf-8'; // 우리는 이러한 형식을 보내고
                ctx.body = renderRes; // 이런 데이터를 보내.
                return [2 /*return*/];
            });
        }); });
        return _this;
    }
    return IndexPageRouter;
}(Router_1.default));
exports.IndexPageRouter = IndexPageRouter;
exports.default = IndexPageRouter; // import IndexPageRouter from 'IndexPage.ts'
//# sourceMappingURL=IndexPage.js.map