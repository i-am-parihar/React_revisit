const mongoose = require("mongoose") ;

module.exports = () => { 
    return mongoose.connect("mongodb+srv://teacher123:teacher123@cluster0.v0pmo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority") ;
}