import { createContext } from 'node:vm'
import { userModel } from './database'

class UserServices {
  async nameIsExits(name: string) {
    const result = await userModel.findOne({ name })
    return !!result
  }
  async emailIsExits(email: string) {
    const result = await userModel.findOne({ email })
    return !!result
  }
  async emailPwdFind(userDate: { name: string; pwd: string }) {
    const data = await userModel.findOne(userDate)
    return data
  }
  async createUser(user: Object) {
    try {
      const result = await new userModel(user).save()
      return result
    } catch {
      return false
    }
  }
  async changePwd({
    email,
    pwd,
  }: {
    email: string
    pwd: string
  }): Promise<boolean> {
    const isSuccess = await userModel
      .updateOne({ email }, { pwd })
      .then((result) => !!result.n)
      .catch(() => false)
    return isSuccess
  }
}
const userServices = new UserServices()
export { userServices }
