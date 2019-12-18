const app = require('./server');
const express = require('express');

var unirest = require("unirest");

app.use(express.json());
app.use(express.urlencoded());


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "https://localhost:8081"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


app.post('/searchlyric',(req,res)=>{
    console.log(req.body.artist)
    var reqs = unirest("GET", `https://orion.apiseeds.com/api/music/lyric/${req.body.artist}/${req.body.track}`);
    // https://orion.apiseeds.com/api/music/lyric/:artist/:track
//ask someone
    reqs.query({
        "apikey":"cVlunQMfhE4oCGnW8MbZQjqyIji4s2x3eU1W1fwIXj5AACILMPeHuKsFsA0Qr7bX"
    });
    
    reqs.end(function (response) {
        var dataObj = response.body;
        console.log(dataObj.result)
        res.send(dataObj.result)
    });
    console.log("asdasd")
    

})






