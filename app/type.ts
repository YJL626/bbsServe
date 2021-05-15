type mailAcceptConfig = {
  to: string // list of receivers
  subject: string // Subject line
  /*  text?: string // plain text body */
  html: string // html body
}

type errType = {
  msg: string
  stateCode: number
}
type myObject = Record<string, any>
export { errType, mailAcceptConfig, myObject }
