import React from "react";
import "../header/header.scss";
import Logo from "../../../public/logo-white-ec720b-background-033c5a.png";
import { HashLink as Link } from "react-router-hash-link";
import SignIn from "../modal/modal";
import ModalWindow from "../modal/modal";
import SignInForm from "../modal/SignUpForm";

interface IHeaderMenu {
  kind?: "full" | "short";
}
export class ShortHeader extends React.Component<IHeaderMenu> {
  static defaultProps = {
    // if needed
    kind: "short",
  };

  render() {
    return (
      <header
        className={
          this.props.kind === "short" ? "header__short" : "wrapper header"
        }
      >
        <div className="wrapper">
          <div className="logo">
            <img className="logo__img" alt="LOGO" src={Logo}></img>
          </div>
          <ul className={this.props.kind === "short" ? "nav__short" : "nav"}>
            {
              <>
                <Link to="/">
                  <button type="button" className={"btn btn-warning"}>
                    Home
                  </button>
                </Link>
                <div className="gap"></div>
                <ModalWindow title={"Sign In"} childComp={<SignInForm />} />
              </>
            }
          </ul>
        </div>
      </header>
    );
  }
}
