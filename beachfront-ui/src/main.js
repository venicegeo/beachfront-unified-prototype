require('./styles/main.css')
const lib = require('./lib')
const imgSrc = require('./images/img.png')

const h1 = document.createElement('h1')
h1.textContent = lib.foo()
document.body.appendChild(h1)

const img = document.createElement('img')
img.src = imgSrc
document.body.appendChild(img)
