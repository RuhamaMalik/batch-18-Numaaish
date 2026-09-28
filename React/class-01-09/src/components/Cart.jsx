import React from 'react'
import Button from './Button'

const Cart = () => {
  let title = 'Checkout';
  return (
  <>
  <li>Shoes</li>
  <li>Laptop  </li>
  <Button myTitle={title} />
  </>
  )
}

export default Cart