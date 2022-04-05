const express = require("express")
const app = express()
const port = 8000 //process.env.PORT || 5000

const cartRouter = require('./routes/cartRouter')
const productsRouter = require("./routes/productsRouter")

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.listen(port, () => console.log(`Escuchando puerto ${port}`))

app.get('/express_backend', (req, res) => { 
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); 
  });

app.use("/api/productos", productsRouter)
app.use("/api/carrito", cartRouter)