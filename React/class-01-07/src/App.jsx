// import React from "react";

import Main from "./components/hook/Main";

// import Main from "./styling/Main";

// import Cart from "./components/Cart";
// import Card from "./components/Card";
// import Counter from "./components/Counter";

// import React from "react";
// import Button from "./components/Button";
// import Img from "./Img";

// import Img from "./Img";
// import Test from "./Test";

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

// const App = () => { // HOC
//   return (
//     <div>
//       <Img />
//       <Img />
//       <Img />
//       <Img />
//       <Img />
//       <hr />
//       <h1>App Component</h1>
//       <hr />
//       <App2 />
//       <hr />
//       <App3 />
//       <hr/>
//       {/* <Test /> */}
//     </div>
//   );
// };

// export const App2 = () => {
//   return <div>App 2</div>;
// };

// const App3 = () => {
//   return <h1>App 3</h1>;
// };

// export const App4 = () => {
//   return <h1>App 4</h1>;
// };

// export default App;

// ////////////////////////////////////////// class 03

// const App = () => {
//   return (
//     <React.Fragment>
//       <h1>Lorem, ipsum dolor.</h1>
//       <p>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, tempora
//         fugiat quasi sed nemo velit dolorum temporibus reprehenderit, laboriosam
//         voluptas eum ea dicta quisquam earum voluptates eos, quam dignissimos
//         maiores.
//       </p>
//     </React.Fragment>
//   );
// };

// const App = () => {
//   let username = "Ruhama";

//   return (
//     <>
//       <Img />

//       <h1>Lorem, ipsum dolor. {username + "Gull"} </h1>
//       <Button myTitle="Abcd" second="hello" />
//       <Button myTitle="SignUp" second="hello" />
//       <Button myTitle="SignIn" />
//       <Button myTitle="SignIn" />
//       <Button myTitle="SignIn" />

//       <h1>AAJ SE AAP ALAG HEN</h1>

//       <Button myTitle="SignIn" />
//       <Button myTitle="SignIn" />
//       <Button myTitle="SignIn" />
//       <Button myTitle="SignIn" />
//       <Button myTitle="SignIn" />
//       <Button myTitle="SignIn" />
//       <Button myTitle="SignIn" />
//       <Button myTitle="SignIn" />
//       <Button myTitle="SignIn" />
//       <Button myTitle="Order Now" />
//       <Button myTitle="Add to cart" />
//       <Button />
//       <p>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, tempora
//         fugiat quasi sed nemo velit dolorum temporibus reprehenderit, laboriosam
//         voluptas eum ea dicta quisquam earum voluptates eos, quam dignissimos
//         maiores.
//       </p>
//     </>
//   );
// };

// export default App;

// /////////////////////////////

const App = () => {

  // let data = {
  //   title: "Shoes",
  //   price: 100,
  //   desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  // };

  return (
    <>
      {/* <Card product={data} isActive={true} /> */}

      {/* <Card {...data} isActive={true} /> */}
      {/* <Card {...{...data, isActive:true}}  />
      <Card />
      <Card />
      <Card />
      <Card /> */}

      {/* <Cart /> */}



      {/* <Counter /> */}



{/* <Main /> */}

<Main />

    </>
  );
};

export default App;
