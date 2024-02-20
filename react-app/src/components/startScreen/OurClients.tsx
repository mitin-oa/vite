import "../startScreen/startScreen.scss";
import { useMediaQuery } from "react-responsive";
import { useContext } from "react";
import { SignedInContext } from "../../App";
import SimpleSlider from "./Slider";

export default function OurClients() {
  const isMobileScreen = useMediaQuery({ query: "(max-width: 1160px" });
  const isPhoneScreen = useMediaQuery({ query: "(max-width: 760px" });
  const signedIn = useContext(SignedInContext);
  return (
    <>
      <div
        style={{
          backgroundImage: "url(../../public/WWS-pic.jpg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          padding: "40px 20vw 150px",
        }}
      >
        <div className="home_title">
          OUR CLIENTS LOVE US
          <div className="wrapper">
            <p
              className=" only_text"
              style={{
                color: "#ec720b",
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
