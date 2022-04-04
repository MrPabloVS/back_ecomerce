const { Router } = require("express")
const fs = require("fs")
const path = require("path")

const router = Router()
//const db = JSON.parse(fs.readFileSync(path.join(__dirname,"..","db","carts.json")))
//const products = JSON.parse(fs.readFileSync(path.join(__dirname, "..","db","productos.json")))

const db = fs.readFileSync(path.join(__dirname,"..","db","carts.json"))
const products = fs.readFileSync(path.join(__dirname, "..","db","productos.json"))

router.post("/", (req, res) => {
    db.push({id: db.length + 1})

    let respuesta = db
    res.status(200).json(respuesta)
    res.send(db)
})

router.delete("/:id", (req, res) => {
    delete db[req.params.id]
    res.send(db)
})

router.get("/:id/productos", (req, res) => {
    res.send(db[req.params.id])
})

router.post("/:id/productos", (req, res) => {
    db[req.params.id].push(products)
    res.send(db)
})

router.delete("/:id/productos/:id_prod", (req, res) => {
    db[req.params.id].forEach(element => {
        if (element === req.params.id_prod) {
         element = []
        }
    });
    res.send(db)
})


module.exports = router

