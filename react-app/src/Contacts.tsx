import { useMediaQuery } from "react-responsive";
import Footer from "./components/footer/footer";
import AboutPicture from "../public/about_pic.png";
import HeaderMenu from "./components/header/header";

export default function Contacts({
  onSignIn,
  onSignUp,
  handleSignIn,
  handleSignUp,
  setUserProfileData,
  modalIsOpen,
  setIsOpen,
}: any) {
  return (
    <>
      <div className="app">
        <HeaderMenu
          kind="short"
          onSignIn={onSignIn}
          onSignUp={onSignUp}
          handleSignUp={handleSignUp}
          handleSignIn={handleSignIn}
          setUserProfileData={setUserProfileData}
          modalIsOpen={modalIsOpen}
          setIsOpen={setIsOpen}
        />
        {/* <!-- Bootstrap "Containers" component. Taken from https://getbootstrap.com/docs/5.2/layout/containers/#how-they-work --> */}
        <section className="main-content">
          <h2 style={{ color: "#ff8307" }}>CONTACT</h2>
          <div className="about_service d-md-flex flex sm-column">
            <div className="about_service">
              <p>
                Regardless of where our people are located, we are all committed
                to draw from our experience and expertise, to deliver smart and
                efficient solutions that help our clients contract on time and
                on budget, anywhere in the world. To contact us, please call +1
                478-268-3446, or fill the form below or send an email to
                info@chronolegal.com and we will be in touch within hours.
              </p>
              <p>Contact us by filling out the form below.</p>
              <p style={{ color: "#ff8307" }}>OFFICES</p>
              <span style={{ backgroundColor: "#033c5a", color: "white" }}>
                Atlanta-USA
              </span>
              <p>
                11720 Amberpark Dr, Alpharetta, GA 30009, USA Email:
                americas@chronolegal.com
              </p>
              <span style={{ backgroundColor: "#033c5a", color: "white" }}>
                Limassol-Cyprus
              </span>
              <p>
                Vasileos Konstantinou Limassol Cyprus Email:
                europe@chronolegal.com
              </p>
              <span style={{ backgroundColor: "#033c5a", color: "white" }}>
                London-UK
              </span>
              <p>
                1st floor, 415 High Street Stratford, London E15 4QZ United
                Kingdom Email: europe@chronolegal.com
              </p>
              <span style={{ backgroundColor: "#033c5a", color: "white" }}>
                New York-USA
              </span>
              <p>
                980 6th Avenue New York NY 10018 Email: americas@chronolegal.com
              </p>
              <span style={{ backgroundColor: "#033c5a", color: "white" }}>
                Paris, France
              </span>
              <p>
                33 Rue La Fayette Paris, le-de-France 75009, France Email:
                europe@chronolegal.com
              </p>
              <span style={{ backgroundColor: "#033c5a", color: "white" }}>
                Oakville (ON)-Canada
              </span>
              <p>
                1075 North Service Road West Unit 100 Oakville, ON L6M 2G2
                Canada Email: americas@chronolegal.com
              </p>
            </div>
          </div>
        </section>

        {/* <!-- END OF Bootstrap "Containers" component --> */}
      </div>
      <Footer kind={"short"} />
    </>
  );
}
