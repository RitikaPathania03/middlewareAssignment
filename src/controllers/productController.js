const { count } = require("console")
const productModel= require("../models/productModel")

let addProductData= await productModel.create(getProductData)
res.send({msg:addProductData})

module.exports.addProductData=addProductData