import {
  Navbar,
  NavbarBrand,
  NavbarCollapse, 
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import ThemePallate from "./ThemePallate";
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";


const Header = () => {
    const {currentStyle} = useContext(ThemeContext);
  
  return (
    <>
      <Navbar style={{backgroundColor:currentStyle?.prop?.bgdark}}  fluid rounded>
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
          <NavbarLink as={NavLink} to="/" active>
            Home
          </NavbarLink>
          <NavbarLink   as={Link} to="/about"    >About</NavbarLink>
          <NavbarLink   as={Link} to="/login"    >Login</NavbarLink>
          <NavbarLink as={NavLink} to="/contact">Contact</NavbarLink>
        </NavbarCollapse>
      </Navbar>
<ThemePallate />
    </>
  );
};

export default Header;
