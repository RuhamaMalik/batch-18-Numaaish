import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import PageNotFound from "./PageNotFound";
import Header from "./Header";
import Products from "./Products";
import ProductDetail from "./ProductDetail";

const Main = () => {
  return (
    <>
    <Header/>
    <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/about"  element={<About/>} />
        <Route path="/contact-page"  element={<Contact/>} />
        <Route path="/products"  element={<Products />} />
        <Route path="/products/:pid"  element={<ProductDetail />} />
        <Route path="*"  element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default Main;
