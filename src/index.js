const express = require('express')
const mongoose = require('mongoose')
const route = require('./routers/route')
//const multer = require('multer')
const app = express()

app.use(express.json())
//app.use(multer().any())


mongoose.set('strictQuery', true);
mongoose.connect("mongodb+srv://ayush8120:GeGo5qhr7wM6VQyg@cluster0.n1nevi5.mongodb.net/Beckend_Project?retryWrites=true&w=majority",{useNewUrlParser:true})
.then(()=>console.log("MongoDB is connected"))
.catch((err)=>console.log(err))

app.use('/',route)


app.use((req, res) => {
    res.status(404).send({ status: false, message: "Url not found" })
})


app.listen(process.env.PORT ||3000,function ()
{console.log("Express app is running on port "+(process.env.PORT ||3000))})