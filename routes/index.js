const express = require('express');
const app = express();
const generalRouter = require('./general.routes');
const protectedRouter = require('./protected.routes');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use('/general', generalRouter);
app.use('/protected', protectedRouter);
app.get('/', function(req, res){
    res.send("hello world")
});

app.listen(process.env.PORT, ()=>{
    console.log(`Connecting to port ${process.env.PORT}...`);
});