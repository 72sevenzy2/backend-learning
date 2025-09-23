import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { routes } from "./routes.js";

const app = express();
const port = process.env.PORT;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const posts = [
        { id: 1, title: "hello world" },
        { id: 2, title: "hello java" },
        { id: 3, title: "hello six seveeeeeeen" }
];

app.get("/api/posts", (req, res) => {
        res.json(posts);
});

app.get("/api/posts/:id", (req, res) => {
        const id = parseInt(req.params.id);
        res.json(posts.filter((post) => post.id == id));
});

app.listen(port, () => { console.log("sever is running" + port) });