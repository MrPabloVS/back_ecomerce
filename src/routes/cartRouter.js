const { Router } = require("express")
const fs = require("fs")

const router = Router()
const db = fs.readFileSync("carts.json")
const products = fs.readFileSync("products.json")

router.post("/", (req, res) => {
    db.push({id: db.length + 1})

    res.send(db.length + 1)
})

router.delete("/:id", (req, res) => {
    delete db[req.id]
})

router.get("/:id/productos", (req, res) => {
    res.send(db[req.id])
})

router.post("/:id/productos", (req, res) => {
    db[req.id].push(products)
})

router.delete("/:id/productos/:id_prod", (req, res) => {
    db[req.id].forEach(element => {
        if (element === req.id_prod) {
         element = []
        }
    });
})


module.exports = router

