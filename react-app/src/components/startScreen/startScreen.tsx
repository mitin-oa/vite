import React from "react";
import "./startScreen.scss";
import { HeaderMenu } from "../header/header";
import StartScreenPic from "../../../public/Logo.jpeg";
import { Link } from "react-router-dom";
import SignIn from "../modal/modal";

export default class StartScreen extends React.Component {
  static defaultProps = {
    // if needed
  };

  render() {
    return (
      <section className="start_screen">
        <HeaderMenu />
        <div className="wrapper start_screen_content">
          <div className="Content">
            <h1 className="only_title">
              App for the people <br></br>who suffer from PDFs
            </h1>
            <p className="only_text">We offer to give a chance to a</p>
            <button className="button_only">
              <Link className="button_text" to="#our_id">
                Order Now
              </Link>
            </button>
          </div>
          <img className="start_screen_pet" src={StartScreenPic} alt="Puppy" />
        </div>
      </section>
    );
  }
}
