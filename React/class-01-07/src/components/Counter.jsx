// import React, { useState } from "react";

// const Counter = () => {

//   let count = 0;
//   const updateCount = () => {
//     count++;
//     console.log("Count : ", count);
//   };

//   return (
//     <>
//       <h1>Count : {count}</h1>
//       <button onClick={updateCount}>Update</button>
//     </>
//   );
// };

const Counter = () => {
  // const [initialState, setStateFunction] = useState(initialValue);

  let [count, setCount] = useState(10);

  const updateCount = () => {
    setCount(count - 1);
};

console.log("Count : ", count);

  return (
    <>
      <h1>Count : {count}</h1>
      <button onClick={updateCount}>Update</button>
    </>
  );
};

export default Counter;



