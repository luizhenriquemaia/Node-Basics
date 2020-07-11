const http = require('http')
const fs = require('fs')

// for use websockets or similar things we store the server in a const
// const server = http.createServer()
// callback function which is going to run everytime a request comes in
// to our server
const server = http.createServer((req, res) => {
    //console.log('request made')
    console.log(req.url, req.method)

    // set header content type
    res.setHeader('Content-Type', 'text/html')
    // write content
    // res.write('<p>helloooo</p>')
    // res.write('<p>its me mario</p>')
    // end the response for sent it to the browser
    // res.end()

    let path = './views/'

    switch(req.url) {
        case '/':
            path += 'index.html'
            res.statusCode = 200
            break
        case '/about':
            path += 'about.html'
            res.statusCode = 200
            break
        // how do redirect works
        case '/about-me':
            res.statusCode = 301
            res.setHeader('Location', '/about')
            res.end()
            break
        default:
            path += '404.html'
            res.statusCode = 404
            break
    }

    // send an html file
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err)
            res.end()
        } else {
            // if we are write multiple things we will use write
            // but for just a html page we can send data in res.end()
            // res.write()
            res.end(data)
        }
    })
})

server.listen(3000, 'localhost', () => {
    console.log('listening for request on port 3000')
})