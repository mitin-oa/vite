import "../startScreen/startScreen.scss";
import { useMediaQuery } from "react-responsive";
import { useContext } from "react";
import { SignedInContext } from "../../App";
import SimpleSlider from "./SliderBottom";

export default function OurClients() {
  const isMobileScreen = useMediaQuery({ query: "(max-width: 1160px" });
  const isPhoneScreen = useMediaQuery({ query: "(max-width: 760px" });
  const signedIn = useContext(SignedInContext);
  return (
    <>
      <div
        className="OCL_picture"
        style={{
          padding: "40px 20vw 150px",
        }}
      >
        <div className="home_title">
          OUR CLIENTS LOVE US
          <div className="wrapper">
            <p
              className="only_text"
              style={{
                color: "#ec720b",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Are you worried about what is in your contracts? Our clients
              aren’t! We’re great at what we do, and people love us. Don't just
              take our word for it. See below what our clients have to say about
              us.
            </p>
          </div>
        </div>
        <SimpleSlider />
      </div>
    </>
  );
}
