import React from "react";
import "./header.scss";
import Logo from "../../../public/logo-white-ec720b-background-033c5a.png";
import { HashLink as Link } from "react-router-hash-link";
import { Navbar } from "../burger/navBar";
import SignIn from "../modal/modal";
import ModalWindow from "../modal/modal";
import SignInForm from "../modal/SignInForm";

interface IHeaderMenu {
  kind?: "full" | "short";
}
export class HeaderMenu extends React.Component<IHeaderMenu> {
  static defaultProps = {
    // if needed
    kind: "full",
  };

  render() {
    return (
      <header
        className={
          this.props.kind === "short"
            ? "wrapper header__short"
            : "wrapper header"
        }
      >
        <div className="logo">
          <img className="logo__img" alt="LOGO" src={Logo}></img>
        </div>
        <ul className={this.props.kind === "short" ? "nav__short" : "nav"}>
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
              <ModalWindow title={"Sign In"} childComp={<SignInForm />} />
            </>
          }
        </ul>
        {this.props.kind === "short" ? <></> : <Navbar />}
      </header>
    );
  }
}
