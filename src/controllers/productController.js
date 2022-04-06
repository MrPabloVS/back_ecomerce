const fs = require("fs-extra")
const path = require("path")

class ProductController {
    constructor(db) {
      this.db = db
    }
    async saveProduct(data) {
      const content = await fs.readJSON(this.db)
      const ids = content.map((p) => p.id)
      const newId = Math.max(...ids) + 1
      const timestamp = Date.now()
      const newProduct = { id: newId, timestamp, ...data }
      content.push(newProduct)
  
      await fs.writeJSON(this.db, content)
      return newProduct
    }
  
    async getAll() {
      try {
        const content = await fs.readJSON(this.db)
        return content
      } catch (error) {
        console.log(error)
      }
    }
  
    async getById(id) {
      const content = await fs.readJSON(this.db)
      const product = await content.find((p) => p.id === id)
      if (typeof product === 'undefined') return null
  
      return product
    }
  
    async updateById(id, data) {
      const fileContent = await fs.readJSON(this.db)
      const producto = fileContent.map((p) => (p.id === id ? { id: p.id, ...data } : p))
  
      await fs.writeJSON(this.db, producto)
    }
    async removeById(id) {
      const content = await fs.readJSON(this.db)
      const newContent = content.filter((p) => p.id !== id)
  
      await fs.writeJSON(this.db, newContent)
    }
  }


   const productController = new ProductController(path.join(__dirname, "..","db","productos.json"))

   module.exports = productController