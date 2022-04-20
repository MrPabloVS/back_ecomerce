const mongoose = require("mongoose")


const cartsCollection = "carts"

const CartsSchema = new mongoose.Schema({
    _id: {type: String, require: true},
    timestamp: {type: Number, require: true},
    productos: {type: Object, require: true}
})

 const carts = mongoose.model(cartsCollection, CartsSchema)
module.exports = carts