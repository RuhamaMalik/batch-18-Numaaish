// import { useEffect, useState } from "react";

import { useEffect, useState } from "react";

// const UseEffectHook = () => {
//   let [count, setCount] = useState(0);
//   let [count2, setCount2] = useState(0);

//   useEffect(() => {
//     console.log("hello");
//   },[count]);

//   useEffect(() => {
//     console.log("hi");
//   },[count2]);

//   return (
//     <>
//       <h1>Count1 : {count}</h1>
//       <button onClick={() => setCount((c) => c + 1)}>Update</button>
//       <hr />
//       <h1>Count2 : {count2}</h1>
//       <button onClick={() => setCount2((c) => c + 1)}>Update</button>
//     </>
//   );
// };

// export default UseEffectHook;

const UseEffectHook = () => {
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

  console.log(products);

  return (
    <>
      {products?.map((product, i) => (
        <div key={product?.id + i}>
          <h1> {product?.title}</h1>
          <p>{product.description}</p>
          <hr />
        </div>
      ))}
    </>
  );
};

export default UseEffectHook;
