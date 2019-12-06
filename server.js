const express = require('express');
const mainRouter = require("./Routers/mainRouter")
const actionRouter = require("./Routers/actionRouter")
const server = express();


server.use(express.json());



server.use("/api/projects", mainRouter)
server.use("/api/actions", actionRouter)

server.get('/', (req, res) => {
    res.send(`<h2>webapi challenge </h2>`);
  });
  module.exports = server;
  