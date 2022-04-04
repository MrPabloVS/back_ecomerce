const { Router } = require("express");
const router = Router()

const fs = require("fs");
const path = require("path");

const db = JSON.parse(fs.readFileSync(path.join(__dirname, "..","db","productos.json")))

const temporal = {
    "id": db.length + 1,
    "nombre": "zapatos",
    "descripcion": "zapatos",
    "codigo": "123456",
    "foto": "http://foto.com",
    "precio": 150,
    "stock": 25,
    "timestamp": 1648515364352
  }


router.get('/:id?', (request, response) => {
    let respuesta = db

    // db.forEach(element => {
    //     if (request.params.id === element.id) {
    //         respuesta = element
    //     }
    // });

    for (const i of db) {
        if (i.id === request.params.id) {
            respuesta.push(i)
            
        }
    }

    //const respuesta =  db.find((i) => i.id === request.params.id)  

    //response.status(200).json(respuesta)
    response.send(respuesta)
})

router.post('/', (request, response) => {
    if (process.env.ADMIN) {
        fs.writeFileSync(db.append(temporal))
    
    }
     response.send(db)
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
    delete db[request.params.id]
    response.send(db)
})



module.exports = router