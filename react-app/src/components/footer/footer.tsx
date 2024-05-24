import { useEffect } from "react";
import "../footer/footer.scss";
import { HashLink as Link } from "react-router-hash-link";
import Chat from "../Chat";
import "react-chat-widget/lib/styles.css";
import logo from "/ChronoLegal_icon.png";

export default function Footer({ kind }: any) {
  useEffect(() => {
  }, []);

  return (
    <>
      <div className="footer-top-bar">
        <div className="footer-top-bar__left"></div>
        <div className="footer-top-bar__right"></div>
      </div>
      <footer className="footer">
        <div className="wrapper footer__content">
          <div className="footer__content__contacts">
            <div className="contacts">
              <ul className="footer__nav">
                {
                  <>
                    <Link
                      className={"nav__link" + " contacts__info"}
                      to="/Resources"
                    >
                      Resources
                    </Link>
                    <Link
                      className={"nav__link" + " contacts__info"}
                      to="/Contacts"
                    >
                      Contacts
                    </Link>
                  </>
                }
              </ul>
            </div>
            <div className="contacts">
              <ul className="footer__nav">
                {
                  <>
                    <Link
                      className={"nav__link" + " contacts__info"}
                      to="/Careers"
                    >
                      Careers
                    </Link>
                    <Link
                      className={"nav__link" + " contacts__info"}
                      to="/Legal"
                    >
                      Legal
                    </Link>
                  </>
                }
              </ul>
            </div>
          </div>

          <div className="contacts__social">
            <div className="footer__logo">
              <img src={logo} className="logo-icon" alt="logo" />
              Chrono<span className="footer__logo__span">Legal</span>
            </div>
            <Chat
              profileAvatar={logo}
              title="ChronoLegal"
              subtitle="Get the legal service for you"
              emojis={true}
            />
          </div>
        </div>
      </footer>
      <div className="footer-bottom-bar">
        <p className="footer-bottom-bar__content">Copyright ChronoLegal 2024</p>
      </div>
    </>
  );
}
