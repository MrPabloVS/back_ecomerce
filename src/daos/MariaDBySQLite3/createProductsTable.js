const  { options } = require("./mariaDB")
const knex = require("knex")(options)

knex.schema.createTable('products', table => {
    table.increments("id")
    table.string("nombre")
    table.string("descripcion")
    table.string("foto")
    table.integer("precio")
    table.integer("stock")

})
    .then(() => console.log("tabla creada"))
    .catch((err) => {console.log(err); throw err})
    .finally(() => {
        knex.destroy()
    })