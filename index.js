const express = require('express');
const mongo = require('mongoose');
require('./conn/conn.jsx')
const model = require('./conn/schema.jsx')

const port = process.env.PORT || 5000;
const app = express();
app.use(express.json());

app.get('/',(req,res)=>{
    res.json({
        msg:"hi there jai here"
    })
})
app.get('/about',(req,res)=>{
    res.json({
        msg:"from about"
    })
})
app.get('/contact',(req,res)=>{
    res.set('Access-Control-Allow-Origin', '*');
    res.json({
        msg:"from contact"
    })
})
app.get('/user',async (req,res)=>{
    const query =await model.find();
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Headers', "*");
    res.status(201).json({
        msg:query
    })
})
app.post('/login',async (req,res)=>{
const email = req.body.email;
const query =await model.findOne({email});
if(query){
     res.header('Access-Control-Allow-Origin', "*");
     res.header('Access-Control-Allow-Headers', "*");
    res.status(201).json({
        msg:query
    })
}else{
    res.set('Access-Control-Allow-Origin', '*');
    res.status(400).json({
        msg:"something wrong on query"
    })
}
})
app.listen(port,()=>{
    console.log(`server running at ${port}`)
})
