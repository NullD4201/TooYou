import Router from '../lib/Router';

export class IndexPageRouter extends Router {
    // import { IndexPageRouter } from 'IndexPage.ts'
    constructor() {
        super(); // 상속받은 클래스의 생성자 실행

        // HTTP 메소드 잘 지키고 대강 대강 깔끔한 API = RESTful API
        // HTTP 메소드? GET, POST, PUT, PATCH, DELETE. 보통 우리는 GET, POST를 가장 많이 씁니다.
        // 브라우저 주소창에 주소를 입력하는 행위 = GET요청 (해당 사이트의 페이지를 '가져온다.')
        // POST요청 : POST = 게시하다. 서버의 DATA Create를 위해 사용. (근데 사실 이거 잘 안지킴ㅋㅋ)
        // CRUD = Create, Read, Update, Delete

        // koa는 express개발진들이 집나와 만든 새로운 서버 모듈
        // express는 HTTP 요청을 처리할때 async를 비권장하지만, (써도 상관은 없어)
        // koa는 HTTP요청을 처리할때 async를 권장 (이거 안하면 오류 생기는 경우도 되게 많아)
        this._router.get('/', async (ctx, next) => {
            let renderRes = this.renderLayout(ctx, ['index.ejs'], {
                stylesheets: ['index', 'image'],
                javascripts: ['index']
            }); // string -> "<!doctype html><html></html>"

            ctx.status = 200; // 우리는 응답을 받았어. (200 OK)
            ctx.type = 'text/html; charset=utf-8'; // 우리는 이러한 형식을 보내고
            ctx.body = renderRes; // 이런 데이터를 보내.
        });
    }
}

export default IndexPageRouter; // import IndexPageRouter from 'IndexPage.ts'
