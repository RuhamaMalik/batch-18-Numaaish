import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <h1>MY_Header</h1>
      <Link className="link" to="/">
        Home
      </Link>{" "}
      <br />
      <br />
      <Link className="link" to="/about">
        About
      </Link>
      <br />
      <br />
      <Link className="link" to="/products">
        Products
      </Link>
      <br />
      <br />
      <NavLink className={({isActive})=> isActive ?  'active' : 'link'} to="/contact">
        Contact
      </NavLink>
      <br />
      <br />
    </>
  );
};

export default Header;
