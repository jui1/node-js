const express = require("express")
const urlRoute = require('./routes/url')
const app = express();
const  {connectToMongoDB} = require("./connect");

connectToMongoDB('mongodb://localhost:27017/short-url').then(()=>{
    console.log("its connceted")
})
const PORT = 8000;

app.use('/url',urlRoute)
app.listen(PORT,()=>{
    console.log(`your server is started in ${PORT}`)
})