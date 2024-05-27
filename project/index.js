const express = require('express')
const users = require('./MOCK_DATA (1).json')
const app = express();
const fs = require('fs')
const mongoose = require("mongoose");
const { type } = require('os');


mongoose.connect('mongodb+srv://juimandal31:8x2qdmFHxsDL8Jv7@cluster0.l7fz9gf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(()=>{
  console.log("mongoDb connectd")
}).catch((err)=>{
  console.log(err)
})

const userSchema = new mongoose.Schema({
  firstname :{
    type : String,
    require :true,
  },
  lastName :{
    type : String,
    require :true,
  },
  email:{
    type : String,
    require :true,
    unique :true
  }
})


const User = mongoose.model("user" ,userSchema)


app.use(express.urlencoded({extended :false}))
app.use(express.json());

PORT = 5000

app.get('/api/user', (req,res)=>{
  return res.json(users)
})

app.route('/api/user/:id').get((req,res)=>{
    const id = Number(req.params.id);
  const user = users.find(user => user.id === id);
    return res.json(user )
  }).patch((req,res)=>{
  const id = Number(req.params.id)
  const user = users.find((user =>user.id === id))

 
  }).delete((req,res)=>{

  })

// app.get('/api/user/:id', (req,res)=>{
//     const id = Number(req.params.id);
//   const user = users.find(user => user.id === id);
//     return res.json(user )
//   })

  app.post('/api/user',(req,res)=>{
   const body = req.body;
   users.push({...body ,id:users.length+1})
   fs.writeFile('./MOCK_DATA (1).json', JSON.stringify(users),(err,data)=>{
    return res.json({status :"pending"})
   })
  })


 
app.listen(PORT , () => {
    console.log(`server started ${PORT}`)
})