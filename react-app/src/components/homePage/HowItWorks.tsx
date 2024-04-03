import "../homePage/startScreen.scss";
import { useMediaQuery } from "react-responsive";
import { useContext } from "react";
import { SignedInContext } from "../../App";
import Underline from "../Underline";

export default function HowItWorks() {
  const isMobileScreen = useMediaQuery({ query: "(max-width: 1160px" });
  const isPhoneScreen = useMediaQuery({ query: "(max-width: 760px" });
  const signedIn = useContext(SignedInContext);
  return (
    <>
      <div className="title-container">
        <div className="home_title">HOW IT WORKS</div>
        <Underline />
      </div>
      <div className="how-it-works">
        <div className="d-flex flex-lm-row flex-md-block">
          <div className="Content">
            <h2 className="section-subtitle">Contract review made easy!</h2>
            <p className="only_text">
              Your contracts drafted, reviewed, and negotiated by experienced
              lawyers when you need it and how you want it.
            </p>

            <p className="only_text">
              Whether you’re a founder of a start-up without an in-house
              counsel, a general counsel looking for temporary coverage while a
              member of your legal team is absent, a sales or procurement leader
              trying to close deals faster, or a law firm manager with an urgent
              project who can’t add full-time headcount to your team at the
              moment, our business is all about supporting yours. Outsource your
              contracts to us and relax, we’ve got you covered!
            </p>
            <p className="only_text">
              Let us draft, review, revise, redline, and negotiate your
              contracts.
            </p>
            <h2
              style={{
                color: "#ec720b",
              }}
            >
              It is as easy as 1, 2, 3, 4, 5
            </h2>
            <div
              style={{
                width: "100%",

                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div className="HIV">
                <div
                  style={{
                    backgroundColor: "#ec720b",
                    width: "6%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  1
                </div>
                <div>Tell us a bit about your contract</div>
              </div>

              <div className="HIV">
                <div
                  style={{
                    backgroundColor: "#ec720b",
                    width: "6%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  2
                </div>
                <div>Upload your contract</div>
              </div>

              <div className="HIV">
                <div
                  style={{
                    backgroundColor: "#ec720b",
                    width: "6%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  3
                </div>
                <div>Tell us what you need and when you need it</div>
              </div>

              <div className="HIV">
                <div
                  style={{
                    backgroundColor: "#ec720b",
                    width: "6%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  4
                </div>
                <div>Pay ChronoLegal’s fees </div>
              </div>

              <div className="HIV">
                <div
                  style={{
                    backgroundColor: "#ec720b",
                    width: "6%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  5
                </div>
                <div>Receive your contract draft, analysis, or review.</div>
              </div>
            </div>
          </div>
          <div className="HIW_picture"></div>
        </div>
      </div>
    </>
  );
}
