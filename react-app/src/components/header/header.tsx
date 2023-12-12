import { Dispatch, SetStateAction, useContext, useState } from "react";
import "./header.scss";
import Logo from "../../../public/logo-white-ec720b-background-033c5a.png";
import { HashLink as Link } from "react-router-hash-link";
import { Navbar } from "../burger/navBar";
import ModalWindow from "../modal/modal";
import LogInForm from "../modal/LogInForm";
import { SignedInContext, SignedUpContext, deleteCookie } from "../../App";
import Button from "../Button";
import { useMediaQuery } from "react-responsive";
import SignUpForm from "../modal/SignUpForm";
import ResetPassForm from "../modal/ResetPass";

interface IHeaderProps {
  kind?: "full" | "short";
  handleSignIn: boolean;
  setUserProfileData: any;
  handleSignUp: boolean;
  onSignIn: Dispatch<SetStateAction<boolean>>;
  modalIsOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  resetPass?: boolean;
  setResetPass?: Dispatch<SetStateAction<boolean>>;
}

export default function HeaderMenu({
  kind,
  handleSignIn,
  handleSignUp,
  setUserProfileData,
  onSignIn,
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
              {!isMobileScreen ? (
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
                                deleteCookie("token");
                              }}
                              style="modal-btn"
                            />
                          </>
                        </Link>
                      )
                    }
                    modalIsOpen={modalIsOpen}
                    openModal={openModal}
                    closeModal={closeModal}
                  />
                </Link>
              ) : (
                <></>
              )}
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
                  {/* <Link className="nav__link nav__text" to="UpLoad">
                    Upload Form
                  </Link> */}
                </>
              ) : (
                <></>
              )}
              {!isMobileScreen ? (
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
                              deleteCookie("token");
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
              ) : (
                <></>
              )}
            </>
          )}
        </ul>

        {isMobileScreen ? (
          <Navbar
            signedInStatus={signedInStatus}
            handleSignIn={handleSignIn}
            setUserProfileData={setUserProfileData}
            handleSignUp={handleSignUp}
            onSignIn={onSignIn}
            modalIsOpen={modalIsOpen}
            setIsOpen={setIsOpen}
            resetPass={resetPass}
            setResetPass={setResetPass}
          />
        ) : (
          <></>
        )}
      </div>
    </header>
  );
}
