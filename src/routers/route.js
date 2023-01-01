const express = require('express')
const { createSlot } = require('../controllers/slotController')
const router = express.Router()
const { createUser,userLogin, getUserProfile, bookSlot } = require('../controllers/userController')



router.get("/test-me",function(req,res){
    res.send("This is the test Api!!!!!!!!!!!!!!")
})

 //-------------------- user ------------------//
 router.post('/register', createUser)
// router.post('/login',userLogin)
 router.get('/getData',getUserProfile)
 router.put('/slotBook',bookSlot)

 //------------------- Product ----------------//
 router.post('/timeSlot',createSlot)
// router.get('/products',getProductByQuery)
// router.get('/products/:productId',getProductById)
// router.put('/products/:productId',updateProduct)
// router.delete('/products/:productId',deleteProductById)

// //-------------------- Cart ------------------//
// router.post('/users/:userId/cart',authenticationMid,authorizationMid,createCart)
// router.put('/users/:userId/cart',authenticationMid,authorizationMid,updateCart)
// router.get('/users/:userId/cart',authenticationMid,authorizationMid,getCart)
// router.delete('/users/:userId/cart',authenticationMid,authorizationMid,deleteCart)

// //------------------------Order -----------------//
// router.post('/users/:userId/orders',authenticationMid,authorizationMid,createOrder)
// router.put('/users/:userId/orders',authenticationMid,authorizationMid,updateOrder)

//------------------------ error ----------------//
//router.all('/*',(req,res)=>{return res.status(400).send({status:false, message:"pls provide valid path"})})


module.exports = router