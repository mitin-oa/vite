import React, { useState } from "react";
import styled from "styled-components";
import { Burger } from "../burger/burger";
import "../header/header.scss";
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
          to="UpLoad"
          onClick={() => close()}
        >
          Upload Form
        </Link>
        <Link
          className="burger_visible__Link"
          to="Order"
          onClick={() => close()}
        >
          Order
        </Link>
        <Link
          className="burger_visible__Link"
          to="BuyCredits"
          onClick={() => close()}
        >
          Buy Credits
        </Link>
        <Link
          className="burger_visible__Link"
          to="AdminPanel"
          onClick={() => close()}
        >
          Admin Panel
        </Link>
      </StyledMenu>
      <Burger open={open} setOpen={setOpen} />
    </div>
  );
};
