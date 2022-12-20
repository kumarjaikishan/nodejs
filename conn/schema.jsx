const mongo = require('mongoose');

const studentschema =new mongo.Schema({
    name: {
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true,
    },
    admin:{
        type:Boolean
    }
})

const model = new mongo.model("user",studentschema);
module.exports =model;