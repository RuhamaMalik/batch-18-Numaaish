import { Link, NavLink } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
const Header = () => {
  return (
    <>
 <Navbar fluid rounded>
        <NavbarBrand>
          <img
            src="/favicon.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite React Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Flowbite React
          </span>
        </NavbarBrand>
        <NavbarToggle />
        <NavbarCollapse>
          <NavbarLink href="#" active>
            Home
          </NavbarLink>
          <NavbarLink href="#">About</NavbarLink>
          <NavbarLink href="#">Services</NavbarLink>
          <NavbarLink href="#">Pricing</NavbarLink>
          <NavbarLink href="#">Contact</NavbarLink>
        </NavbarCollapse>
      </Navbar>


      {/* <h1>MY_Header</h1>
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
      <br /> */}
    </>
  );
};

export default Header;
