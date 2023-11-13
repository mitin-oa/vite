import { useState } from "react";
import "../header/header.scss";
import Logo from "../../../public/logo-white-ec720b-background-033c5a.png";
import { HashLink as Link } from "react-router-hash-link";
import ModalWindow from "../modal/modal";
import LogInForm from "../modal/LogInForm";
import SignInForm from "../modal/SignUpForm";

interface IHeaderProps {
  kind?: "full" | "short";
}

export default function ShortHeader({ kind }: IHeaderProps) {
  const [signedIn, onSignIn] = useState(false);
  function handleSignIn() {
    return onSignIn(!signedIn);
  }
  return (
    <header className={kind === "short" ? "header__short" : "wrapper header"}>
      <div className="wrapper">
        <Link to="/">
          <button
            type="button"
            className={"btn btn-warning"}
            style={{ padding: "0px" }}
          >
            <img className="logo__img" alt="LOGO" src={Logo} />
          </button>
        </Link>
        <ul className={kind === "short" ? "nav__short" : "nav"}>
          {
            <>
              <ModalWindow
                title={"Log In"}
                childComp={
                  !signedIn ? (
                    <LogInForm onSignIn={handleSignIn} />
                  ) : (
                    <SignInForm />
                  )
                }
              />
            </>
          }
        </ul>
      </div>
    </header>
  );
}
