import React from "react";
import "../startScreen/startScreen.scss";
import { HeaderMenu } from "../header/header";
import StartScreenPic from "../../../public/start_screen_pic3.png";
import { Link } from "react-router-dom";
import Button from "../Button";
export default class StartScreen extends React.Component {
  static defaultProps = {
    // if needed
  };

  render() {
    function onOrder() {
      return (
        <Link className="button_text" to="#our_id">
          Order Now
        </Link>
      );
    }
    return (
      <section className="start_screen">
        <HeaderMenu />
        <div className="wrapper start_screen_content">
          <div className="Content">
            <h1 className="only_title">
              Get the legal service for you <br></br> was never been easier!
            </h1>
            <p className="only_text">
              We offer to give a chance to make all your legal stuff ease. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Laoreet id
              donec ultrices tincidunt.
            </p>
            <Button children="Order Now" color="warning" onClick={onOrder} />
          </div>
          <img className="start_screen_pet" src={StartScreenPic} alt="Puppy" />
        </div>
      </section>
    );
  }
}
