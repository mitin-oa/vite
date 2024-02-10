import React, { useEffect } from "react";
import "../footer/footer.scss";
import FacebookPic from "../../../public/facebook.png";
import MailPic from "../../../public/gmail.png";
import PhonePic from "../../../public/telephone-call.png";
import TelegramPic from "../../../public/telegram.png";
import { HashLink as Link } from "react-router-hash-link";
import { Widget, addResponseMessage } from "react-chat-widget";
import "react-chat-widget/lib/styles.css";
import logo from "../../../public/ChronoLegal_icon.png";
addResponseMessage("Welcome to this **awesome** chat!");

export default function Footer({ kind }: any) {
  useEffect(() => {
    //addResponseMessage("Welcome to this **awesome** chat!");
  }, []);

  const handleNewUserMessage = (newMessage: any) => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
  };

  return (
    <footer className={kind === "short" ? "footer__short" : "footer"}>
      <div className="wrapper footer__content">
        <div className="footer__content__contacts">
          <div className="contacts">
            <ul
              className={
                kind === "short" ? "footer__nav__short" : "footer__nav"
              }
            >
              {
                <>
                  <Link
                    className={
                      "nav__link" +
                      (kind === "short"
                        ? " contacts__info__short"
                        : " contacts__info")
                    }
                    to="/Contacts"
                  >
                    Contacts
                  </Link>
                  <Link
                    className={
                      "nav__link" +
                      (kind === "short"
                        ? " contacts__info__short"
                        : " contacts__info")
                    }
                    to=""
                  >
                    Careers
                  </Link>
                  <Link
                    className={
                      "nav__link" +
                      (kind === "short"
                        ? " contacts__info__short"
                        : " contacts__info")
                    }
                    to=""
                  >
                    Legal (Terms of services, Legal Notices)
                  </Link>
                </>
              }
            </ul>
          </div>
          {/* <div className="contacts">
            <ul
              className={
                kind === "short" ? "footer__nav__short" : "footer__nav"
              }
            >
              {
                <>
                  <Link
                    className={
                      "nav__link" +
                      (kind === "short"
                        ? " contacts__info__short"
                        : " contacts__info")
                    }
                    to=""
                  >
                    Resources
                  </Link>
                  <Link
                    className={
                      "nav__link" +
                      (kind === "short"
                        ? " contacts__info__short"
                        : " contacts__info")
                    }
                    to=""
                  >
                    Legal (Terms of services, Legal Notices)
                  </Link>
                </>
              }
            </ul>
          </div>
          <div className="contacts">
            <ul
              className={
                kind === "short" ? "footer__nav__short" : "footer__nav"
              }
            >
              {
                <>
                  <Link
                    className={
                      "nav__link" +
                      (kind === "short"
                        ? " contacts__info__short"
                        : " contacts__info")
                    }
                    to=""
                  >
                    Careers
                  </Link>
                  <Link
                    className={
                      "nav__link" +
                      (kind === "short"
                        ? " contacts__info__short"
                        : " contacts__info")
                    }
                    to=""
                  >
                    Contacts
                  </Link>
                </>
              }
            </ul>
          </div> */}
        </div>

        <div className="contacts__social">
          <div
            className={
              kind === "short" ? "footer__logo__short" : "footer__logo"
            }
          >
            Chrono<span className="footer__logo__span">Legal</span>
          </div>
          {/* <img className="footer__logo-img" alt="LOGO" src={Logo}></img> */}
          <div className="gap"></div>
          <div className="contacts__links">
            {/*  <a href="https://www.facebook.com/">
              <img
                src={FacebookPic}
                className="contacts__icon"
                alt="Picture social-list"
              />
            </a>
            <a href="mailto:mitin.oa@gmail.com">
              <img
                src={MailPic}
                className="contacts__icon"
                alt="Picture mail"
              />
            </a>
            <a href="tel:+48000000000">
              <img
                src={PhonePic}
                className="contacts__icon"
                alt="Picture phone"
              />
            </a>
            <a href="https://t.me/">
              <img
                src={TelegramPic}
                className="contacts__icon"
                alt="Picture telegram"
              />
            </a> */}
            <Widget
              handleNewUserMessage={handleNewUserMessage}
              profileAvatar={logo}
              title="ChronoLegal"
              subtitle="Get the legal service for you"
              emojis={true}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
