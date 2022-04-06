//import { productController } from "../controllers/productController";

const  productController  = require("../controllers/productController")
const { Router } = require("express");
const router = Router()

const fs = require("fs");
const path = require("path");

const db = JSON.parse(fs.readFileSync(path.join(__dirname, "..","db","productos.json")))

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


router.get('/:id?', async (req, res) => {
    const {id} = req.params

    if (typeof id === 'undefined') {
        const respuesta = await productController.getAll()

        res.send(respuesta)
    }

    const respuesta = await productController.getById(Number(id))
    res.send(respuesta)
})

router.post('/', async (req, res) => {
    const { body } = req
    const newProduct = await productController.saveProduct(body)

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
    await productController.removeById(Number(id))


    res.send({status: `prudcto ${id} eliminado`})
})



module.exports = router