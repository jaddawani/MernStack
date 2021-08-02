const mongoose = require('mongoose');
const express = require('express');
const app = express();
require("./server/config/mogoose.config");

app.use(express.json(), express.urlencoded({extended : true }));

const AllMyJokesRoutes = require("./server/config/jokes.route");
AllMyJokesRoutes(app);

app.listen(8000 , () => console.log ("the server is all fired up on port 8000"));



