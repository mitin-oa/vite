import React from "react";
import "../startScreen/startScreen.scss";
import { HeaderMenu } from "../header/header";
import StartScreenPic from "../../../public/start_screen_pic3.png";
import { Link } from "react-router-dom";
import { Footer } from "../footer/footer";

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
              Get the legal service for your <br></br> was never been easier!
            </h1>
            <p className="only_text">
              We offer to give a chance to make all your legal stuff ease
            </p>
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
