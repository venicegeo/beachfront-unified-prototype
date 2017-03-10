const axios = require('axios')

const client = axios.create({
    auth: {
        username: sessionStorage.apiKey,
        password: '',
    },
})

module.exports.foo = function () {
    client.get('/api')
        .then(response => {
            console.debug('API call succeeded:', response.data)
        })
        .catch(err => {
            const msg = document.createElement('p')
            msg.textContent = 'API call failed: ' + err.response.data
            msg.style.backgroundColor = 'red'
            document.body.insertBefore(msg, document.body.firstChild)
        })

    return 'works!'
}
