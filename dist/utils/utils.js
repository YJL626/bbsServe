"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isRouter = exports.readDirModules = void 0;
const fs_1 = require("fs");
const path_1 = require("path");
const readDirModules = (path, ignoreArr) => {
    //筛选一下忽略的数组
    const fileArr = fs_1.readdirSync(path).filter((fileName) => !ignoreArr.includes(fileName));
    //在try，catch内根据文件名去读取module，
    return fileArr.reduce((acc, fileName) => {
        try {
            //读取模块并推入数组'
            const module = Object.values(require(path_1.resolve(path, fileName)));
            acc.push(...module);
        }
        catch {
            console.log('读取模块时遇到意料之外的文件');
        }
        return acc;
    }, []);
};
exports.readDirModules = readDirModules;
//查看有没有router实例的方法
const isRouter = (router) => !!(router.routes && router.get);
exports.isRouter = isRouter;
