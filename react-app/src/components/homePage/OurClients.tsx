import "../homePage/startScreen.scss";
import { useMediaQuery } from "react-responsive";
import { useContext } from "react";
import { SignedInContext } from "../../App";
import SimpleSlider from "./SliderBottom";
import Underline from "../Underline";
import FearuredIn from "./FeaturedIn";
import Pic1 from "/public/msn.png";
import Pic2 from "/public/busines-insider.jpg";
import Pic3 from "/public/medscape.png";
import Pic4 from "/public/usnews.png";
import Pic5 from "/public/yahoo.png";
import Pic6 from "/public/hcp.png";

const featuredIn_bottom_pictures = [
  { image: Pic1 },
  { image: Pic2 },
  { image: Pic3 },
  { image: Pic4 },
  { image: Pic5 },
  { image: Pic6 },
];

export default function OurClients() {
  const isMobileScreen = useMediaQuery({ query: "(max-width: 1160px" });
  const isPhoneScreen = useMediaQuery({ query: "(max-width: 760px" });
  const signedIn = useContext(SignedInContext);
  return (
    <>
      <div className="OCL_picture">
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div className="title-container">
            <div className="home_title">OUR CLIENTS LOVE US</div>
            <Underline />
          </div>
          <p
            className="only_text"
            style={{
              color: "#033c5a",
              fontWeight: "bold",
              textAlign: "center",
              marginBottom: "40px",
            }}
          >
            Are you worried about what is in your contracts? Our clients aren’t!
            We’re great at what we do, and people love us. Don't just take our
            word for it. See below what our clients have to say about us.
          </p>
          <SimpleSlider />
        </div>
        <FearuredIn
          children={featuredIn_bottom_pictures}
          style="featuredIn-bottom-container"
        />
      </div>
    </>
  );
}
