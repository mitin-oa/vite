import React from "react";
import "../footer/footer.scss";
import Logo from "../../../public/ChronoLegal_S.jpg";
import { HashLink as Link } from "react-router-hash-link";

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
        className={this.props.kind === "short" ? "footer__short" : "footer"}
      >
        <div className="wrapper footer__content">
          <div className="footer__content__contacts">
            <div className="contacts">
              <p
                className={
                  this.props.kind === "short"
                    ? "contacts__title__short"
                    : "contacts__title"
                }
              >
                Help
              </p>
              <ul
                className={
                  this.props.kind === "short"
                    ? "footer__nav__short"
                    : "footer__nav"
                }
              >
                {
                  <>
                    <Link
                      className={
                        "nav__link" +
                        (this.props.kind === "short"
                          ? " contacts__info__short"
                          : " contacts__info")
                      }
                      to=""
                    >
                      Customer support
                    </Link>
                    <Link
                      className={
                        "nav__link" +
                        (this.props.kind === "short"
                          ? " contacts__info__short"
                          : " contacts__info")
                      }
                      to=""
                    >
                      Delivery details
                    </Link>
                    <Link
                      className={
                        "nav__link" +
                        (this.props.kind === "short"
                          ? " contacts__info__short"
                          : " contacts__info")
                      }
                      to=""
                    >
                      Terms & Conditions
                    </Link>
                  </>
                }
              </ul>
            </div>
            <div className="contacts">
              <p
                className={
                  this.props.kind === "short"
                    ? "contacts__title__short"
                    : "contacts__title"
                }
              >
                Resourses
              </p>
              <ul
                className={
                  this.props.kind === "short"
                    ? "footer__nav__short"
                    : "footer__nav"
                }
              >
                {
                  <>
                    <Link
                      className={
                        "nav__link" +
                        (this.props.kind === "short"
                          ? " contacts__info__short"
                          : " contacts__info")
                      }
                      to=""
                    >
                      Free Docs
                    </Link>
                    <Link
                      className={
                        "nav__link" +
                        (this.props.kind === "short"
                          ? " contacts__info__short"
                          : " contacts__info")
                      }
                      to=""
                    >
                      Books
                    </Link>
                    <Link
                      className={
                        "nav__link" +
                        (this.props.kind === "short"
                          ? " contacts__info__short"
                          : " contacts__info")
                      }
                      to=""
                    >
                      YouTube PlayList
                    </Link>
                  </>
                }
              </ul>
            </div>
            <div className="contacts">
              <p
                className={
                  this.props.kind === "short"
                    ? "contacts__title__short"
                    : "contacts__title"
                }
              >
                Extra Links
              </p>
              <ul
                className={
                  this.props.kind === "short"
                    ? "footer__nav__short"
                    : "footer__nav"
                }
              >
                {
                  <>
                    <Link
                      className={
                        "nav__link" +
                        (this.props.kind === "short"
                          ? " contacts__info__short"
                          : " contacts__info")
                      }
                      to=""
                    >
                      Help
                    </Link>
                    <Link
                      className={
                        "nav__link" +
                        (this.props.kind === "short"
                          ? " contacts__info__short"
                          : " contacts__info")
                      }
                      to=""
                    >
                      Resourses
                    </Link>
                    <Link
                      className={
                        "nav__link" +
                        (this.props.kind === "short"
                          ? " contacts__info__short"
                          : " contacts__info")
                      }
                      to=""
                    >
                      Extra Links
                    </Link>
                  </>
                }
              </ul>
            </div>
          </div>

          <div className="contacts">
            <div
              className={
                this.props.kind === "short"
                  ? "footer__logo__short"
                  : "footer__logo"
              }
            >
              Chrono<span className="footer__logo__span">Legal</span>
            </div>
            {/* <img className="footer__logo-img" alt="LOGO" src={Logo}></img> */}
            <div className="gap"></div>
            <div className="contacts__links">
              <a href="https://www.facebook.com/">
                <img
                  src="../public/facebook.png"
                  className="contacts__icon"
                  alt="Picture social-list"
                />
              </a>
              <a href="mailto:mitin.oa@gmail.com">
                <img
                  src="../public/gmail.png"
                  className="contacts__icon"
                  alt="Picture mail"
                />
              </a>
              <a href="tel:+48000000000">
                <img
                  src="../public/telephone-call.png"
                  className="contacts__icon"
                  alt="Picture phone"
                />
              </a>
              <a href="https://t.me/">
                <img
                  src="../public/telegram.png"
                  className="contacts__icon"
                  alt="Picture telegram"
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
