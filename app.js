const express=require('express')
const app=express()
const mongoose = require('./config/config');
const bodyParser = require('body-parser')
var session =require('express-session')
const userRoutes=require("./routes/userRoutes")
const adminRoutes=require("./routes/adminRoutes");
const commonRoutes = require('./routes/mainRouter')
const dotEnv = require("dotenv");
dotEnv.config();
mongoose()

app.set('view engine', 'ejs');
// 
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  }))

app.use('/admin',adminRoutes)
app.use('/',commonRoutes)
app.use('/',userRoutes)


app.listen(3000,(req,res)=>{
    console.log("server started");
})