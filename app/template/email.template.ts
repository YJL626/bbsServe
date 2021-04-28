const generateRegisterMail = (to: string, href: String) => {
  return {
    to,
    html: `<body><h2> RegisterMail:  ${href} </h2></body>`,
    subject: 'Register',
  }
}

export { generateRegisterMail }
