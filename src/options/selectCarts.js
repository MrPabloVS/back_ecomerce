const  { options } = require("./SQLite3")
const knex = require("knex")(options)


knex.from("carts").select("*")
    .then((rows) => {
        for (const row of rows) {
            console.log(`${row["id"]} ${row["cart_timestamp"]} ${row["productos"]} `)
        }
    }).catch((err) => {console.log(err); throw err})
      .finally(() => {
          knex.destroy()
      })