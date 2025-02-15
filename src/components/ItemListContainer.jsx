import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const { categoryId } = useParams()
  const [productos, setProductos] = useState([])

  useEffect(() => {
    const url = categoryId
      ? `https://fakestoreapi.com/products/category/${categoryId}`
      : "https://fakestoreapi.com/products";
  
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProductos(data))
      .catch((error) => console.error("Error al obtener los productos:", error))
  }, [categoryId])
  
  return (
      <div>
          <ItemList items={productos} />
      </div>
  )
}

export default ItemListContainer
