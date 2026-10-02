 export let getProducts = async () => {
    let res = await fetch("https://dummyjson.com/products");
    let data = await res.json();
   return data;
  };

 export let getProduct = async (params) => {
  console.log(params);
  
    let res = await fetch(`https://dummyjson.com/products/${params.pid}`);
    let data = await res.json();
    return data;
  };