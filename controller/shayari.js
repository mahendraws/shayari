const Shayari = require('../model/shayari')

const getShyari = async (req,res)=>{

    const {uid} = req.body
       const shayari = await Shayari.find({userid:uid})

       //console.log(req.session.userid)
       if(shayari){
        res.send(shayari)
       }else{
        res.send("Record not found")
       }


}

const createShayari = async(req,res)=>{

    const {category,content,uid} = req.body

    const shayari = await Shayari.create({category:category,content:content,userid:uid})

    if(shayari){
        res.send(shayari)
    }else{
        res.send("not added")
    }

}

const deleteShayari = async(req,res)=>{
    const {sid} = req.body
    
       const shayari= await Shayari.deleteOne({_id:sid})
        if(shayari){
            res.send({status:"Success",shayari:shayari})
        }else{
            res.send({error:"Record not found"})
        }
    
    }

    const updateShayari = async(req,res)=>{
        const {sid,category,content} = req.body
        
        const shayari = await Shayari.updateOne({_id:sid},{category:category,content:content})
        if(shayari){
            res.send("Record updated")
        }else{
            res.send("record not updated")
        }
        
        }


    module.exports = {getShyari,createShayari,updateShayari,deleteShayari}