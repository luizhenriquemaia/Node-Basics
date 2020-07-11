const http = require('http')

// for use websockets or similar things we store the server in a const
// const server = http.createServer()
// callback function which is going to run everytime a request comes in
// to our server
const server = http.createServer((req, res) => {
    console.log('request made')
})

server.listen(3000, 'localhost', () => {
    console.log('listening for request on port 3000')
})