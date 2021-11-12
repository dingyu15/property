const express = require('express');
const app = express();
const generalRouter = require('./general.routes');
const protectedRouter = require('./protected.routes');


app.use('/general', generalRouter);
app.use('/protected', protectedRouter);
app.get('/', function(req, res){
    res.send("hello world")
});

app.listen(3000, ()=>{
    console.log("Connecting to port 3000...");
});