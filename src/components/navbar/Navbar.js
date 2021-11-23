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

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Container>
      <Logo>
        <img src={logo} alt="logo" />
      </Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <MenuLink>HOME</MenuLink>
        <MenuLink>SHOP</MenuLink>
        <MenuLink>ABOUT US</MenuLink>
        <MenuLink>BASKET</MenuLink>
        <Signin>SIGN IN</Signin>
      </Menu>
    </Container>
  );
}

export default Navbar;
