import { promisify } from 'util';
import * as crypto from 'crypto';

// 암호화 함수를 동기 함수로 변환
const randomBytesAsync = promisify(crypto.randomBytes);

export class UserCrypto {
    static async createRandomSalt() {
        // 암호화에 필요한 랜덤한 salt값 만들기
        try {
            // 랜덤한 64개의 바이트를 만들어, base64인코딩 (완전 무작위)
            return (await randomBytesAsync(64)).toString('base64');
        } catch (e) {
            throw e;
        }
    }

    static async makePasswordHashed(password: string, salt: string) {
        // 평문과 salt를 합쳐 암호화
        let hashed = crypto // 평문에 salt를 sha512 방식으로 9999번 섞고 64바이트로 출력
            .pbkdf2Sync(password, salt, 9999, 64, 'sha512')
            .toString('base64'); // base64 인코딩

        return hashed;
    }
}

export default UserCrypto;
