import svgCaptcha from 'svg-captcha'
class CaptchaController {
  get() {
    return svgCaptcha.create()
  }
}
const captchaController = new CaptchaController()
export { captchaController }
