// Import router table
const api = require("./api.js");

const express = require("express");

const cors = require("cors");

server = express();

server.use(cors());

server.use(express.json());

server.use(api.router);

server.listen(3001, () => {
    console.log (`Server is starting`);
});
