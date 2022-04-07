const  { options } = require("./SQLite3")
const knex = require("knex")(options)

const carts = [
    {id:2,cart_timestamp:1648519753180,productos:[]},
    {id:1,cart_timestamp:1648515491537,productos:[{"id":1,"nombre":"zapatillas","descripcion":"zapatillas","codigo":"123456","foto":"http://foto.com","precio":150,"stock":25,"timestamp":1648515341429}]},
    {id:4,cart_timestamp:1649199181618,productos:[]},
    {id:3,cart_timestamp:1649198457458,productos:[{"id":1},{"id":1}]}
]


knex("carts").insert(carts)
.then(() => console.log("data insertada"))
.catch((err) => { console.log(err); throw err})
.finally(() => {
    knex.destroy()
})