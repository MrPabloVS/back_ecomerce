const express = require("express")
const app = express
const port = process.env.PORT || 5000

const cartRouter = require('./routes/cartRouter')
const productsRouter = require("./routes/productsRouter")

app.listen(port, () => console.log(`Escuchando puerto ${port}`))

app.use("/products", productsRouter)
app.use("/cart", cartRouter)