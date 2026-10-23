// ///////////////////////////////////////// useMemo

import { useCallback, useState } from "react";
import Child from "./component/Child";
import Products from "./component/Products";
import Recipies from "./component/Recipies";

// import { useMemo, useState } from "react";
// import Form from "./component/Form";
// import Lists from "./component/Lists";

// function App() {
//   let [count, setCount] = useState(0);
//   let [minus, setMinus] = useState(1000);

//   let multiply = useMemo(() => {
//     console.log("-----------------------");
//     return count * 10;
//   },[count]);

//   return (
//     <>
//       <h1>{multiply}</h1>

//       <hr />
//       <h1>Count : {count}</h1>
//       <button onClick={() => setCount(count + 1)}>Add Count</button>
//       <h1>Minus : {minus}</h1>
//       <button onClick={() => setMinus(minus - 1)}>Decrease</button>
//     </>
//   );
// }

// export default App;

// ///////////////////////////////////////// React.memo

// const App = () => {
//   let [count, setCount] = useState(0);
//   let [count2, setCount2] = useState(0);

//   let myFunc = useCallback(() => {
//     ////
//   },[count2, count]);

//   let myFunc2 = useCallback(() => {
//     ////
//   },[count2]);

//   return (
//     <>
//       <Child count={count} func={myFunc} />

//       <h1>Count : {count}</h1>
//       <button onClick={() => setCount(count + 1)}>Add Count</button>

//       <hr />
//       <h1>Count2 : {count2}</h1>
//       <button onClick={() => setCount2(count2 + 1)}>Add Count2</button>
//     </>
//   );
// };

// export default App;

const App = () => {
  return (
    <>
      {/* <Products /> */}
      <Recipies />
    </>
  );
};

export default App;
