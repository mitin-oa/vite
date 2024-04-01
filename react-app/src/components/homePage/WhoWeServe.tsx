import "../homePage/startScreen.scss";
import { useMediaQuery } from "react-responsive";
import { useContext } from "react";
import { SignedInContext } from "../../App";
import Underline from "../Underline";
import Question from "/public/question_mark.png";

export default function WhoWeServe() {
  const isMobileScreen = useMediaQuery({ query: "(max-width: 1160px" });
  const isPhoneScreen = useMediaQuery({ query: "(max-width: 760px" });
  const signedIn = useContext(SignedInContext);
  return (
    <>
      <div style={{ backgroundColor: "#033c5a", padding: "0px 40px 50px" }}>
        <div className="title-container">
          <div className="home_title">WHO WE SERVE</div>
          <Underline />
        </div>
        <div className="wrapper d-flex flex-lm-row flex-md-block">
          <div className="Content" style={{ marginRight: "20px" }}>
            <h3
              style={{
                color: "#ec720b",
                textAlign: "start",
                margin: "20px 0",
              }}
            >
              Are you a business with no in-house lawyer?
            </h3>
            <p className="only_text" style={{ color: "white", margin: "0px" }}>
              No worries! Work with experienced legal talent without paying big
              law firm rates. Let our lawyers draft, review, redline, and
              negotiate your contracts for just a fraction of the price of a
              conventional law firm.
            </p>
            <h3
              style={{
                color: "#ec720b",
                textAlign: "start",
                margin: "20px 0",
              }}
            >
              Is your in-house legal team overwhelmed?
            </h3>
            <p className="only_text" style={{ color: "white", margin: "0px" }}>
              We’ve got you covered! Outsource your contracts to us. Let us act
              as an extension of your team and take on your contract review work
              stream to free you up and enable you to focus on strategic or
              higher-value matters.
            </p>
            <h3
              style={{
                color: "#ec720b",
                textAlign: "start",
                margin: "20px 0",
              }}
            >
              Is your sales or procurement team not thriving?
            </h3>
            <p className="only_text" style={{ color: "white", margin: "0px" }}>
              We can help! Leverage our expertise to help your team close more
              deals, achieve success, and optimize operational efficiency. Make
              your buy and sales cycles faster and frictionless. Turn contracts
              around in as little as one business day, when needed.
            </p>
            <h3
              style={{
                color: "#ec720b",
                textAlign: "start",
                margin: "20px 0",
              }}
            >
              Are you struggling to keep up with the flow of work in your law
              practice?
            </h3>
            <p className="only_text" style={{ color: "white", margin: "0px" }}>
              Share the heavy load and get your time back! Whether you’re
              looking for temporary coverage while one of your associates is
              absent or need some help because your practice is growing fast,
              we’ve got your back! Let us take care of your overflow work.
            </p>
          </div>
          <div className="vertical-strip"></div>
          <div className="WWS_picture"></div>
        </div>
      </div>
    </>
  );
}
