// importing necessary modules
import http from "http";
import dotenv from "dotenv";
import fs from "fs/promises";
import url from "url";
import path from "path";
dotenv.config();
const PORT = process.env.PORT || 7000;

// loading a file
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const users = [
    { name: "john doe", id: 1 },
    { name: "jahn doe", id: 2 },
    { name: "jane", id: 3 }
]

// router for adding new users
const createNewUser = (req, res) => {
    let body = '';
    req.on('data', (chunk) => {
        body += chunk.toString();
    });
    req.on('end', () => {
        const newUser = JSON.parse(body);
        users.push(...users, newUser);
        res.statusCode = 201;
        res.write(JSON.stringify(newUser));
        res.end();
    })
}


//middleware so proper and maintainability
const logger = (req, res, next) => {
    console.log(`${req.method} : ${req.url}`);
    next();
}

const usersHandler = (req, res) => {
    res.setHeader("content-type", "application/json");
    res.write(JSON.stringify(users)); res.end();
}

const usersByIdHandler = (req, res) => {
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

// server
const server = http.createServer((req, res) => {
    logger(req, res, () => {
        if (req.url === '/api/users' && req.method === 'GET') {
            usersHandler(req, res);
        }
        else if (req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET') {
            usersByIdHandler(req, res);
        }
        // post
        else if (req.url === '/api/users' && req.method === 'POST') {
            createNewUser(req, res);
        }
        else {
            res.writeHead(404, { "content-type": "text/html" });
            res.end("<h1>not found</h1>");
        }
    })
});

server.listen(PORT, `0.0.0.0`, () => {
    console.log(`server running on port ${PORT}`)
});