const mongoose = require("mongoose");

//const url = "mongodb+srv://sdharshni:6iJUwrzGlMQm5zfU@cluster0.w5kbgml.mongodb.net/?retryWrites=true&w=majority";

const dbConnect= async()=>{
    try{
        const con = await mongoose.connect("mongodb+srv://sdharshni:6iJUwrzGlMQm5zfU@cluster0.w5kbgml.mongodb.net/?retryWrites=true&w=majority");
        console.log("DB Connected");
    }
    catch(err){
        console.log(err);
    }
}


module.exports = {dbConnect};