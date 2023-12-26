const express=require('express')
const app=express()
const mongoose = require('./config/config');
mongoose()

const userRoutes=require("./routes/userRoutes")
const adminRoutes=require("./routes/adminRoutes");
const commonRoutes = require('./routes/mainRouter')
app.set('view engine', 'ejs');


app.use('/admin',adminRoutes)
app.use('/',commonRoutes)
app.use('/',userRoutes)
 

app.listen(3000,(req,res)=>{
    console.log("server started");
})