const mongoose =require('mongoose')
const productSchema = new mongoose.Schema({
    productName:{
        type:String,
        required:true
    },
    productDescription:{
        type:String,
    },
    productPrice:{
        type:Number,
        required:true
    },
    productQuantity:{
         type:Number,
         required:true
    },
    imageUrl:{
        type:String,
    }
});
const productModel = new mongoose.model("productData", productSchema);
module.exports = productModel;
