const mongoose = require('mongoose')
require('dotenv').config();

const db = mongoose.connect(
    process.env.DATABASE_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
    ).then( ()=>{
        console.log("database connected succesfully")
    }).catch( ()=>{
        console.log("connection faild");
    });

module.exports = db;
