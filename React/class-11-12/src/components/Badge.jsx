import React, { useContext } from "react";
import { ProductContext } from "../App";

const Badge = () => {
  let product = useContext(ProductContext);

  return (
    <>
      <h1>Badge : "{product.title}"</h1>
      <p>{product.decsription}</p>
      <ul>
        {
            product?.flavours?.map((f,i)=> <li key={i}>{f}</li>)
        }
      </ul>
    </>
  );
};

export default Badge;
