const route = require('express').Router();
const product = require('../database/models/product');
const restore = require('../database/models/restore');
const dbApi = require('../database/dbApi');
const productDbFunction = new dbApi(product);
const restoreDbFunction = new dbApi(restore);

route.get('/', (req, res) => {
  productDbFunction.getData()
    .then(data => res.send(data))
    .catch(e => console.log('error :', e))
})

route.post('/', (req, res) => {
  console.log(req.body)
  productDbFunction.addCollections(req.body)
    .then(data => res.send(data))
    .catch(e => console.log('error :', e))
})

route.post('/:_id', (req, res) => {
  productDbFunction.updateOneRow(req.params, req.body)
    .then(data => res.send(data))
    .catch(e => console.log('error :', e));
})

async function addToRestore(id) {
  let pro={}, newPro={};
  await productDbFunction.getData(id)
          .then(data => pro=data)
          .catch(e => console.log(e))
  pro=pro[0];
  newPro = { 
          category: pro.category,
          name: pro.name,
          brand: pro.brand,
          price: pro.price,
          discount: pro.discount,
          inStock: pro.inStock 
        }
  restoreDbFunction.addCollections(newPro)
    .then(data => console.log('data :', data))
    .catch(e => console.log('error :', e))
}

route.delete('/:_id', async (req, res) => {
  await addToRestore(req.params)
  productDbFunction.deleteOneRow(req.params)
    .then(data => res.send(data))
    .catch(e => console.log('error :', e));
})

module.exports= route;