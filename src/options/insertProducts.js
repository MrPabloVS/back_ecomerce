const  { options } = require("./mariaDB")
const knex = require("knex")(options)

const products = [
    {id:2,nombre:"playstation",descripcion:"playstation", foto:"http://foto.com",precio:220,stock:30},
    {id:4,nombre:"procesador",descripcion:"procesador",foto:"http://foto.com",precio:750,stock:15},
    {id:5,nombre:"Café2",descriction:"Café capuchino2",precio:500,stock:500, foto:"http://foto.com"}
]


knex("products").insert(products)
.then(() => console.log("data insertada"))
.catch((err) => { console.log(err); throw err})
.finally(() => {
    knex.destroy()
})