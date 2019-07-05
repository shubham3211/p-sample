const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/e-comerce');
mongoose.Promise = global.Promise;
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const routes = {
  product: require('./routes/product')
}
app.use('/product', routes.product);
app.listen(5000, () => console.log('listening on port 5000'));
// It was written in the mail that I cannot use multer so assuming image is encoded to base64