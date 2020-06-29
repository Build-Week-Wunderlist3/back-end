const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const jwt = require('jsonwebtoken');
const authMiddleware = require('../auth/restrictedmiddleware.js')

const server = express();

//middleware
server.use(helmet());
server.use(cors());
server.use(express.json());

//routes
const authRouter = require('../auth/auth-router.js');
const todoRouter = require('../todo/todo-router.js');


server.use('/api/auth', authRouter);
server.use('/api/todo', todoRouter);

server.get("/", (req, res) => {
    res.status(200).json("Welcome to the Wunderlist App");
});

module.exports = server;



