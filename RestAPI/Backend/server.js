const express = require("express");
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;

const app = express();

app.get('/api/goals', function(req,res){
    res.json({
        message: 'hare krsna'
    })
})

app.listen(port,() => 
    console.log(`Server is running at the port ${port}`)
)