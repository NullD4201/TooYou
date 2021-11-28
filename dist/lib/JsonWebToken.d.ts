import * as jwt from 'jsonwebtoken';
import 'dotenv/config';
export declare class JsonWebToken {
    static generateToken(payload: any): Promise<string>;
    static decodeToken(token: string): Promise<string | jwt.JwtPayload>;
}
export default JsonWebToken;
