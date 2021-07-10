var express = require('express');
const { createCanvas } = require('canvas')
var router = express.Router();

let str = '123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

router.get('/', function (req, res, next) {
  let data = imageUrl();
  res.render('index', { captchaValue: data.captcha, imageUrl: data.imageUrl });
});

const imageUrl = () => {
  const canvas = createCanvas(170, 100)
  const ctx = canvas.getContext('2d')
  let captcha = '';
  for (let i = 0; i < 8; i++) {
    captcha += str.charAt(Math.floor(Math.random() * str.length))
  }
  ctx.rotate(40 * Math.PI / 180);
  ctx.font = '16px Impact'
  ctx.textBaseline = "middle";
  ctx.textAlign = "center";
  ctx.fillText(captcha, 80, 5)
  return{
    imageUrl:canvas.toDataURL(),
    captcha
  }
}

module.exports = router;
