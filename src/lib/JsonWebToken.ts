import * as jwt from 'jsonwebtoken';

import 'dotenv/config'; // 루트의 .env파일을 가져와 process.env에 넣어줍니다.

const SECRET_KEY = // process.env의 JWT_SECRET이 있으면 해당 키를 사용, 없으면 TOOYOUSECRETKEY라는 키를 사용합니다.
    process.env.JWT_SECRET !== undefined
        ? process.env.JWT_SECRET
        : 'TOOYOUSECRETKEY';

export class JsonWebToken {
    // JsonWebToken 클래스 (static 함수만 있어요)
    static async generateToken(payload: any): Promise<string> {
        // JWT를 생성합니다. payload에 원하는 object를 넣어주면 해당 키를 KEY와 함께 7일동안 유효한 토큰으로 암호화해줍니다.
        return await jwt.sign(payload, SECRET_KEY, {
            expiresIn: '7d',
        });
    }

    static async decodeToken(token: string): Promise<string | jwt.JwtPayload> {
        // JWT를 파싱합니다. token에 JWT를 넣어주면 해당 토큰을 해석해 Object(JwtPayload)형식으로 반환합니다.
        return await jwt.verify(token, SECRET_KEY);
    }
}

export default JsonWebToken; // import JsonWebToken from 'JsonWebToken'; <- "node.js"에선 파일 확장자의 .js 및 .ts는 생략 가능합니다. "deno"에선 불가능!
