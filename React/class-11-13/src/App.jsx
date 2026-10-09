// import { createContext, useState } from "react";
// import "./App.css";
// import Products from "./components/Products";
// import {
//   Button,
//   Toast,
//   ToastToggle,
// } from "flowbite-react";
// import { HiFire } from "react-icons/hi";

// export let ProductContext = createContext();
// export let ThemeContext = createContext();

// function App() {
//   let [theme, setTheme] = useState(true);
//   const [showToast, setShowToast] = useState(false);

//   let p = {
//     id: 1,
//     title: "Cake",
//     decsription: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//     price: 100,
//     stock: 5,
//     category: "sweets",
//     flavours: ["vanila", "chocolate"],
//   };

//   return (
//     <>

//       <div className="space-y-4">
//         <Button onClick={() => setShowToast((state) => !state)}>
//           Toggle toast
//         </Button>
//         {showToast && (
//           <Toast>
//             <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-100 text-cyan-500 dark:bg-cyan-800 dark:text-cyan-200">
//               <HiFire className="h-5 w-5" />
//             </div>
//             <div className="ml-3 text-sm font-normal">Set yourself free.</div>
//             <ToastToggle onDismiss={() => setShowToast(false)} />
//           </Toast>
//         )}
//       </div>

//       <ThemeContext.Provider value={{ theme, setTheme }}>
//         <ProductContext.Provider value={p}>
//           <div>
//             <h1 className="text-red-700 text-4xl  sm:w-sm  lg:w-lg bg-yellow-300 text-center  ">
//               Home Page
//             </h1>
//             <Products />
//           </div>
//         </ProductContext.Provider>
//       </ThemeContext.Provider>
//     </>
//   );
// }

// export default App;

import React from "react";
import ThemeProvider from "./context/ThemeProvider";
import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import UserProvider from "./context/UserProvider";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </>,
    ),
  );

  return (
   
    <ThemeProvider>
        <RouterProvider router={router} />
   </ThemeProvider>
  );
};

export default App;
