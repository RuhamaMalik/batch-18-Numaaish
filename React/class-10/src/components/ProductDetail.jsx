import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
const {pid} = useParams();
 let [product, setProduct] = useState({});

  let getData = async () => {
    let res = await fetch(`https://dummyjson.com/products/${pid}`);
    let data = await res.json();
    setProduct(data);
    return;
  };

  useEffect(() => {
    getData();

  }, []);
console.log(product);

  return (
    <div>ProductDetail {pid}
    
    <h1>{product.title || 'title'}</h1>
    </div>
  )
}

export default ProductDetail