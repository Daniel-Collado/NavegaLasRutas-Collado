import NavBar from './components/NavBar'
import { useState } from "react"
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import { Route, Routes } from "react-router-dom"
import './App.css'

function App() {
  const [cantidadEnCarrito, setCantidadEnCarrito] = useState(5)
  
  return (
    <>
      <NavBar cantidadEnCarrito={cantidadEnCarrito} />
      <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
      </Routes>    
    </>
  )
}

export default App
