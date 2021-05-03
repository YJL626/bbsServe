import dotenv from 'dotenv'
dotenv.config()
const USER_DATE_BASE = process.env.USER_DATE_BASE || ''
const EMAIL_AUTH_USER = process.env.EMAIL_AUTH_USER || ''
const EMAIL_AUTH_PASS = process.env.EMAIL_AUTH_PASS || ''
const FRONTEND_URL = process.env.FRONTEND_URL || ''

export { USER_DATE_BASE, EMAIL_AUTH_USER, EMAIL_AUTH_PASS, FRONTEND_URL }
