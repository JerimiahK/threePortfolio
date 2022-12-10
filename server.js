const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/home.html"))
);

app.get("/home", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/home.html"))
);

app.get("/projects", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/projects.html"))
);

app.get("/info", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/info.html"))
);

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
