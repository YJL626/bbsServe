import jwt from 'jsonwebtoken'
import { readFile } from 'fs/promises'
import { resolve } from 'path'

class Jwt {
  async sign(data: any, expiresIn: any) {
    const key = await readFile(resolve('./key/rsa_private.key'))
    const jwtData = jwt.sign(data, key, {
      algorithm: 'RS256',
      expiresIn,
    })
    return jwtData
  }
  async verify(token: any) {
    const key = await readFile(resolve('./key/rsa_private.key'))
    jwt.verify(token, key)
  }
}
const myJwt = new Jwt()
export { myJwt }
