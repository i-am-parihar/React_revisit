const express = require("express") ;
const router = express.Router() ; 
const Data = require("../models/data.model") ;


//Get all  data
router.get("" , async(req,res) => {
    try{
        const teachersData = await Data.find().lean().exec() ;
        return res.send(teachersData) ;
    }
    catch(er){
        return res.status(500).send(er.message) ;
    }
});

router.post("" , async(req,res)=>{
    try{
       const teachersData = await Data.create(req.body) ;
       return res.send(teachersData) ;
    }
    catch(er){
        return res.status(500).send(er.message) ;
    }
});


module.exports = router ;