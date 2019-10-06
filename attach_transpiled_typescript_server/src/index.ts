import { Response } from "express";
const express = require("express");
const cors = require("cors");
const port = 1357;

const app = express();
app.use(cors());

app.get("/ping", (_: any, res: Response) => {
  res.json({ message: "pong" });
});

app.listen(port, () => {
  console.log(`🚀 Express server listening on port ${port}.`);
});
