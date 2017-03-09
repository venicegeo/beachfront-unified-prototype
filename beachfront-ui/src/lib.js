console.assert(sessionStorage.fromOrigin, 'found beacon in sessionStorage')

module.exports.foo = function () {

    const xhr = new XMLHttpRequest()
    xhr.open('GET', '/api')
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest')
    xhr.onload = function () {
        console.debug('API response', xhr.responseText)
    }
    xhr.send()

    return 'works!'
}
