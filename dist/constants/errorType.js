"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UNPERMISSION = exports.UNAUTHORIZATION = exports.INCORRECT_USERNAME_OR_PASSWORD = exports.USER_DOES_NOT_EXISTS = exports.USER_ALREADY_EXISTS = exports.NAME_OR_PASSWORD_IS_REQUIRED = void 0;
const NAME_OR_PASSWORD_IS_REQUIRED = 'name_or_password_is_required';
exports.NAME_OR_PASSWORD_IS_REQUIRED = NAME_OR_PASSWORD_IS_REQUIRED;
const USER_ALREADY_EXISTS = 'user_already_exists';
exports.USER_ALREADY_EXISTS = USER_ALREADY_EXISTS;
const USER_DOES_NOT_EXISTS = 'user_does_not_exists';
exports.USER_DOES_NOT_EXISTS = USER_DOES_NOT_EXISTS;
const INCORRECT_USERNAME_OR_PASSWORD = {
    stateCode: 400,
    msg: 'Incorrect username or password',
};
exports.INCORRECT_USERNAME_OR_PASSWORD = INCORRECT_USERNAME_OR_PASSWORD;
const UNAUTHORIZATION = 'UNAUTHORIZATION';
exports.UNAUTHORIZATION = UNAUTHORIZATION;
const UNPERMISSION = 'unpermission';
exports.UNPERMISSION = UNPERMISSION;
