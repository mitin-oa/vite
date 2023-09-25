import React from "react";
import "./header-menu.scss";
import Home from "../img/home.png";
import { Link } from "react-router-dom";
import { Navbar } from "../burger/navBar";

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
          <div className="logo__link">
            <h1
              className={
                this.props.kind === "short"
                  ? "logo__title__short"
                  : "logo__title"
              }
            >
              Cozy House
            </h1>
            <p
              className={
                this.props.kind === "short" ? "logo__text__short" : "logo__text"
              }
            >
              {" "}
              Shelter for pets in Boston
            </p>
          </div>
        </div>
        <ul className={this.props.kind === "short" ? "nav__short" : "nav"}>
          {this.props.kind === "short" ? (
            <Link to="/">
              <img className="Home-pic" alt="Home" src={Home} />
            </Link>
          ) : (
            <>
              <Link className="nav__link nav__text" to="#about_id">
                About the shelter
              </Link>
              <Link className="nav__link nav__text" to="#our_id">
                Our pets
              </Link>
              <Link className="nav__link nav__text" to="#help_id">
                Help the shelter
              </Link>
              <Link className="nav__link nav__text" to="#contact_id">
                Contacts
              </Link>
            </>
          )}
        </ul>
        {this.props.kind === "short" ? <></> : <Navbar />}
      </header>
    );
  }
}
