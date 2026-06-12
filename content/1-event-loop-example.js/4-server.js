const http = require('http') //require() is used in node.js to import code from another file or built-in module so that you can use it in your current file
const server = http.createServer((req, res) =>{
console.log('request event')
res.end('Hello World')
})
server.listen(5000,() => {
    console.log('Server listening on port : 5000...')
})