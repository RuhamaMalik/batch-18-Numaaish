// import React from "react";

import Img from "./Img";
import Test from "./Test";

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Hello</h1>
//         <h1>Hello</h1>
//       </div>
//     );
//   }
// }

// export default App;

// ComponentDidMount()  //// create
// ComponentDidUpdate()  //// update
// ComponentWillUnmount()  //// destroy

// /////////////////////////////

//////// COMPOSITION

const App = () => { // HOC 
  return (
    <div>
      <Img />
      <Img />
      <Img />
      <Img />
      <Img />
      <hr />
      <h1>App Component</h1>
      <hr />
      <App2 />
      <hr />
      <App3 />
      <hr/>
      {/* <Test /> */}
    </div>
  );
};

export const App2 = () => {
  return <div>App 2</div>;
};

const App3 = () => {
  return <h1>App 3</h1>;
};

export const App4 = () => {
  return <h1>App 4</h1>;
};

export default App;
