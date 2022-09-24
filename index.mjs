import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("hello from express!");        // browser output
});

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`);       // logged in the terminal display
});

