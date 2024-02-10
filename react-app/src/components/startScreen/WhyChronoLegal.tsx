import "../startScreen/startScreen.scss";
import { useMediaQuery } from "react-responsive";
import { useContext } from "react";
import { SignedInContext } from "../../App";

export default function WhyChronoLegal() {
  const isMobileScreen = useMediaQuery({ query: "(max-width: 1160px" });
  const isPhoneScreen = useMediaQuery({ query: "(max-width: 760px" });
  const signedIn = useContext(SignedInContext);
  return (
    <div style={{ backgroundColor: "#d4effe", padding: "50px 40px" }}>
      <div className="wrapper start_screen_content d-flex flex-lm-row flex-md-block">
        <div className="Content">
          <div
            className="only_title"
            style={{
              width: "100%",
              fontSize: "100px",
              fontWeight: "bold",
              textAlign: "center",
              lineHeight: "130px",
              fontFamily: "Montserrat",
              color: "#ec720b",
            }}
          >
            WHY CHRONOLEGAL?
          </div>
          <h2
            style={{
              color: "#033c5a",
              textAlign: "center",
              margin: "20px 0",
            }}
          >
            Save time!
          </h2>
          <p className="only_text">
            Because you should focus on the strategic work you do best and let
            us handle the rest. Turn contracts around in a day when needed and
            refocus the time, energy, and effort you currently spend on contract
            review on your core strategic activities.
          </p>
          <h2
            style={{
              color: "#033c5a",
              textAlign: "center",
              margin: "20px 0",
            }}
          >
            Save money!
          </h2>
          <p className="only_text">
            Because good contracts should be all about making or saving you
            money. Scale your legal team without adding to your headcount, avoid
            missing deadlines, and mitigate high-risk contractual issues before
            they become a problem.
          </p>
          <h2
            style={{
              color: "#033c5a",
              textAlign: "center",
              margin: "20px 0",
            }}
          >
            Grow your revenue!
          </h2>
          <p className="only_text">
            Because law should move at the speed of business. Reduce your
            contract review turnaround time, speed up your sales cycles, shorten
            your order-to-cash cycles, and accelerate your deal closing time.
          </p>
        </div>
      </div>
    </div>
  );
}
