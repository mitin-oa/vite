import "../startScreen/startScreen.scss";
import { useMediaQuery } from "react-responsive";
import { useContext } from "react";
import { SignedInContext } from "../../App";
import Time from "/public/time-fast.png";
import Money from "/public/piggy-bank.png";
import Revenue from "/public/revenue.png";

export default function WhyChronoLegal() {
  const isMobileScreen = useMediaQuery({ query: "(max-width: 1160px" });
  const isPhoneScreen = useMediaQuery({ query: "(max-width: 760px" });
  const signedIn = useContext(SignedInContext);
  return (
    <>
      <div className="home_title">WHY CHRONOLEGAL?</div>
      <div style={{ backgroundColor: "white", padding: "0px 40px 50px" }}>
        <div className="wrapper d-flex flex-lm-row flex-md-block">
          <div className="WCL_picture"></div>
          <div className="vertical-strip"></div>
          <div className="Content" style={{ marginLeft: "10px" }}>
            <h2
              style={{
                color: "#ec720b",
                textAlign: "center",
                margin: "20px 0",
              }}
            >
              <img
                src={Time}
                className="WCL_icon"
                alt="Picture social-list"
              ></img>
              Save time!
            </h2>
            <p
              className="only_text"
              style={{ color: "#033c5a", margin: "0px" }}
            >
              Because you should focus on the strategic work you do best and let
              us handle the rest. Turn contracts around in a day when needed and
              refocus the time, energy, and effort you currently spend on
              contract review on your core strategic activities.
            </p>
            <h2
              style={{
                color: "#ec720b",
                textAlign: "center",
                margin: "20px 0",
              }}
            >
              <img
                src={Money}
                className="WCL_icon"
                alt="Picture social-list"
              ></img>
              Save money!
            </h2>
            <p
              className="only_text"
              style={{ color: "#033c5a", margin: "0px" }}
            >
              Because good contracts should be all about making or saving you
              money. Scale your legal team without adding to your headcount,
              avoid missing deadlines, and mitigate high-risk contractual issues
              before they become a problem.
            </p>
            <h2
              style={{
                color: "#ec720b",
                textAlign: "center",
                margin: "20px 0",
              }}
            >
              <img
                src={Revenue}
                className="WCL_icon"
                alt="Picture social-list"
              ></img>
              Grow your revenue!
            </h2>
            <p
              className="only_text"
              style={{ color: "#033c5a", margin: "0px" }}
            >
              Because law should move at the speed of business. Reduce your
              contract review turnaround time, speed up your sales cycles,
              shorten your order-to-cash cycles, and accelerate your deal
              closing time.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
