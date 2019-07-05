const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const restoreSchema = new Schema({
  category     :String,
  name         :String,
  brand        :String,
  price        :Number,
  discount     :Number,
  inStock      :Boolean,
  productImage :String
})

const restore = mongoose.model('restore', restoreSchema);
module.exports = restore;