"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkObjectForm = exports.isRouter = exports.readDirModules = void 0;
const fs_1 = require("fs");
const path_1 = require("path");
const readDirModules = (path, ignoreArr) => {
    //筛选一下忽略的数组
    const fileArr = fs_1.readdirSync(path).filter((fileName) => ignoreArr.every((rule) => rule.test(fileName) === false));
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
const isRouter = (router) => {
    return !!(router.routes && router.get);
};
exports.isRouter = isRouter;
const isPlainObject = (object) => {
    return Object.getPrototypeOf(object) === Object.prototype;
};
function checkObjectForm(model, data) {
    return Object.keys(model).every((property) => {
        //查询是否有嵌套
        if (typeof model[property] === 'object') {
            // 如果body和模型的数据类型不一致说明验证未通过
            if (typeof data[property] !== 'object')
                return false;
            //递归的进行验证
            return checkObjectForm(model[property], data[property]);
        }
        return data.hasOwnProperty(property);
    });
}
exports.checkObjectForm = checkObjectForm;
//# sourceMappingURL=utils.js.map