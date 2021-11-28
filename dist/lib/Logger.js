"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var moment = require("moment");
var colors = {
    green: '\x1b[32m',
    cyan: '\x1b[36m',
    red: '\x1b[31m',
    yellow: '\x1b[33m',
    reset: '\x1b[0m',
};
var Logger = /** @class */ (function () {
    function Logger() {
    }
    Logger.info = function (message) {
        process.stdout.write(colors.cyan + "[".concat(moment().format('YYYY-MM-DD HH:mm:ss'), "] INFO >> "));
        console.log(message);
        process.stdout.write(colors.reset);
    };
    Logger.warn = function (message) {
        process.stdout.write(colors.yellow +
            "[".concat(moment().format('YYYY-MM-DD HH:mm:ss'), "] WARN >> "));
        console.log(message);
        process.stdout.write(colors.reset);
    };
    Logger.error = function (message) {
        process.stdout.write(colors.red + "[".concat(moment().format('YYYY-MM-DD HH:mm:ss'), "] ERROR >> "));
        console.log(message);
        process.stdout.write(colors.reset);
    };
    Logger.log = function (message) {
        process.stdout.write(colors.reset + "[".concat(moment().format('YYYY-MM-DD HH:mm:ss'), "] LOG >> "));
        console.log(message);
        process.stdout.write(colors.reset);
    };
    return Logger;
}());
exports.default = Logger;
//# sourceMappingURL=Logger.js.map