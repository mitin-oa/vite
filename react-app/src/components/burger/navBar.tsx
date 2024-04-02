import React, { useState } from "react";
import styled from "styled-components";
import { Burger } from "../burger/burger";
import "../header/header.scss";
import { Link } from "react-router-dom";
import { Dispatch, SetStateAction, useContext } from "react";
import LogInForm from "../modal/LogInForm";
import ModalWindow from "../modal/modal";
import Button from "../Button";
import {
  SignedInContext,
  SignedUpContext,
  deleteCookie,
  handleSignOut,
} from "../../App";
import SignUpForm from "../modal/SignUpForm";
import ResetPassForm from "../modal/ResetPass";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar1 from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

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
  display: ${({ open }) => (open ? "flex" : "none")};
  flex-direction: column;
  background-color: white;
  z-index: 2;
  padding: 2rem;
`;

interface IHeaderProps {
  signedInStatus: string;
  handleSignIn: boolean;
  setUserProfileData: any;
  handleSignUp: boolean;
  onSignIn: Dispatch<SetStateAction<boolean>>;
  modalIsOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  resetPass: boolean;
  setResetPass: Dispatch<SetStateAction<boolean>>;
}

export const Navbar = ({
  handleSignIn,
  handleSignUp,
  setUserProfileData,
  onSignIn,
  modalIsOpen,
  setIsOpen,
  resetPass,
  setResetPass,
}: IHeaderProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const close = () => setOpen(false);

  const signedIn = useContext(SignedInContext);
  const signedUp = useContext(SignedUpContext);

  const signedInStatus = signedIn ? "Sign Out" : "Sign In";

  function openModal() {
    setIsOpen(true);
    /*  setModalOpen(true); */
    setOpen(false);
  }
  function closeModal() {
    setIsOpen(false);
    /* setModalOpen(false); */
  }

  return (
    <div className="burger_visible">
      <Burger open={open} setOpen={setOpen} />
      <ModalOverlay open={open} onClick={() => close()} />
      {/* <ModalContent open={open && signedInStatus == "Sign in"}> */}
      <ModalContent open={open}>
        {signedInStatus == "Sign Out" ? (
          <>
            <Link
              className="burger_visible__Link"
              to="/Dashboard"
              onClick={() => close()}
            >
              Dashboard
            </Link>
            <Link
              className="burger_visible__Link"
              to="/BuyCredits"
              onClick={() => close()}
            >
              Buy Credits
            </Link>
            <Link
              className="burger_visible__Link"
              to="/UpLoad"
              onClick={() => close()}
            >
              Upload Form
            </Link>
          </>
        ) : (
          <>
            <Navbar1 expand="lg" className="header-navBar">
              <Container>
                <Navbar1.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Link className="nav__text" to="/About">
                      ABOUT
                    </Link>
                    <NavDropdown
                      title="SERVICES"
                      id="basic-nav-dropdown"
                      className="nav__text"
                    >
                      <NavDropdown.Item href="#action/3.1">
                        <Link className="nav__text" to="/ContractDrafting">
                          Contract Drafting
                        </Link>
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action/3.2">
                        <Link className="nav__text" to="/ContractAnalysis">
                          Contract Analysis
                        </Link>
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action/3.3">
                        <Link className="nav__text" to="/ContractReview">
                          Contract Review
                        </Link>
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action/3.4">
                        <Link className="nav__text" to="/ContractManagement">
                          Contract Management
                        </Link>
                      </NavDropdown.Item>
                    </NavDropdown>
                    <Link className="nav__text" to="/FAQs">
                      FAQs
                    </Link>
                    <Link className="nav__link nav__text" to="/OrderRewiew">
                      ORDER A REWIEW
                    </Link>
                  </Nav>
                </Navbar1.Collapse>
              </Container>
            </Navbar1>
          </>
        )}

        <Link to="/">
          <ModalWindow
            title={
              signedUp
                ? resetPass
                  ? "Reset password"
                  : signedInStatus
                : "Sign Up"
            }
            childComp={
              signedInStatus == "Sign In" ? (
                !signedIn && signedUp ? (
                  !resetPass ? (
                    <LogInForm
                      handleSignIn={handleSignIn}
                      onSignUp={handleSignUp}
                      setIsOpen={setIsOpen}
                      modalIsOpen={modalIsOpen}
                      resetPass={resetPass}
                      setResetPass={setResetPass}
                    />
                  ) : (
                    <ResetPassForm
                      setIsOpen={setIsOpen}
                      resetPass={resetPass}
                      setResetPass={setResetPass}
                    />
                  )
                ) : (
                  <SignUpForm
                    handleSignUp={handleSignUp}
                    onCloseModal={closeModal}
                    setUserProfileData={setUserProfileData}
                  />
                )
              ) : (
                <Link to="/">
                  <Button
                    children={signedInStatus}
                    color="orange"
                    onClick={() => {
                      onSignIn(false);
                      setIsOpen(false);
                      // deleteCookie("token");
                      handleSignOut();
                    }}
                    style="modal-btn"
                  />
                </Link>
              )
            }
            modalIsOpen={modalIsOpen}
            openModal={openModal}
            closeModal={closeModal}
          />
        </Link>
      </ModalContent>
    </div>
  );
};
