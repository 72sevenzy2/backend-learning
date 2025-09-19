import http from "http";
import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT;

const server = http.createServer((req, res) => {
    if (req.url === '/server.htm') {
        res.writeHead(200, { "content-type": "text/html" });
        res.end("<h1>test</h1>");
    } else if (req.url === '/server.htm/about') {
        res.writeHead(200, { "content-type": "text/html" });
        res.end("<h1>about</h1>");
    } else {
        res.writeHead(404, { "content-type": "text/html" });
        res.end("<h1>not found</h1>");
    }
});

server.listen(PORT, `0.0.0.0`, () => {
    console.log(`server running on port ${PORT}`)
});