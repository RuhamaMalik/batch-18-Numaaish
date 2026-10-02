import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import PageNotFound from "./components/PageNotFound";
import Header from "./components/Header";
import Products from "./components/Products";
import ProductDetail from "./components/ProductDetail";
import Layout from "./components/Layout";
import SignUp from "./components/SignUp";
import Admin from "./components/Admin";
import "./App.css";
import { getProduct, getProducts } from "./services/productsServices";

function App() {
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Layout />,
  //     children: [
  //       {
  //         path: "about",
  //         element: <About />,
  //       },
  //       {
  //         path: "/",
  //         element: <Home />,
  //       },

  //       {
  //         path: "contact",
  //         element: <Contact />,
  //       },
  //       {
  //         // path: "contact",
  //         index:true,
  //         element: <Contact />,
  //       },
  //       {
  //         path: "products",
  //         element: <Products />,
  //       },
  //       {
  //         path: "*",
  //         element: <PageNotFound />,
  //       },
  //     ],
  //   },

  //   {
  //     path: "/signup",
  //     element: <SignUp />,
  //   },

  //   {
  //     path: "/admin",
  //     element: <Admin />,
  //     children: [
  //       { path: "users", element: <h1>All Users</h1> },
  //       { path: "orders", element: <h1>All Orders</h1> },
  //     ],
  //   },

  //   {
  //     path: "/user",
  //     element: <><h1>User Dashboard</h1> <Outlet/></>,
  //     children: [
  //       { path: "wishlist", element: <h1>uSER Wishlist</h1> },
  //       { path: "orders", element: <h1>User Orders</h1> },
  //       { path: "profile", element: <h1>My Profile</h1> },
  //     ],
  //   },
  // ]);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />

          <Route
            loader={getProducts}
            errorElement={<h1>ERROR..............</h1>}
            path="products"
            element={<Products />}
          />

          <Route
            loader={({params})=>getProduct(params)}
            errorElement={<h1>ERROR..............</h1>}
            path="products/:pid"
            element={<ProductDetail />}
          />

        </Route>

        <Route path="/admin" element={<Admin />}>
          <Route path="users" element={<h1>All Users</h1>} />
          <Route path="orders" element={<h1>All Orders</h1>} />
          <Route path="products" element={<h1>All Products</h1>} />
        </Route>

        {/* <Route loader errorElement path element /> */}
      </>,
    ),
    // {
    //   hydration: {
    //     fallbackElement: <h1>Loading....</h1>,
    //   },
    // },
  );

  return (
    <>
      <RouterProvider   router={router} />
    </>
  );
}

export default App;
