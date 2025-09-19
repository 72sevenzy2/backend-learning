import http from "http";

const server = http.createServer((req, res) => {
    res.writeHead(500, { "content-type": "application/json" });
    res.end(JSON.stringify({ message: "server error" }));
})

const PORT = process.env.PORT;

server.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
});