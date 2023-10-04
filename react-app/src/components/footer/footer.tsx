import React from "react";
import "../footer/footer.scss";
import Logo from "../../../public/ChronoLegal_G.jpg";
import { HashLink as Link } from "react-router-hash-link";
import SignIn from "../modal/modal";

interface IHeaderMenu {
  kind?: "full" | "short";
}
export class Footer extends React.Component<IHeaderMenu> {
  static defaultProps = {
    // if needed
    kind: "full",
  };

  render() {
    return (
      <footer
        className={
          this.props.kind === "short"
            ? "wrapper footer__short"
            : "wrapper footer"
        }
      >
        <ul className={this.props.kind === "short" ? "nav__short" : "nav"}>
          {
            <>
              <Link className="nav__link" to="">
                Help
              </Link>
              <Link className="nav__link" to="">
                Resourses
              </Link>
              <Link className="nav__link" to="">
                Extra Links
              </Link>
            </>
          }
        </ul>
        <div className="logo">
          <img className="footer__logo-img" alt="LOGO" src={Logo}></img>
        </div>
      </footer>
    );
  }
}
