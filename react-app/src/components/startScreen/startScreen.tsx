import "../startScreen/startScreen.scss";
import HeaderMenu from "../header/header";
import StartScreenPic from "../../../public/start_screen_pic3.png";
import { Link } from "react-router-dom";
import Button from "../Button";
import { useMediaQuery } from "react-responsive";
import { useContext } from "react";
import { SignedInContext } from "../../App";

export default function StartScreen({
  kind,
  handleSignIn,
  setUserProfileData,
  handleSignUp,
  onSignIn,
  onSignUp,
  modalIsOpen,
  setIsOpen,
}: any) {
  const isMobileScreen = useMediaQuery({ query: "(max-width: 1160px" });
  const isPhoneScreen = useMediaQuery({ query: "(max-width: 760px" });
  const signedIn = useContext(SignedInContext);
  return (
    <section className="start_screen">
      <HeaderMenu
        kind={kind}
        handleSignIn={handleSignIn}
        setUserProfileData={setUserProfileData}
        handleSignUp={handleSignUp}
        onSignIn={onSignIn}
        onSignUp={onSignUp}
        modalIsOpen={modalIsOpen}
        setIsOpen={setIsOpen}
      />
      <div className="wrapper start_screen_content d-flex flex-lm-row flex-md-block">
        <div className="Content">
          <div
            className="only_title"
            style={{
              width: "100%",
              fontSize: "100px",
              fontWeight: "bold",
              textAlign: "start",
              lineHeight: "130px",
              fontFamily: "Montserrat",
            }}
          >
            <a
              style={{
                color: "#fbd0ac",
                marginLeft: "7vw",
              }}
            >
              drafting
            </a>
            <br />
            <a
              style={{
                color: "#f9b174",
                marginLeft: "14vw",
              }}
            >
              negotiation
            </a>
            <br />
            <a
              style={{
                color: "#f6913c",
                marginLeft: "21vw",
              }}
            >
              automation
            </a>
            <br />
            <a
              style={{
                color: "#ec720b",
                marginLeft: "28vw",
              }}
            >
              management
            </a>
            <br />
          </div>
          <h2
            style={{
              color: "white",
              textAlign: "center",
              margin: "20px 0",
            }}
          >
            24/7 contract review services simplified and delivered on time, and
            on budget!
          </h2>
          <p className="only_text">
            Your contracts drafted, reviewed, and negotiated by experienced
            lawyers when you need it and how you want it.
          </p>

          <Link to="/Services">
            <Button
              children="Get started"
              color="warning"
              onClick={() => null}
            />
          </Link>
          <p className="only_text">
            ChronoLegal helps businesses contract and close more deals, on time
            and on budget! Our attorneys, legal technologists, and consultants
            live and breathe commercial contracts. It’s all we do and think
            about. We won’t attempt to fix all your legal and business issues,
            but we will conquer your contracts!!!
          </p>
        </div>
        {/* {!isPhoneScreen ? (
          <div className="Content">
            <img
              className="start_screen_pet"
              src={StartScreenPic}
              alt="Picture start screen"
            />
          </div>
        ) : (
          <></>
        )} */}
      </div>
    </section>
  );
}
