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
exports.DBMiddleware = exports.prisma = void 0;
var client_1 = require("@prisma/client"); // 프리즈마 클라이언트 가져옵니다.
exports.prisma = new client_1.PrismaClient(); // 새 prisma객체를 정의합니다.
function DBMiddleware(ctx, next) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            // ctx(context)는 클라이언트의 요청 및 서버에서의 응답과 관련된 내용들이 저장되어 있습니다.
            // ctx를 통해 우리는 요청의 내용을 조회하고, 응답을 할 수 있습니다.
            // next에는 해당 Middleware의 작업이 끝나고 진행되어야 하는 콜백 함수가 넘겨집니다.
            // router 요청에서도 get메소드에 한해 next가 넘어옵니다.
            // express에서는 ctx가 req(request)로 요청, res(response)로 응답으로 구분되어 있습니다.
            // 새 MiddleWare를 정의합니다. MiddleWare는 클라이언트의 요청이 들어왔을 때, 우리가 적은 router의 요청이 실행되기 전에 먼저 실행되는 함수들입니다.
            ctx.prisma = exports.prisma; // ctx.prisma에 위에서 정의한 prisma 객체를 정의합니다. 이 과정을 통해 요청 어디서든 DB에 접근이 가능합니다.
            return [2 /*return*/, next(ctx)]; // next(ctx) 함수를 통해 다음 미들웨어가 실행될 수 있게 합니다.
        });
    });
}
exports.DBMiddleware = DBMiddleware;
exports.default = DBMiddleware; // 만든 DBMiddleware를 default export합니다.
// 미들웨어는 고급기술중에 하나라서 원리가 조금 복잡해요.
// 지금은 그냥 이런 게 있다, 정도로만 이해하시고, ctx와 next정도만 이해하셔도 충분합니다.
// 위에서 말했듯이 MiddleWare는 router의 요청이 작동하기 전에 먼저 실행되기 때문에, 사전에 넘어온 요청에서 데이터를 가공하거나, 쿠키를 검증하거나 하는 데에 사용할 수 있어요.
//# sourceMappingURL=DBMiddleWare.js.map