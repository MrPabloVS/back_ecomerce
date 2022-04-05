const fs = require("fs-extra")
const path = require("path")


class CartController {
    constructor(db) {
      this.db = db
    }
  
    async saveCart() {
      const content = await fs.readJSON(this.db)
      const ids = content.map((p) => p.id)
      const newId = Math.max(...ids) + 1
      const cart_timestamp = Date.now()
  
      const newCart = { id: newId, cart_timestamp, productos: [] }
      content.push(newCart)
  
      await fs.writeJSON(this.db, content)
  
      return newId
    }
  
    async getCarrito(id) {
      const content = await fs.readJSON(this.db)
      const cart = content.find((c) => c.id === id)
      if (!cart) return null
  
      return cart.productos
    }
  
    async removeCart(id) {
      const content = await fs.readJSON(this.db)
      const newContent = content.filter((c) => c.id !== id)
  
      await fs.writeJSON(this.db, newContent)
    }
  
    async saveProdInCart(id, data) {
      const content = await fs.readJSON(this.db)
  
      const cart = content.find((c) => c.id === id)
      cart.productos.push(data)
  
      const contentFiltered = content.filter((c) => c.id !== id)
      contentFiltered.push(cart)
  
      await fs.writeJSON(this.db, contentFiltered)
    }
  
    async removeProdInCart(id, id_prod) {
      const content = await fs.readJSON(this.db)
      const cart = content.find((c) => c.id === id)
      if (!cart) return null
  
      const newProductos = cart.productos.filter((p) => p.id !== id_prod)
      cart.productos = newProductos
  
      const contentFiltered = content.filter((c) => c.id !== id)
      contentFiltered.push(cart)
  
      await fs.writeJSON(this.db, contentFiltered)
  
      return true
    }
  }



  const cartController = new CartController(path.join(__dirname, "..","db","carts.json"))

   module.exports = cartController