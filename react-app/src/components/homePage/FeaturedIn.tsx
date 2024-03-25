import "../homePage/startScreen.scss";
import { useMediaQuery } from "react-responsive";
import { useContext } from "react";
import { SignedInContext } from "../../App";
import Pic1 from "../../../public/forbes.png";
import Pic2 from "../../../public/above-the-low.png";
import Pic3 from "../../../public/bloomberg.png";
import Pic4 from "../../../public/legaltech.png";
import Pic5 from "../../../public/ic.png";
import Pic6 from "../../../public/daily-journal.png";

export default function FearuredIn() {
  const isMobileScreen = useMediaQuery({ query: "(max-width: 1160px" });
  const isPhoneScreen = useMediaQuery({ query: "(max-width: 760px" });
  const signedIn = useContext(SignedInContext);
  return (
    <>
      <div className="featuredIn-container">
        <p style={{ textAlign: "center", margin: "10px 0 10px" }}>
          Fearured In
        </p>
        <div className="featuredIn">
          <img
            src={Pic1}
            className="featuredIn__pic"
            alt="Picture social-list"
          ></img>
          <img
            src={Pic2}
            className="featuredIn__pic"
            alt="Picture social-list"
          ></img>
          <img
            src={Pic3}
            className="featuredIn__pic"
            alt="Picture social-list"
          ></img>
          {/*  <img
            src={Pic4}
            className="featuredIn__pic"
            alt="Picture social-list"
          ></img>
          <img
            src={Pic5}
            className="featuredIn__pic"
            alt="Picture social-list"
          ></img> */}
          <img
            src={Pic6}
            className="featuredIn__pic"
            alt="Picture social-list"
          ></img>
        </div>
      </div>
    </>
  );
}
