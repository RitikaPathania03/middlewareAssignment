const { count } = require("console")
const orderModel= require("../models/orderModel")


const createOrder= async function (req,res){
    let getOrderData=req.body
    let freeUser= req.isFreeAppUser
    res.send({msg:getOrderData})
}
module.exports.createOrder=createOrder