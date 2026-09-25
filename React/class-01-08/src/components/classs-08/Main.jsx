import { useState } from "react";
// import ComponentA from "./ComponentA";
// import ComponentB from "./ComponentB";
import Form from "./FORM/Form";

const Main = () => {
  let [count, setCount] = useState(0);
  return (
    <>
      {/* {process.env.REACT_APP_CLOUD_NAME}
    {process.env.REACT_APP_PRESET} */}
      {/* <h1>Parent Component</h1>
      <ComponentA data={count} setCount={setCount} />
      <ComponentB data={count} /> */}


      <Form />
    </>
  );
};

export default Main;
