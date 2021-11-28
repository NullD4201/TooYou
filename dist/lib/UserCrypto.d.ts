export declare class UserCrypto {
    static createRandomSalt(): Promise<string>;
    static makePasswordHashed(password: string, salt: string): Promise<string>;
}
export default UserCrypto;
