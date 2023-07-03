const express=require('express');
const routes=express.Router();

routes.get('/',(req,res,next)=>{
    res.send(`<h1>Welcome to simple add product website</h1>`);
})

module.exports=routes;