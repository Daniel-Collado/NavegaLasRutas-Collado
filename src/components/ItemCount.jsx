import { useState, useEffect } from 'react'


function ItemCount() {
  const [count, setCount] = useState(0)

  const handleAdd = () => {
    setCount(count + 1)
  }

  const handleRestar = () => {
    setCount(count - 1)
  }
  return (
    <>
      <p>{count}</p>
      <button onClick={handleAdd}>+</button>
      <button onClick={handleRestar}>-</button>
    </>
  )

}

export default ItemCount