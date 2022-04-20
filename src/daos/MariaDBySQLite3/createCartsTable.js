const  { options } = require("./SQLite3")
const knex = require("knex")(options)

knex.schema.createTable('carts', table => {
    table.increments("id")
    table.integer("cart_timestamp")
    table.json("productos")

})
    .then(() => console.log("tabla creada"))
    .catch((err) => {console.log(err); throw err})
    .finally(() => {
        knex.destroy()
    })