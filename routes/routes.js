import express from "express";
import { getAllPosts, getSinglePost, CreateNewPost, changePost, deletePost } from "../express.js/postControllers.js";
const router = express.Router();

router.get("/", getAllPosts);

router.get("/:id", getSinglePost);

router.post("/", CreateNewPost);

router.put("/:id", changePost);

router.delete("/:id", deletePost);

export default router;