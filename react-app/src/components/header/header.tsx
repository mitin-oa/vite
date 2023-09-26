import React from "react";
import "./header.scss";
import Logo from "../../../public/Logo.png";
import { HashLink as Link } from "react-router-hash-link";
import { Navbar } from "../burger/navBar";
import SignIn from "../modal/modal";

interface IHeaderMenu {
  kind?: "full" | "short";
}
export class HeaderMenu extends React.Component<IHeaderMenu> {
  static defaultProps = {
    // if needed
    kind: "short",
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
          <div className="logo__link">
            <h1
              className={
                this.props.kind === "short"
                  ? "logo__title__short"
                  : "logo__title"
              }
            >
              <img alt="LOGO" src={Logo}></img>
            </h1>
            <p
              className={
                this.props.kind === "short" ? "logo__text__short" : "logo__text"
              }
            ></p>
          </div>
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
              <Link className="nav__link nav__text" to="#contact_id">
                Admin Panel
              </Link>
              <SignIn />
            </>
          }
        </ul>
        {this.props.kind === "short" ? <></> : <Navbar />}
      </header>
    );
  }
}
