import mongoose from 'mongoose'
import { userDatabase } from '../config/db.config'
mongoose.connect(userDatabase, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
const db = mongoose.connection
db.on('error', () => {
  console.log('db connect error')
})
db.on('open', () => {
  console.log('db open')
  const userSchema = new mongoose.Schema({
    name: String,
    password: String,
  })

  const userModel = mongoose.model('user', userSchema)
  const testUser = new userModel({ name: 'test', password: '123456' })
  testUser.save((err: any, value: any) => {
    console.log(err, value)
  })
})
