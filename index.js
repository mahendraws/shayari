const express = require('express')
const mongoose = require('mongoose')
const cor = require('cors')
const  bodyParser = require('body-parser')
const session = require('express-session')
require('dotenv').config()
const app = express()
app.use(cor({origin:'*'}))
app.use(session({
    secret:"myshayariproject" ,
    resave: true, 
    saveUninitialized: true
    }))
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())



const {User} = require('./model/user.js')
const {Shayari} = require('./model/shayari.js')

const userRouter = require('./router/userRouter.js')
const shayariRouter = require('./router/shayariRouter.js')

app.use('/',userRouter);
app.use('/',shayariRouter);
const port = process.env.PORT || 4000;
mongoose.connect(process.env.DB).then(()=>{


app.get('/',(req,res)=>{
req.session.userid="1234"
res.send("hi")

})

console.log("DB conected");
app.listen(port,()=>{
    console.log("Server started");
})

})


module.exports = session