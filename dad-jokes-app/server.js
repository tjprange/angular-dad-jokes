const express = require("express");
const http = require("http");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + "/dist/dad-jokes"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname));
});

app.get("*", (req, res) => {
  res.send("No funnies here!");
});

const server = http.createServer(app);

server.listen(port, () => console.log("Serving up some dad jokes!"));
