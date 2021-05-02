import mongoose from 'mongoose'
import { userDatabase } from '../config/db.config'
mongoose.set('useCreateIndex', true)
mongoose.connect(userDatabase, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const db = mongoose.connection
const userModel = mongoose.model(
  'users',
  new mongoose.Schema({
    email: {
      type: String,
      unique: true,
      required: true,
    },
    pwd: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      unique: true,
      required: true,
    },
    nickName: {
      type: String,
      required: true,
    },
  })
)
db.on('error', () => {
  console.log('db connect error')
})
db.on('open', () => {
  console.log('db open')
})
export { userModel }
