const NAME_OR_PASSWORD_IS_REQUIRED = 'name_or_password_is_required'
const USER_ALREADY_EXISTS = 'user_already_exists'
const USER_DOES_NOT_EXISTS = 'user_does_not_exists'
const INCORRECT_USERNAME_OR_PASSWORD = {
  stateCode: 401,
  msg: '用户名或密码错误',
}
const DATA_FORM_ERROR = {
  stateCode: 400,
  msg: 'DATE_FORM_ERROR',
}
const UNAUTHORIZATION = 'UNAUTHORIZATION'
const UNPERMISSION = 'unpermission'

export {
  NAME_OR_PASSWORD_IS_REQUIRED,
  USER_ALREADY_EXISTS,
  USER_DOES_NOT_EXISTS,
  INCORRECT_USERNAME_OR_PASSWORD,
  UNAUTHORIZATION,
  UNPERMISSION,
  DATA_FORM_ERROR,
}
