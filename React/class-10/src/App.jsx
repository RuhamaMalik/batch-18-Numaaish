import {
  createBrowserRouter,
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
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "about",
          element: <About />,
        },
        {
          path: "/",
          element: <Home />,
        },

        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "products",
          element: <Products />,
        },
        {
          path: "*",
          element: <PageNotFound />,
        },
      ],
    },

    {
      path: "/signup",
      element: <SignUp />,
    },

    {
      path: "/admin",
      element: <Admin />,
      children: [
        { path: "users", element: <h1>All Users</h1> },
        { path: "orders", element: <h1>All Orders</h1> },
      ],
    },

    {
      path: "/user",
      element: <><h1>User Dashboard</h1> <Outlet/></>,
      children: [
        { path: "wishlist", element: <h1>uSER Wishlist</h1> },
        { path: "orders", element: <h1>User Orders</h1> },
        { path: "profile", element: <h1>My Profile</h1> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
