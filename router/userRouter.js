var express = require('express');
const userRouter = express.Router()
const {userSignin,userSignup,getUser} = require('../controller/user')

userRouter.post('/signup',userSignup)

userRouter.post('/signin',userSignin)

userRouter.post('/getuser',getUser)

module.exports = userRouter