import "../startScreen/startScreen.scss";
import HeaderMenu from "../header/header";
import StartScreenPic from "../../../public/start_screen_pic3.png";
import { Link } from "react-router-dom";
import Button from "../Button";
import { useMediaQuery } from "react-responsive";

function onOrder() {
  return (
    <>
      <Link className="nav__link nav__text" to="UpLoad">
        File Upload
      </Link>
    </>
  );
}
export default function StartScreen({
  kind,
  handleSignIn,
  setUserProfileData,
  handleSignUp,
  onSignIn,
  modalIsOpen,
  setIsOpen,
}: any) {
  const isMobileScreen = useMediaQuery({ query: "(max-width: 1160px" });
  const isPhoneScreen = useMediaQuery({ query: "(max-width: 760px" });

  return (
    <section className="start_screen">
      <HeaderMenu
        kind={kind}
        handleSignIn={handleSignIn}
        setUserProfileData={setUserProfileData}
        handleSignUp={handleSignUp}
        onSignIn={onSignIn}
        modalIsOpen={modalIsOpen}
        setIsOpen={setIsOpen}
      />
      <div className="wrapper start_screen_content d-flex flex-lm-row flex-md-block">
        <div className="Content">
          <h1 className="only_title">
            Get the legal service for you <br></br> was never been easier!
          </h1>
          <p className="only_text">
            We offer to give a chance to make all your legal stuff ease. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Laoreet id donec
            ultrices tincidunt.
          </p>
          <Link to="UpLoad">
            <Button children="Order Now" color="warning" onClick={() => null} />
          </Link>
        </div>
        {!isPhoneScreen ? (
          <div className="Content">
            <img
              className="start_screen_pet"
              src={StartScreenPic}
              alt="Picture start screen"
            />
          </div>
        ) : (
          <></>
        )}
      </div>
    </section>
  );
}
