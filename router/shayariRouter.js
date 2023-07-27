var express = require('express');
const shayariRouter = express.Router()
const {getShyari,createShayari,deleteShayari,updateShayari} = require('../controller/shayari')

shayariRouter.post('/shayari',getShyari)

shayariRouter.put('/shayari',createShayari)

shayariRouter.delete('/shayari',deleteShayari)

shayariRouter.patch('/shayari',updateShayari)

module.exports = shayariRouter