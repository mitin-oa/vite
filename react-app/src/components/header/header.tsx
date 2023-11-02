import React, { useState } from "react";
import "./header.scss";
import Logo from "../../../public/logo-white-ec720b-background-033c5a.png";
import { HashLink as Link } from "react-router-hash-link";
import { Navbar } from "../burger/navBar";
import ModalWindow from "../modal/modal";
import SignInForm from "../modal/SignUpForm";
import LogInForm from "../modal/LogInForm";

interface IHeaderProps {
  kind?: "full" | "short";
}

export function HeaderMenu({ kind }: IHeaderProps) {
  const [signedIn, onSignIn] = useState(true);
  function handleSignIn() {
    return onSignIn(!signedIn);
  }
  return (
    <header
      className={kind === "short" ? "wrapper header__short" : "wrapper header"}
    >
      <div className="logo">
        <img className="logo__img" alt="LOGO" src={Logo}></img>
      </div>
      <ul className={kind === "short" ? "nav__short" : "nav"}>
        {
          <>
            <Link className="nav__link nav__text" to="UpLoad">
              Upload Form
            </Link>
            <Link className="nav__link nav__text" to="Order">
              Order
            </Link>
            <Link className="nav__link nav__text" to="BuyCredits">
              Buy Credits
            </Link>
            <Link className="nav__link nav__text" to="AdminPanel">
              Admin Panel
            </Link>
            <ModalWindow
              title={"Log In"}
              childComp={
                signedIn ? (
                  <LogInForm onSignIn={handleSignIn} />
                ) : (
                  <SignInForm />
                )
              }
            />
          </>
        }
      </ul>
      {kind === "short" ? <></> : <Navbar />}
    </header>
  );
}
