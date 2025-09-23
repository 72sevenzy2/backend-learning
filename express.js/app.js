import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { routes } from "./routes.js";
import router from "../routes/routes.js";

const posts = router;

const app = express();
const port = process.env.PORT;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use("/api/posts", posts);

app.listen(port, () => { console.log("sever is running" + port) });