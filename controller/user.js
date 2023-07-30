const User = require('../model/user.js')
const bcrypt = require("bcrypt")
const session = require('../index.js')
//const session = require('express-session')


const userSignup=async(req,res)=>{

    const {name,email,password} = req.body
    
    const hasedPassword =  await bcrypt.hash(password,10);
    
    const user = await User.create({name:name,email:email,password:hasedPassword})
    
    if(user){
        
        res.send(user)
    }else{
    
        res.send("not added")
    }
    
    }

    const userSignin = async(req,res)=>{
        const {email,password} = req.body


        const user = await User.findOne({email:email})
        
        const matchPassword = await bcrypt.compare(password,user.password);

        if(!matchPassword){
            return res.status(404).json({"message":"User Not found"});
        }

            if(user)
            {
                
                req.session.userid=user.name
				res.cookies.userid = user.name
                console.log(req.session.userid)
                res.json({user:user})



            }else{
                res.json({error:"not found"})
            }
           
            }

    const getUser = async(req,res)=>{
                const {uid} = req.body
                const user = await User.findOne({_id:uid})
                
                    if(user)
                    {
                        res.json({user:user})
                    }else{
                        res.json({error:"not found"})
                    }
                   
                    }


module.exports = {userSignup,userSignin,getUser}