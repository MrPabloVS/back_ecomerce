const { Router } = require("express");
const router = Router()

const fs = require("fs");
const path = require("path");

const db = JSON.parse(fs.readFileSync(path.join(__dirname, "..","db","products.json")))



router.get('/:id?', (request, response) => {
    let respuesta = db

    db.forEach(element => {
        if (request.params.id === element.id) {
            respuesta = element
        }
    });

      
    response.status(200).json(respuesta)
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
        "title": `Producto ${request.params.id}`,
        "id": request.params.id,
        "img": "#",
        "price": 123
    })
    }
    })

router.delete('/:id', (request, response) => {
    response.send(db[request.params.id])
})



module.exports = router