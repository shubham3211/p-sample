const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  category     :String,
  name         :String,
  brand        :String,
  price        :Number,
  discount     :Number,
  inStock      :Boolean,
  productImage :String
  // It was written in the mail that I cannot use multer so assuming image is encoded to base64
})

const product = mongoose.model('product', productSchema);
module.exports = product;