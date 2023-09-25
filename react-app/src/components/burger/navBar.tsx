import React, { useState } from "react";
import styled from "styled-components";
import { Burger } from "../burger/burger";
import "../header-menu/header-menu.scss";
import background from "../img/burger-background.png";
import { Link } from "react-router-dom";

const colors = {
  yellowmellow: "#fbe69b",
  lightbrown: "#be8b7b",
  pearl: "#fdf2e9",
  lightblue: "#93CEF0",
};

const StyledMenu = styled.nav<{ open: boolean }>`
  top: 0;
  right: 0;
  height: 100vh;
  width: 100vw;
  position: fixed;
  text-align: center;
  /* background-color: ${colors.lightbrown}; */
  background: url(${background}) no-repeat center;
  background-size: cover;
  z-index: 2;
  padding: 15rem 0;
  flex-direction: column;
  display: ${({ open }) => (open ? "flex" : "none")};
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  overflow: hidden;
  overflow-y: hidden;
`;

export const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const close = () => setOpen(false);
  return (
    <div className="burger_visible">
      <StyledMenu open={open}>
        <Link
          className="burger_visible__Link"
          to="#about_id"
          onClick={() => close()}
        >
          About the shelter
        </Link>
        <Link
          className="burger_visible__Link"
          to="#our_id"
          onClick={() => close()}
        >
          Our pets
        </Link>
        <Link
          className="burger_visible__Link"
          to="#help_id"
          onClick={() => close()}
        >
          Help the shelter
        </Link>
        <Link
          className="burger_visible__Link"
          to="#contact_id"
          onClick={() => close()}
        >
          Contacts
        </Link>
      </StyledMenu>
      <Burger open={open} setOpen={setOpen} />
    </div>
  );
};
