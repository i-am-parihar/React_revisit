const express = require("express") ;
const connect = require("./configs/db") ;
const {register , login} = require("./controllers/authenticate.controller") ;
const data = require("./controllers/data.controller") ;
const app = express() ;

app.use(express.json()) ;
app.post ("/login" , login) ;
app.post("/register" , register) ;
app.use("/data" , data) ;

app.listen(8080,async() => {
    try{
        await connect() ;
    }
    catch(er){
        console.log(er.message) ;
    }
    console.log("Listening on port 8080") ;
})