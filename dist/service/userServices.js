"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userServices = void 0;
const database_1 = require("./database");
class UserServices {
    async nameIsExits(name) {
        const result = await database_1.userModel.findOne({ name });
        return !!result;
    }
    async emailIsExits(email) {
        const result = await database_1.userModel.findOne({ email });
        return !!result;
    }
    async emailPwdFind(userDate) {
        const data = await database_1.userModel.findOne(userDate);
        return data;
    }
    async createUser(user) {
        try {
            const result = await new database_1.userModel(user).save();
            return result;
        }
        catch {
            return false;
        }
    }
}
const userServices = new UserServices();
exports.userServices = userServices;
//# sourceMappingURL=userServices.js.map