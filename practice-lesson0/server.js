let http = require("http");
let hostName = `127.0.0.1`;
let port = 8000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'HTML' });
    res.end(`<h1>Hello World<h1>`);
});

server.listen(port, hostName, () => {
   console.log(`Server running at http://${hostName}:${port}/`)
})