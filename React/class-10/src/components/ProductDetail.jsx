import React, { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

const ProductDetail = () => {
let product = useLoaderData();

  return (
    <div>ProductDetail 
        <h1>{product.title || 'title'}</h1>
    </div>
  )
}

export default ProductDetail