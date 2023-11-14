import { useContext, useState } from "react";
import "./header.scss";
import Logo from "../../../public/logo-white-ec720b-background-033c5a.png";
import { HashLink as Link } from "react-router-hash-link";
import { Navbar } from "../burger/navBar";
import ModalWindow from "../modal/modal";
import SignInForm from "../modal/SignUpForm";
import LogInForm from "../modal/LogInForm";
import { SignedInContext } from "../../App";

interface IHeaderProps {
  kind?: "full" | "short";
  handleSignIn: boolean;
  modalIsOpen: boolean;
  setIsOpen: any;
}

export function HeaderMenu({
  kind,
  handleSignIn,
  modalIsOpen,
  setIsOpen,
}: IHeaderProps) {
  const signedIn = useContext(SignedInContext);
  /* const [signedIn, onSignIn] = useState(false); */
  /* function handleSignIn() {
    onSignIn(!signedIn);
    setIsOpen(!modalIsOpen);
  } */
  const [signedUp, onSignUp] = useState(true);

  function handleSignUp() {
    onSignUp(!signedUp);
  }

  /* const [modalIsOpen, setIsOpen] = useState(false); */

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  console.log(signedIn, 'signedIn');
  console.log(signedUp);
  
  return (
    <header className={kind === "short" ? "header__short" : "header"}>
      <div className="wrapper">
        {kind === "full" ? (
          <div className="logo">
            <img className="logo__img" alt="LOGO" src={Logo}></img>
          </div>
        ) : (
          <></>
        )}
        {kind === "short" ? (
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
        ) : (
          <></>
        )}
        <ul className={kind === "short" ? "nav__short" : "nav"}>
          {signedIn ? (
            <>
              {kind === "full" ? (
                <>
                  <Link className="nav__link nav__text" to="Dashboard">
                    Dashboard
                  </Link>
                  <Link className="nav__link nav__text" to="UpLoad">
                    File Upload
                  </Link>

                  <Link className="nav__link nav__text" to="BuyCredits">
                    Buy Credits
                  </Link>
                </>
              ) : (
                <></>
              )}

              <ModalWindow
              // * VK: This part of the code will be displayed if the variable signedIn == true
                title={"Log In"}
                childComp={
                  signedIn && signedUp ? (
                    <LogInForm
                      onSignIn={handleSignIn}
                      onSignUp={handleSignUp}
                    />
                  ) : (
                    <SignInForm onSignUp={handleSignUp} />
                  )
                }
                modalIsOpen={modalIsOpen}
                openModal={openModal}
                closeModal={closeModal}
              />
            </>
          ) : (
            <>
              {kind === "full" ? (
                <>
                  <Link className="nav__link nav__text" to="About">
                    About the service
                  </Link>
                  <Link className="nav__link nav__text" to="CalculateCost">
                    Calculate Cost
                  </Link>
                  <Link className="nav__link nav__text" to="UpLoad">
                    Upload Form
                  </Link>
                </>
              ) : (
                <></>
              )}
              <ModalWindow
                title={"Log In"}
                childComp={
                  !signedIn && signedUp ? (
                    <LogInForm
                      onSignIn={handleSignIn}
                      onSignUp={handleSignUp}
                    />
                  ) : (
                    <SignInForm
                      onSignUp={handleSignUp}
                      onCloseModal={closeModal}
                    />
                  )
                }
                modalIsOpen={modalIsOpen}
                openModal={openModal}
                closeModal={closeModal}
              />
            </>
          )}
        </ul>
        {kind === "short" ? <></> : <Navbar />}
      </div>
    </header>
  );
}
