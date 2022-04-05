const { Router } = require("express")
const fs = require("fs")
const path = require("path")
const cartController = require("../controllers/cartController")

const router = Router()
//const db = JSON.parse(fs.readFileSync(path.join(__dirname,"..","db","carts.json")))
//const products = JSON.parse(fs.readFileSync(path.join(__dirname, "..","db","productos.json")))

const db = fs.readFileSync(path.join(__dirname,"..","db","carts.json"))
//const products = fs.readFileSync(path.join(__dirname, "..","db","productos.json"))

router.post("/", async (req, res) => {
    const respuesta = await cartController.saveCart()
    res.send({cartId: respuesta}) 
})

router.delete("/:id", (req, res) => {
    delete db[req.params.id]
    res.send(db)
})

router.get("/:id/productos", async (req, res) => {
    
    const { id } = req.params
    const productos = await cartController.getCarrito(Number(id))
    productos ? res.send({ productos }) : res.status(404).json({ status: 'carrito no encontrado' })

})

router.post("/:id/productos", async (req, res) => {
    const { id } = req.params
    const { body } = req
    await cartController.saveProdInCart(Number(id), body)
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
    const resultado = await cartController.removeProdInCart(Number(id), Number(id_prod))

    if (!resultado) return res.status(404).send({ status: 'id no encontrado' })

    res.send({ status: `producto ${id} eliminado del carrito` })

})


module.exports = router

