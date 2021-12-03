import React, { useState } from "react";
import {
  Container,
  Hamburger,
  Logo,
  Menu,
  MenuLink,
  Signin,
} from "./Navbar_Style";

import logo from "../../assets/img/vizjel.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const element = <FontAwesomeIcon icon={faShoppingCart} />;

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const style = {
    textDecoration: "none",
  };

  return (
    <Container>
      <Link to="/">
        <Logo>
          <img src={logo} alt="logo" />
        </Logo>
      </Link>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <Link style={style} to="/">
          <MenuLink>HOME</MenuLink>
        </Link>
        <Link style={style} to="/About">
          <MenuLink>ABOUT US</MenuLink>
        </Link>
        <Link style={style} to="/Shop">
          <MenuLink>SHOP</MenuLink>
        </Link>
        <Link style={style} to="/Cart">
          <MenuLink>{element}</MenuLink>
        </Link>
        <Link style={style} to="/Signin">
          <Signin>SIGN IN</Signin>
        </Link>
      </Menu>
    </Container>
  );
}

export default Navbar;
