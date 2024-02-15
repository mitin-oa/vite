import { useState } from "react";
import Alert from "./components/Alert";
import Footer from "./components/footer/footer";
import ModalWindow from "./components/modal/modal";
import StartScreen from "./components/startScreen/startScreen";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import HowItWorks from "./components/startScreen/HowItWorks";
import WhyChronoLegal from "./components/startScreen/WhyChronoLegal";
import HeaderMenu from "./components/header/header";

export default function Home({
  kind,
  handleSignIn,
  onSignIn,
  onSignUp,
  setUserProfileData,
  handleSignUp,
  modalIsOpen,
  setIsOpen,
}: any) {
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  const [inputValue, setInputValue] = useState("");

  const showSwal = () => {
    withReactContent(Swal).fire({
      title: <i>Input something</i>,
    });
  };

  return (
    <>
      <div className="app">
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
        <StartScreen
          kind={kind}
          handleSignIn={handleSignIn}
          onSignIn={onSignIn}
          onSignUp={onSignUp}
          setUserProfileData={setUserProfileData}
          handleSignUp={handleSignUp}
          modalIsOpen={modalIsOpen}
          setIsOpen={setIsOpen}
        />
        <HowItWorks />
        <WhyChronoLegal />
      </div>

      <Footer kind="full" />
    </>
  );
}
