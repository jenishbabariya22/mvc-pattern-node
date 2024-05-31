const express = require('express');

const app = express();

const port = 8000;

const db = require('./config/db');

app.set('view engine','ejs')

app.use(express.urlencoded())

app.use('/',require('./routes'))

app.listen(port,(err)=>{
    if(err){
        console.log(err);
        return false;
    }
    console.log(`server start on port :- ${port}`);
})