"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const db_config_1 = require("../config/db.config");
mongoose_1.default.connect(db_config_1.userDatabase, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const db = mongoose_1.default.connection;
db.on('error', () => {
    console.log('db connect error');
});
db.on('open', () => {
    console.log('db open');
    const userSchema = new mongoose_1.default.Schema({
        name: String,
        password: String,
    });
    const userModel = mongoose_1.default.model('user', userSchema);
    const testUser = new userModel({ name: 'test', password: '123456' });
    testUser.save((err, value) => {
        console.log(err, value);
    });
});
