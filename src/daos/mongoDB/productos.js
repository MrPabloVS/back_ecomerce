const mongoose = require("mongoose");

const productosCollection = "productos"

const ProductosSchema = new mongoose.Schema({
    _id: {type: String, require: true},
    nombre: {type: String, require: true},
    descripcion: {type: String, require: true},
    foto: {type: String, require: true},
    timestamp: {type: Number, require: true},
})

//export const usuarios = mongoose.model(productosCollection, ProductosSchema)
const productos = mongoose.model(productosCollection, ProductosSchema)
module.exports =  productos 