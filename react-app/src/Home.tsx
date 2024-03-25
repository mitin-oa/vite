import Footer from "./components/footer/footer";
import HowItWorks from "./components/homePage/HowItWorks";
import WhyChronoLegal from "./components/homePage/WhyChronoLegal";
import HeaderMenu from "./components/header/header";
import WhoWeServe from "./components/homePage/WhoWeServe";
import OurClients from "./components/homePage/OurClients";
import SliderTop from "./components/homePage/SliderTop";
import ReadyToGet from "./components/homePage/ReadyToGet";
import FearuredIn from "./components/homePage/FeaturedIn";

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
        <SliderTop />
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
