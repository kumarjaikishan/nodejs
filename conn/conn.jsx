const mongo = require('mongoose');

mongo.set('strictQuery', false);
mongo.connect('mongodb+srv://jai:Jai%404880@cluster0.4ntduoo.mongodb.net/Registration?retryWrites=true&w=majority')
.then(()=>{
    console.log("connection successfull");
}).catch((err)=>{
    console.log(err);
})

