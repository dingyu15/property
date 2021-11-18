require('dotenv').config();
const express = require('express');
const app = express();
const generalRouter = require('./general.routes');
const protectedRouter = require('./protected.routes');
const bodyParser = require('body-parser');
const cors = require('cors');
app.use(cors());

// Added the following code to enable "Access-Control-Origin" on localhost ajax request
app.use(function(request, response, next) {
    response.header('Access-Control-Allow-Origin', '*');
    response.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    response.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use(bodyParser.json());
app.use('/general', generalRouter);
app.use('/protected', protectedRouter);
app.get('/', function(req, res){
    res.send("hello world")
});

app.listen(process.env.PORT, ()=>{
    console.log(`Connecting to port ${process.env.PORT}...`);
});