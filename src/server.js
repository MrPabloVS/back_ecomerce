const express = require("express")
const app = express()
const port = process.env.PORT || 3000

const cartRouter = require('./routes/cartRouter')
const productsRouter = require("./routes/productsRouter")

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.listen(port, () => console.log(`Escuchando puerto ${port}`))

app.use("/api/products", productsRouter)
app.use("/api/cart", cartRouter)