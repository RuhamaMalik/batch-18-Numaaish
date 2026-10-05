import { createContext, useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import Products from "./components/Products";

export let ProductContext = createContext();
export let ThemeContext = createContext();

function App() {
  let [theme, setTheme] = useState(true);

  let p = {
    id: 1,
    title: "Cake",
    decsription: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 100,
    stock: 5,
    category: "sweets",
    flavours: ["vanila", "chocolate"],
  };

  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <ProductContext.Provider value={p}>
          <div>
            <h1>Home Page</h1>
            <Products />
          </div>

      

        </ProductContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
