const express = require('express')
const mongoose = require('mongoose')
const shayariSchema = mongoose.Schema({
    category:{
    
        type:String,
        require:true
    },
    content:{
        type:String,
        require:true
    },
    userid:{
        type:mongoose.Schema.Types.ObjectId,
        require:true
    }
    
    },{timestamps:true})
    
    const Shayari = mongoose.model('shayari', shayariSchema);

    module.exports = Shayari