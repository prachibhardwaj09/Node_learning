const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        return res.end('Welcome to our home page');
    }

    if (req.url === '/about') {
        return res.end('Here is our short history');
    }

    res.end(`
        <h1>Oops</h1>
        <p>The page you are looking for does not exist.</p>
        <a href="/">back home</a>
    `);
});

server.listen(5000, () => {
    console.log('Server is running on port 5000');
});