import mongoose from "mongoose";
import carts from "./carts"
import productos from "./productos"

mongoose.connect("mongodb+srv://pepe:asd123@cluster0.ieeft.mongodb.net/productos?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true
},err => {
    if(err) throw new Error("Error al conectarse a mongo atlas")
    console.log("Conectado a mongo atlas")
})



// * Productos CRUD

//Create
let productosSave = await productos.save()
console.log(productosSave)

//Read all
let productosReadAll = await productos
console.log(productosReadAll)

//Update
let productosUpdate = await productos.updateOne( {nombre: "playstation"}, {$set: {timestamp: Date.now()}})
console.log(productosUpdate)

//Read
let productosRead = await productos.find({nombre: "playstation"})
console.log(productosRead)

//Delete
let productosDelete = await productos.deleteOne( {nombre: "playstation"})
console.log(productosDelete)

//Create
await new productos({   _id: "625f19e2cdc91c8a2b3cb267", 
                        nombre: "playstation", 
                        descripcion: "playstation", 
                        foto: "http://foto.com", 
                        timestamp: Date.now()})


// * Carts CRUD

//Create
let cartsSave = await carts.save()
console.log(cartsSave)

//Read all
let cartsReadAll = await carts
console.log(cartsReadAll)

//Update
let cartsUpdate = await carts.updateOne( {timestamp: 7088411422568218630}, {$set: {timestamp: Date.now()}})
console.log(cartsUpdate)

//Read
let cartsRead = await carts.find({timestamp: Date.now()})
console.log(cartsRead)

//Delete
let cartsDelete = await carts.deleteOne( {timestamp: Date.now()})
console.log(cartsDelete)

//Create
await new carts({   _id: "625f1806cdc91c8a2b3cb265",
    timestamp: Date.now(),
    productos: []})