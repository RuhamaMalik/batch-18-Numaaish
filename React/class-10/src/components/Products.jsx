import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Products = () => {
   let [products, setProducts] = useState([]);

  let getData = async () => {
    let res = await fetch("https://dummyjson.com/products");
    let data = await res.json();
    setProducts(data.products);
    return;
  };

  useEffect(() => {
    getData();

  }, []);


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