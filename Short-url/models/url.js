const mongoose = require('mongoose')


const urlSechema = new mongoose.Schema({
    shortId: {
        type:String,
        require:true,
        unique:true,
    },
    redirectUrl :{
        type:String,
        require :true,npm 
    },
    visitHistory :[{
        timestap :{ type:Number}
    },{
        timestamps:true
    }],
})


const url = mongoose.model("url",urlSechema);

module.exports = url ;