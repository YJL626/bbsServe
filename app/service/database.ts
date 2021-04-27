import mongoose from 'mongoose'
import { userDatabase } from '../config/db.config'
mongoose.connect(userDatabase, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
const db = mongoose.connection
const userModel = mongoose.model(
  'users',
  new mongoose.Schema({
    email: String,
    password: String,
    name: String,
    nickName: String,
  })
)
db.on('error', () => {
  console.log('db connect error')
})
db.on('open', () => {
  console.log('db open')
})
export { userModel }
