const express = require('express');
const mainRouter = require("./Routers/mainRouter")

const server = express();


server.use(express.json());



server.use("/api/projects", mainRouter)

server.get('/', (req, res) => {
    res.send(`<h2>webapi challenge </h2>`);
  });
  module.exports = server;
  