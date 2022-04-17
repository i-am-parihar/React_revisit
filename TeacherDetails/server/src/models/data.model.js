const mongoose = require("mongoose") ;

const dataSchema = new mongoose.Schema(
    {
        name:{type:String,required:true} ,
        gender:{type:String,required:true} ,
        age:{type:Number,required:true},
        class:[{
              grade:{type:String,required:true} ,
              section:{type:String,required:true},
              subject:{type:String,required:true} 
              }]
    },
    {
        versionKey:false,
        timestamps:true,
    }
);

module.exports = mongoose.model("data" , dataSchema) ;