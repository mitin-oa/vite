import Footer from "./components/footer/footer";
import HowItWorks from "./components/homePage/HowItWorks";
import WhyChronoLegal from "./components/homePage/WhyChronoLegal";
import HeaderMenu from "./components/header/header";
import WhoWeServe from "./components/homePage/WhoWeServe";
import OurClients from "./components/homePage/OurClients";
import ReadyToGet from "./components/homePage/ReadyToGet";
import SliderAnimated from "./components/SliderAnimated";

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
        <SliderAnimated />
        <HowItWorks />
        <WhyChronoLegal />
        <WhoWeServe />
        <OurClients />
        <ReadyToGet />
      </div>

      <Footer kind="full" />
    </>
  );
}
