const express = require("express")
const cors = require("cors")
const app = express()

app.set(express.json())
app.set(cors())

//ADD THE 2 LINES BELOW IN ORDER TO ALLOW SOURCE SHARE DOCS
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//CORS, METHODS ALLOW  
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    next();    
})

module.exports = app