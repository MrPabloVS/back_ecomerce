import logo from './logo.svg';
import './App.css';


function App() {

  /* const express = require("express")
  const app = express()
  const port =  3000
  //process.env.PORT 

  const cartRouter = require('./routes/cartRouter')
  const productsRouter = require("./routes/productsRouter")

  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))

  app.listen(port, () => console.log(`Escuchando puerto ${port}`))

  app.use("/api/products", productsRouter)
  app.use("/api/cart", cartRouter) */

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
