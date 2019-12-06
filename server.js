const express = require('express');
const mainRouter = require("./Routers/mainRouter")
const actionRouter = require("./Routers/actionRouter")
const server = express();





function logger(req, res, next) {
    console.log(`${req.method} to ${req.originalUrl} TimeStamp: ${new Date().toISOString()}`)
    next();
  }





server.use(express.json());
server.use(logger)
server.use("/api/projects", mainRouter)
server.use("/api/actions", actionRouter)

server.get('/', (req, res) => {
    res.send(`<h2>webapi challenge </h2>`);
  });
  module.exports = server;
  