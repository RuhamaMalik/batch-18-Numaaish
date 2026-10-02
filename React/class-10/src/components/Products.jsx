import React, { useEffect, useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom';

const Products = () => {
 const {products} =useLoaderData();
  return (
    <>
      {products?.map((product, i) => (
        <div key={product?.id + i}>
          <h1> {product?.title}</h1>
          <p>{product.description}</p>
          <Link to={`/products/${product?.id}`} >Read More</Link>
          <hr />
        </div>
      ))}
    </>
  );
}

export default Products