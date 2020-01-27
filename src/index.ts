import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Test</h1>");
})

app.listen(7888, () => {});