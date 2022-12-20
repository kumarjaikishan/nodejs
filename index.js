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
app.post('/login',async (req,res)=>{
const email = req.body.email;
const query =await model.findOne({email});
console.log(email)
    res.json({
        msg:query
    })
})
app.listen(port,()=>{
    console.log(`server running at ${port}`)
})
