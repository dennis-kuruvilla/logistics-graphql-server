const mongoose = require('mongoose')
require('dotenv').config();

//create .env file and declare MONGODB_URI for it to work
const url = process.env.MONGODB_URI
console.log('connecting to', url)
console.log('--------------------')

mongoose.connect(url)
  .then(result => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)

  })

  //transform the objects returnd from db into string and delete unwanted fields
const shipmentSchema = new mongoose.Schema({
  age: String,
  fromAddr: String,
  toAddr: String,
  toWSLR: String,
  distance: String,
  Products: [{   
      ProductDetails: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
      },
      RequiredQuantity:  String,
  }],
  carrier: String,
  toCord: { lat: Number, lng: Number },
  fromCord: { lat: Number, lng: Number },
  creationTime: String



})

const productSchema = new mongoose.Schema({
  id: Number,
  name: String,
  description: String,
  price: Number,
  quantity: Number
})

productSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.objId = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

Product = mongoose.model('Product', productSchema)

Shipment = mongoose.model('Shipment', shipmentSchema)

// shipmentSchema.set('toJSON', {
//   transform: (document, returnedObject) => {
//     returnedObject.objId = returnedObject._id.toString()
//     delete returnedObject._id
//     delete returnedObject.__v
//   }
// })

module.exports = {Product,Shipment}