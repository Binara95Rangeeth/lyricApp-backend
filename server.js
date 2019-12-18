const express = require('express');
const bodyParser = require('body-parser')

//set up express app
const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

//listen for request
app.listen(process.env.PORT  || 4000, ()=>{
    console.log("now listenting...")
});

module.exports = app;