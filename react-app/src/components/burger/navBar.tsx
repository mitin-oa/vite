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
  z-index: 2;
  padding: 15rem 0;
  flex-direction: column;
  display: ${({ open }) => (open ? "flex" : "none")};
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  overflow: hidden;
  overflow-y: hidden;
`;

const ModalOverlay = styled.div<{ open: boolean }>`
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  position: fixed;
  background-color: rgba(255, 255, 255, 0.75);
  z-index: ${({ open }) => (open ? "1" : "-1")};
`;

const ModalContent = styled.nav<{ open: boolean }>`
  top: 50%;
  left: 50%;
  min-width: 300px;
  position: fixed;
  transform: translate(-50%, -50%);
  text-align: center;
  display: flex;
  flex-direction: column;
  background-color: white;
  z-index: ${({ open }) => (open ? "2" : "-1")};
  padding: 2rem;
`;

export const Navbar = ({ signedInStatus }: { signedInStatus: string }) => {
  const [open, setOpen] = useState<boolean>(false);
  const close = () => setOpen(false);

  return (
    <div className="burger_visible">
      <Burger open={open} setOpen={setOpen} />
      <ModalOverlay open={open} onClick={() => close()} />
      <ModalContent open={open}>
        {signedInStatus == "Sign out" ? (
          <>
            <Link
              className="burger_visible__Link"
              to="Dashboard"
              onClick={() => close()}
            >
              Dashboard
            </Link>
            <Link
              className="burger_visible__Link"
              to="BuyCredits"
              onClick={() => close()}
            >
              Buy Credits
            </Link>
            <span className="burger_visible__Link" onClick={() => close()}>
              Upload Form
            </span>
            <span
              className="burger_visible__Link"
              onClick={() => close()}
            >
              Sign out
            </span>
          </>
        ) : (
          <>
            <Link
              className="burger_visible__Link"
              to="About"
              onClick={() => close()}
            >
              About the service
            </Link>
            <Link
              className="burger_visible__Link"
              to="CalculateCost"
              onClick={() => close()}
            >
              Calculate Cost
            </Link>
            <Link
              className="burger_visible__Link"
              to="UpLoad"
              onClick={() => close()}
            >
              Upload Form
            </Link>
            <span
              className="burger_visible__Link"
              onClick={() => close()}
            >
              Sign in
            </span>
          </>
        )}
      </ModalContent>
    </div>
  );
};
