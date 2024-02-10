import "../startScreen/startScreen.scss";
import { useMediaQuery } from "react-responsive";
import { useContext } from "react";
import { SignedInContext } from "../../App";

export default function HowItWorks() {
  const isMobileScreen = useMediaQuery({ query: "(max-width: 1160px" });
  const isPhoneScreen = useMediaQuery({ query: "(max-width: 760px" });
  const signedIn = useContext(SignedInContext);
  return (
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
          HOW IT WORKS
        </div>
        <h2
          style={{
            color: "#033c5a",
            textAlign: "center",
            margin: "20px 0",
          }}
        >
          Contract review made easy!
        </h2>
        <p className="only_text">
          Your contracts drafted, reviewed, and negotiated by experienced
          lawyers when you need it and how you want it.
        </p>

        <p className="only_text">
          Whether you’re a founder of a start-up without an in-house counsel, a
          general counsel looking for temporary coverage while a member of your
          legal team is absent, a sales or procurement leader trying to close
          deals faster, or a law firm manager with an urgent project who can’t
          add full-time headcount to your team at the moment, our business is
          all about supporting yours. Outsource your contracts to us and relax,
          we’ve got you covered!
        </p>
        <p>
          Let us draft, review, revise, redline, and negotiate your contracts.
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
            justifyContent: "space-between",
            margin: "50px 0px",
          }}
        >
          <div
            className="HIV"
            style={{
              backgroundColor: "#fac69a",
            }}
          >
            <span>1</span>
            <div
              style={{
                fontSize: "25px",
              }}
            >
              Tell us a bit about your contract
            </div>
          </div>

          <div
            className="HIV"
            style={{
              backgroundColor: "#f9b174",
            }}
          >
            2{" "}
            <div
              style={{
                fontSize: "25px",
              }}
            >
              Upload your contract
            </div>
          </div>

          <div
            className="HIV"
            style={{
              backgroundColor: "#f79c4f",
            }}
          >
            3
            <div
              style={{
                fontSize: "25px",
              }}
            >
              Tell us what you need and when you need it
            </div>
          </div>

          <div
            className="HIV"
            style={{
              backgroundColor: "#f58729",
            }}
          >
            4
            <div
              style={{
                fontSize: "25px",
              }}
            >
              Pay ChronoLegal’s fees{" "}
            </div>
          </div>

          <div
            className="HIV"
            style={{
              backgroundColor: "#ec720b",
            }}
          >
            5{" "}
            <div
              style={{
                fontSize: "24px",
              }}
            >
              Receive your contract draft, analysis, or review.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
