"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.myJwt = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const promises_1 = require("fs/promises");
const path_1 = require("path");
class Jwt {
    async sign(data, expiresIn) {
        const key = await promises_1.readFile(path_1.resolve('./key/rsa_private.key'));
        const jwtData = jsonwebtoken_1.default.sign(data, key, {
            algorithm: 'RS256',
            expiresIn,
        });
        return jwtData;
    }
    async verify(token) {
        const key = await promises_1.readFile(path_1.resolve('./key/rsa_private.key'));
        jsonwebtoken_1.default.verify(token, key);
    }
}
const myJwt = new Jwt();
exports.myJwt = myJwt;
