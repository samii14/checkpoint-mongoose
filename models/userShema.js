const mongoose = require("mongoose")

const userShema= mongoose.Schema({
    name:String,
    age:Number,
    email:{type:String,require:true}
})

const user = mongoose.model("user", userShema)
module.exports= user