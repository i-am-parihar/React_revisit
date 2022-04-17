require("dotenv").config();
const User = require("../models/user.model") ;
const jwt = require('jsonwebtoken');

//Token Create
const newToken = (user) =>{
    return jwt.sign({user},process.env.JWT_SECRET_KEY );
}

//Registration
const register = async (req,res)=>{
    try{
        let user = await User.findOne({email:req.body.email}).lean().exec() ;
        if(user){
            return res.status(400).send({message:"please try another email"});
        }

        user = await User.create(req.body) ;       
        const token = newToken(user) ;
        res.send({user , token}) ;    
    }
    catch(er){
        res.status(500).send(er.message) ;
    }
}

//Login
const login = async (req,res)=>{
    try{
    const user = await User.findOne({email:req.body.email});

    if(!user){return res.status(400).send({message:"Please try another email or password"}) ;}
    
    const match = user.checkPassword(req.body.password);
    
    if(!match){return res.status(400).send({message:"Please try another email or password"})}
    const token = newToken(user) ;
    res.send({user,token}) ;
    }

    catch(er){res.status(500).send(er.message) }
}

module.exports = {register , login} ;