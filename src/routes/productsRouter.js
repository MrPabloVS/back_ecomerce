//import { productController } from "../controllers/productController";
const mongoose = require("mongoose")
const  productController  = require("../controllers/productController")
const { Router } = require("express");
const router = Router()
const productosModel = require("../daos/mongoDB/productos")
const db = require("../configs/mongoConfig")


//db.connection()
//const fs = require("fs");
//const path = require("path");

//const db = JSON.parse(fs.readFileSync(path.join(__dirname, "..","db","productos.json")))

/* const temporal = {
    "id": db.length + 1,
    "nombre": "zapatos",
    "descripcion": "zapatos",
    "codigo": "123456",
    "foto": "http://foto.com",
    "precio": 150,
    "stock": 25,
    "timestamp": 1648515364352
  } */

 /*  mongoose.connect("mongodb+srv://pepe:asd123@cluster0.ieeft.mongodb.net/productos?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true
},err => {
    if(err) throw new Error("Error al conectarse a mongo atlas")
    console.log("Conectado a mongo atlas productos")
}) */


router.get('/:id?', async (req, res) => {
    const {id} = req.params

    if (typeof id === 'undefined') {
        const respuesta = await productosModel.find({}) //productController.getAll()
        res.send(respuesta)
    }

    const respuesta = await productosModel.find({_id: id}) //productController.getById(Number(id))
    res.send(respuesta)
})

router.post('/', async (req, res) => {
    const { body } = req
    const newProduct = await new productosModel({body})//productController.saveProduct(body)
    newProduct.save()

    res.send({ status: 'producto agregado', newProduct })
    });

router.put('/:id', (request, response) => {
    if (process.env.ADMIN) {
        
     response.send({
        "title": `Producto ${request.params.id}`,
        "id": request.params.id,
        "img": "#",
        "price": 123
    })
    }
    })

router.delete('/:id', async (req, res) => {
    //delete db[request.params.id +1]
    const { id } = req.params
    await productosModel.deleteOne( {_id: id})//productController.removeById(Number(id))


    res.send({status: `prudcto ${id} eliminado`})
})

router.get("/mongoose", async (req, res) => {
    res.send(productosModel.find({}))
})



module.exports = router