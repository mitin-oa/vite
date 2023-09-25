import React from "react";
import "./startScreen.scss";
import { HeaderMenu } from "../header/header";
/* import StartScreenPet from "../img/start-screen-puppy.png"; */
import { Link } from "react-router-dom";

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
              Not only people <br></br>need a house
            </h1>
            <p className="only_text">
              We offer to give a chance to a little and nice puppy with an
              extremely wide and open heart. He or she will love you more than
              anybody else in the world, you will see!
            </p>
            <button className="button_only">
              {/* <Link className="button_text" to="#our_id">
                Make a friend
              </Link> */}
            </button>
          </div>
        </div>
      </section>
    );
  }
}
