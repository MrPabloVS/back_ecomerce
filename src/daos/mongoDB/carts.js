import mongoose from "mongoose";

const cartsCollection = "productos"

const CartsSchema = new mongoose.Schema({
    _id: {type: String, require: true},
    timestamp: {type: Number, require: true},
    productos: {type: Object, require: true}
})

export const usuarios = mongoose.model(cartsCollection, CartsSchema)