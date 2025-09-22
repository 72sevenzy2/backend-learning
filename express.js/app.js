import express from "express";

const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
        res.send({message: "hello world"});
});

app.listen(port, () => { console.log("sever is running" + port) });