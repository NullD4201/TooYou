import { PrismaClient } from '@prisma/client'; // 프리즈마 클라이언트 가져옵니다.
import { Context } from 'koa';

export const prisma = new PrismaClient(); // 새 prisma객체를 정의합니다.

declare module 'koa' {
    // koa의 BaseContext type을 재정의합니다.
    // 이 작업이 없으면 요청에서 ctx.prisma를 불러오면 없다고 오류가 납니다.
    interface BaseContext {
        prisma: PrismaClient;
        // BaseContext 아래에 PrismaClient가 저장되는 prisma가 있다고 정의하는거에요!
    }
}

export async function DBMiddleware(ctx: Context, next: any) {
    // ctx(context)는 클라이언트의 요청 및 서버에서의 응답과 관련된 내용들이 저장되어 있습니다.
    // ctx를 통해 우리는 요청의 내용을 조회하고, 응답을 할 수 있습니다.
    // next에는 해당 Middleware의 작업이 끝나고 진행되어야 하는 콜백 함수가 넘겨집니다.
    // router 요청에서도 get메소드에 한해 next가 넘어옵니다.
    // express에서는 ctx가 req(request)로 요청, res(response)로 응답으로 구분되어 있습니다.
    // 새 MiddleWare를 정의합니다. MiddleWare는 클라이언트의 요청이 들어왔을 때, 우리가 적은 router의 요청이 실행되기 전에 먼저 실행되는 함수들입니다.
    ctx.prisma = prisma; // ctx.prisma에 위에서 정의한 prisma 객체를 정의합니다. 이 과정을 통해 요청 어디서든 DB에 접근이 가능합니다.
    return next(ctx); // next(ctx) 함수를 통해 다음 미들웨어가 실행될 수 있게 합니다.
}

export default DBMiddleware; // 만든 DBMiddleware를 default export합니다.

// 미들웨어는 고급기술중에 하나라서 원리가 조금 복잡해요.
// 지금은 그냥 이런 게 있다, 정도로만 이해하시고, ctx와 next정도만 이해하셔도 충분합니다.
// 위에서 말했듯이 MiddleWare는 router의 요청이 작동하기 전에 먼저 실행되기 때문에, 사전에 넘어온 요청에서 데이터를 가공하거나, 쿠키를 검증하거나 하는 데에 사용할 수 있어요.
