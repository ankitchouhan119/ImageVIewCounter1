const mongoose = require('mongoose')
const { Schema } = mongoose;
const ProductSchema = new Schema({
    product_name:{
        type : String,
        
    },

    description : {
        type : String,

    },
    image:{
        type : String,
    },

    imageID :{
         type : String,
         unique : true,
    },

    views: {
        type: Number,
        default: 0, // Initial view count is 0
      },
    
   
    
  }); 
  const Product = mongoose.model('product',ProductSchema);
//   User.createIndexes();
  module.exports = Product;