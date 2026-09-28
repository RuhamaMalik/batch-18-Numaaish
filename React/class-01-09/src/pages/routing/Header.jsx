import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <h1>MY_Header</h1>

      <Link to="/">Home</Link> <br /><br />
      <Link to="/about">About</Link><br /><br />
      <Link to="/products">Products</Link><br /><br />
      <NavLink to="/contact-page">Contact</NavLink><br /><br />
    </>
  );
};

export default Header;
