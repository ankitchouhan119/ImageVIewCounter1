const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const mongooseURI = process.env.MONGO_URL;

const connectToMongo = () =>
{  

    mongoose.connect(mongooseURI).then(()=>{
        console.log("Connection successfull")
    }).catch((err)=>{
        console.log("Connection not successfull")
        console.log("error: " + err)
    })
}
module.exports = connectToMongo;
