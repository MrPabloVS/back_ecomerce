const { Router } = require("express")
const fs = require("fs")
const path = require("path")
const cartController = require("../controllers/cartController")
const router = Router()
//const db = JSON.parse(fs.readFileSync(path.join(__dirname,"..","db","carts.json")))
//const products = JSON.parse(fs.readFileSync(path.join(__dirname, "..","db","productos.json")))
//const db = fs.readFileSync(path.join(__dirname,"..","db","carts.json"))
//const products = fs.readFileSync(path.join(__dirname, "..","db","productos.json"))
const mongoose = require("mongoose")
const cartsModel = require("../daos/mongoDB/carts")
const db = require("../configs/mongoConfig")


//db.connection()

/* mongoose.connect("mongodb+srv://pepe:asd123@cluster0.ieeft.mongodb.net/carts?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true
},err => {
    if(err) throw new Error("Error al conectarse a mongo atlas")
    console.log("Conectado a mongo atlas carts")}) */

router.post("/", async (req, res) => {
    //const respuesta = await cartController.saveCart()

    const { body } = req
    const newProduct = await new cartsModel({body})
    newProduct.save()

    res.send({cartId: body.id}) 
})

router.delete("/:id", async (req, res) => {
    //delete db[req.params.id + 1]
    //res.send(db)

    const { id } = req.params
    await cartsModel.deleteOne( {_id: id})
})

router.get("/:id/productos", async (req, res) => {
    
    const { id } = req.params
    const productos = await cartsModel.find({_id: id}) //cartController.getCarrito(Number(id))
    res.send(productos)
})

router.post("/:id/productos", async (req, res) => {
    const { id } = req.params
    const { body } = req
    await cartsModel.updateOne( {_id: id}, {$set: {productos: body}})
     //cartController.saveProdInCart(Number(id), body)
    res.send({ status:` producto ${id} agregado a carrito` })
})

router.delete("/:id/productos/:id_prod", async (req, res) => {
    // db[req.params.id].forEach(element => {
    //     if (element === req.params.id_prod) {
    //      element = []
    //     }
    // });
    // res.send(db)

    const { id, id_prod } = req.params
    const resultado =  await cartsModel.deleteOne( {_id: id}, {productos: {_id:id}}) //cartController.removeProdInCart(Number(id), Number(id_prod))

    if (!resultado) return res.status(404).send({ status: 'id no encontrado' })

    res.send({ status: `producto ${id} eliminado del carrito` })

})


module.exports = router

