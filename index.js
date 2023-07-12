const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
require('dotenv').config()

const api = require('./src');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

//route call
api(app);

app.listen({ port: process.env.PORT }, () => console.log(`🚀 Server ready at http://localhost:` + process.env.PORT))
    .on('error', (err) => {
        console.log(err);
        process.exit();
    })
    .on('close', () => {
        channel.close();
    });