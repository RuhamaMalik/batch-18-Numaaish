import React, { useContext } from 'react'
import Card from './Card'
import { ProductContext } from '../App'

const Products = () => {
    let product = useContext(ProductContext)
  return (
   <>
    <h1>Products : "{product.price}"</h1>
    <Card />
   </>
  )
}

export default Products