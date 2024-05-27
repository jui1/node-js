const {nanoid} = require('nanoid')
const url =require("../models/url")

async function  newurl(req,res){

 const body = req.body;
 if(!body.url) return res.status(400).json({error :'url is required'})
    const shortid = nanoid(8);
await URL.createObjectURL({
    shortId :shortid,
    redirectURL  : body.url,
    visiHistory:[]
});

return res.json({ id: shortid})
}

module.exports ={
    newurl,
}