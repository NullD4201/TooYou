declare class Logger {
    constructor();
    static info(message: any): void;
    static warn(message: any): void;
    static error(message: any): void;
    static log(message: any): void;
}
export default Logger;
