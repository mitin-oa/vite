import { Dispatch, SetStateAction, useContext, useState } from "react";
import "./header.scss";
import Logo from "../../../public/logo-white-ec720b-background-033c5a.png";
import { HashLink as Link } from "react-router-hash-link";
import { Navbar } from "../burger/navBar";
import ModalWindow from "../modal/modal";
import SignInForm from "../modal/SignUpForm";
import LogInForm from "../modal/LogInForm";
import { SignedInContext, SignedUpContext } from "../../App";
import Button from "../Button";

interface IHeaderProps {
  kind?: "full" | "short";
  handleSignIn: boolean;
  signedUp: boolean;
  handleSignUp: boolean;
  onSignIn: Dispatch<SetStateAction<boolean>>;
  modalIsOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export function HeaderMenu({
  kind,
  handleSignIn,
  handleSignUp,
  onSignIn,
  modalIsOpen,
  setIsOpen,
}: IHeaderProps) {
  const signedIn = useContext(SignedInContext);
  const signedUp = useContext(SignedUpContext);
  const signedInStatus = signedIn ? "Sign out" : "Sign in";

  /* const [signedUp, onSignUp] = useState(true);

  function handleSignUp() {
    onSignUp(!signedUp);
  } */

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  console.log(signedIn, "signedIn");
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
              <Link to="/">
                <ModalWindow
                  // * VK: This part of the code will be displayed if the variable signedIn == true
                  title={signedInStatus}
                  childComp={
                    signedInStatus == "Sign in" ? (
                      signedIn && signedUp ? (
                        <LogInForm
                          onSignIn={handleSignIn}
                          onSignUp={handleSignUp}
                        />
                      ) : (
                        <SignInForm onSignUp={handleSignUp} />
                      )
                    ) : (
                      <Link to="/">
                        <Button
                          children={signedInStatus}
                          color="orange"
                          onClick={() => {
                            onSignIn(false);
                            setIsOpen(false);
                          }}
                        />
                      </Link>
                    )
                  }
                  modalIsOpen={modalIsOpen}
                  openModal={openModal}
                  closeModal={closeModal}
                />
              </Link>
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
              <Link to="/">
                <ModalWindow
                  title={signedInStatus}
                  childComp={
                    signedInStatus == "Sign in" ? (
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
                    ) : (
                      <Link to="/">
                        <Button
                          children={signedInStatus}
                          color="orange"
                          onClick={() => {
                            onSignIn(false);
                            setIsOpen(false);
                          }}
                        />
                      </Link>
                    )
                  }
                  modalIsOpen={modalIsOpen}
                  openModal={openModal}
                  closeModal={closeModal}
                />
              </Link>
            </>
          )}
        </ul>
        {kind === "short" ? <></> : <Navbar signedInStatus={signedInStatus} />}
      </div>
    </header>
  );
}
