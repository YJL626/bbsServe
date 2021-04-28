declare type mailAcceptConfig = {
  to: string // list of receivers
  subject: string // Subject line
  /*  text?: string // plain text body */
  html: string // html body
}

declare type errType = {
  msg: String
  stateCode: number
}
export { errType, mailAcceptConfig }
