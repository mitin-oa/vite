import { Dispatch, SetStateAction, useContext, useState } from "react";
import "./header.scss";
import Logo from "../../../public/ChronoLegal_G.jpg";
import { HashLink as Link } from "react-router-hash-link";
import { Navbar } from "../burger/navBar";
import ModalWindow from "../modal/modal";
import LogInForm from "../modal/LogInForm";
import FacebookPic from "../../../public/facebook1.png";
import MailPic from "../../../public/twitter.png";
import PhonePic from "../../../public/instagram.png";
import TelegramPic from "../../../public/linkedin.png";
import { SignedInContext, SignedUpContext, handleSignOut } from "../../App";
import Button from "../Button";
import { useMediaQuery } from "react-responsive";
import SignUpForm from "../modal/SignUpForm";
import ResetPassForm from "../modal/ResetPass";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar1 from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { slide as Menu } from "react-burger-menu";
import SideBarMenu from "../burger/navMenu";

interface IHeaderProps {
  kind?: "full" | "short";
  handleSignIn: boolean;
  setUserProfileData: any;
  handleSignUp: boolean;
  onSignIn: Dispatch<SetStateAction<boolean>>;
  onSignUp: Dispatch<SetStateAction<boolean>>;

  modalIsOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export default function HeaderMenu({
  kind,
  handleSignIn,
  handleSignUp,
  setUserProfileData,
  onSignIn,
  onSignUp,
  modalIsOpen,
  setIsOpen,
}: IHeaderProps) {
  const signedIn = useContext(SignedInContext);
  const signedUp = useContext(SignedUpContext);
  const [resetPass, setResetPass] = useState(false);
  const isMobileScreen = useMediaQuery({ query: "(max-width: 1028px" });

  const signedInStatus = signedIn ? "Sign Out" : "Sign In";

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
    resetPass && setResetPass(!resetPass);
  }

  function closeSignUp() {
    onSignUp(!signedUp);
    setIsOpen(false);
  }

  return (
    <>
      <div className="header__links">
        <div className="contacts__links">
          <a href="https://www.facebook.com/">
            <div className="contacts__links-btn">
              <img
                src={FacebookPic}
                className="contacts__icon"
                alt="Picture social-list"
              />
            </div>
          </a>
          <a href="mailto:mitin.oa@gmail.com">
            <div className="contacts__links-btn">
              <img
                src={MailPic}
                className="contacts__icon"
                alt="Picture mail"
              />
            </div>
          </a>
          <a href="tel:+48000000000">
            <div className="contacts__links-btn">
              <img
                src={PhonePic}
                className="contacts__icon"
                alt="Picture phone"
              />
            </div>
          </a>
          <a href="https://t.me/">
            <div className="contacts__links-btn">
              <img
                src={TelegramPic}
                className="contacts__icon"
                alt="Picture telegram"
              />
            </div>
          </a>
        </div>
      </div>
      <div className="header-middle-bar">
        <div className="header-middle-bar__left"></div>
        <div className="header-middle-bar__right">
          <Link to="/">
            <ModalWindow
              // * VK: This part of the code will be displayed if the variable signedIn == true
              title={signedUp ? signedInStatus : "Sign Up"}
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
                      handleSignUpForm={handleSignUp}
                      onSignUp={onSignUp}
                      onCloseModal={closeModal}
                      setUserProfileData={setUserProfileData}
                    />
                  )
                ) : (
                  <Link to="/">
                    <>
                      <Button
                        children={`Want to ${signedInStatus}?`}
                        color="orange"
                        onClick={() => {
                          onSignIn(false);
                          setIsOpen(false);
                          // deleteCookie("token");
                          handleSignOut();
                        }}
                        style="modal-btn"
                      />
                    </>
                  </Link>
                )
              }
              modalIsOpen={modalIsOpen}
              openModal={openModal}
              closeModal={signedUp ? closeModal : closeSignUp}
            />
          </Link>
          {isMobileScreen ? (
            <Link to="/OrderRewiew">
              <Button
                children="Order Now"
                color=""
                style={"btn_order_now"}
                onClick={() => null}
              />
            </Link>
          ) : (
            <></>
          )}
        </div>
      </div>

      <header className="header">
        <div className="wrapper header">
          <>
            <Link to="/">
              <button
                type="button"
                className={"btn btn-warning"}
                style={{ padding: "0px" }}
              >
                <img className="logo__img" alt="LOGO" src={Logo} />
              </button>
            </Link>
          </>
          <div className="nav">
            {signedIn ? (
              <>
                <Navbar1 expand="lg" className="header-navBar">
                  <Container>
                    <Navbar1.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar1.Collapse id="basic-navbar-nav">
                      <Nav className="me-auto">
                        <Link
                          className="nav__text"
                          style={{ marginRight: "2vw" }}
                          to="/Dashboard"
                        >
                          DASHBOARD
                        </Link>
                        <Link
                          className="nav__text"
                          style={{ marginRight: "2vw" }}
                          to="/UpLoad"
                        >
                          FILE UPLOAD
                        </Link>
                        <Link
                          className="nav__link nav__text"
                          style={{ marginRight: "2vw" }}
                          to="/BuyCredits"
                        >
                          BUY CREDITS
                        </Link>
                      </Nav>
                    </Navbar1.Collapse>
                  </Container>
                </Navbar1>

                {!isMobileScreen ? (
                  <Link className="nav__link" to="/OrderRewiew">
                    <Button
                      children="Order Now"
                      color=""
                      style={"btn_order_now"}
                      onClick={() => null}
                    />
                  </Link>
                ) : (
                  <></>
                )}
              </>
            ) : (
              <>
                <Navbar1 expand="lg" className="header-navBar">
                  <Container>
                    <Navbar1.Toggle aria-controls="basic-navbar-nav" />
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
                            <Link
                              className="nav__text"
                              to="/ContractManagement"
                            >
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

                {!isMobileScreen ? (
                  <Link to="/OrderRewiew">
                    <Button
                      children="Order Now"
                      color=""
                      style={"btn_order_now"}
                      onClick={() => null}
                    />
                  </Link>
                ) : (
                  <></>
                )}
              </>
            )}
          </div>

          {isMobileScreen ? <SideBarMenu /> : <></>}
        </div>
      </header>
    </>
  );
}

{
  /* <Navbar
              signedInStatus={signedInStatus}
              handleSignIn={handleSignIn}
              setUserProfileData={setUserProfileData}
              handleSignUp={handleSignUp}
              onSignIn={onSignIn}
              modalIsOpen={modalIsOpen}
              setIsOpen={setIsOpen}
              resetPass={resetPass}
              setResetPass={setResetPass}
            /> */
}
