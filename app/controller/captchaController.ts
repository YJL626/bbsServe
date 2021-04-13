import svgCaptcha from "svg-captcha";
class CaptchaController {
  get() {
    const c = svgCaptcha.create();
    return c;
  }
}
const captchaController = new CaptchaController();
export { captchaController };
