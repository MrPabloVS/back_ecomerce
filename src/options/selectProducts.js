const  { options } = require("./mariaDB")
const knex = require("knex")(options)


knex.from("products").select("*")
    .then((rows) => {
        for (const row of rows) {
            console.log(`${row["id"]} ${row["nombre"]} ${row["descripcion"]} ${row["precio"]} ${row["foto"]} ${row["stock"]}`)
        }
    }).catch((err) => {console.log(err); throw err})
      .finally(() => {
          knex.destroy()
      })