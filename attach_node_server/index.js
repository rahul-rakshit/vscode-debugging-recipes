const express = require("express");
const cors = require("cors");
const port = 1357;

const app = express();
app.use(cors());

app.get("/ping", (_, res) => {
  res.json({ message: "pong" });
});

app.listen(port, () => console.log(`🚀 App listening on port ${port}.`));
