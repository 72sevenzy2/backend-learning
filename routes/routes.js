import express from "express";
const router = express.Router();
const app = express();

const posts = [
    { id: 1, title: "hello world" },
    { id: 2, title: "hello java" },
    { id: 3, title: "hello six seveeeeeen" }
];

router.get("/", (req, res) => {
    const limit = parseInt(req.query.limit);
    if (!isNaN(limit) && limit > 0) {
        res.json(posts.slice(0, limit));
    }
    else {
        res.json(posts);
    }
});

router.get("/:id", (req, res) => {
    const id = parseInt(req.params.id, 10);
    const post = posts.find((p) => p.id === id);
    if (!post) {
        return res.status(404).send({ message: "post not found" });
    }
    res.json(posts.filter((post) => post.id == id));
});

export default router;