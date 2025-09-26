import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { routes } from "./routes.js";
import router from "../routes/routes.js";
import logger from "../middleware/logger.js";
import errorHandler from "../middleware/error.js";

const posts = router;

const app = express();
const port = process.env.PORT;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger);

app.use(express.static(path.join(__dirname, 'public')));

app.use("/api/posts", posts);
app.use(errorHandler);

app.listen(port, '0.0.0.0', () => { console.log(`sever is running on port ${port}`) });