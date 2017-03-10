require('./styles/main.css')
const lib = require('./lib')
const imgSrc = require('./images/img.png')

//
// Simple header
//

const img = document.createElement('img')
img.src = imgSrc
img.style.height = '1em';

const h1 = document.createElement('h1')
h1.appendChild(img)
h1.appendChild(document.createTextNode(lib.foo()))
document.body.appendChild(h1)

//
// Dump sessionStorage contents
//

const h2 = document.createElement('h2')
h2.textContent = 'sessionStorage contents:'
document.body.appendChild(h2)
const pre = document.createElement('pre')
pre.textContent = JSON.stringify(sessionStorage)
document.body.appendChild(pre)

//
// Session management
//

if (sessionStorage.apiKey) {
    const button = document.createElement('button')
    button.textContent = 'Log Out'
    button.onclick = () => {
        sessionStorage.clear()
        location.reload()
    }
    document.body.appendChild(button)
}
else {
    const a = document.createElement('a')
    a.textContent = 'Log In'
    a.href = location.href
    a.search = '?code=12345'
    document.body.appendChild(a)
}

// Remove authcode from URL bar
history.replaceState(null, null, location.href.replace(/\?code=.*$/, ''))
