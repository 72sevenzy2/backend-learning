import http from "http";
import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT;

const users = [
    { name: "john doe", id: 1 },
    { name: "jahn doe", id: 2 },
    { name: "jane", id: 3 }
]

const server = http.createServer((req, res) => {
    if (req.url === '/api/users' && req.method === 'GET') {
        res.setHeader("content-type", "application/json");
        res.write(JSON.stringify(users)); res.end();
    }
    else if (req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET') {
        const id = req.url.split('/')[3];
        const user = users.find((user) => user.id === parseInt(id));
        if (user) {
            res.setHeader("content-type", "application/json");
            res.write(JSON.stringify(user));
            res.end();
        }
        else {
            res.writeHead(404, { "content-type": "application/json" });
            res.end(JSON.stringify({ message: "user not found" }));
        }
    }
    else {
        res.writeHead(404, { "content-type": "text/html" });
        res.end("<h1>not found</h1>");
    }
});

server.listen(PORT, `0.0.0.0`, () => {
    console.log(`server running on port ${PORT}`)
});