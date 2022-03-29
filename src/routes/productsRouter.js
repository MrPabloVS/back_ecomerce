const { Router } = require("express");
const router = Router()

const fs = require("fs")

const db = fs.readFileSync("productos.json")



router.get('/:id?', (request, response) => {
    let respuesta = db

    db.forEach(element => {
        if (request.id === element.id) {
            respuesta = element
        }
    });
    
    response.send(respuesta)
})

router.post('/', (request, response) => {
    if (process.env.ADMIN) {
        let id = db.length + 1
     response.send({
        "title": `Producto ${id}`,
        "id": id,
        "img": "#",
        "price": 123,
        "timeStamp": Date.now(),
        "stock": 123
    })
    }
    
    });

router.put('/:id', (request, response) => {
    if (process.env.ADMIN) {
        
     response.send({
        "title": `Producto ${request.id}`,
        "id": request.id,
        "img": "#",
        "price": 123
    })
    }
    })

router.delete('/:id', (request, response) => {
    response.send(db[request.id])
})



module.exports = router