import { useMediaQuery } from "react-responsive";
import Footer from "./footer";
import AboutPicture from "../public/about_pic.png";
import HeaderMenu from "../header/header";
import CollapseButton from "../CollapseButton";

const offises = [
  {
    city: "Atlanta-USA",
    adress: {
      line1: "11720 Amberpark Dr,",
      line2: "Alpharetta, GA 30009, USA",
      line3: "Email: americas@chronolegal.com",
    },
  },
  {
    city: "Limassol-Cyprus",
    adress: {
      line1: "Vasileos Konstantinou",
      line2: "Limassol Cyprus",
      line3: "Email: europe@chronolegal.com",
    },
  },
  {
    city: "London-UK",
    adress: {
      line1: "1st floor, 415 High Street Stratford,",
      line2: "London E15 4QZ United Kingdom",
      line3: "Email: europe@chronolegal.com",
    },
  },
  {
    city: "New York-USA",
    adress: {
      line1: "980 6th Avenue,",
      line2: "New York NY 10018",
      line3: "Email: americas@chronolegal.com",
    },
  },
  {
    city: "Oakville (ON)-Canada",
    adress: {
      line1: "1075 North Service Road West Unit 100 ",
      line2: "Oakville, ON L6M 2G2 Canada",
      line3: "Email: americas@chronolegal.com",
    },
  },
  {
    city: "Paris, France",
    adress: {
      line1: "33 Rue La Fayette",
      line2: "Paris, le-de-France 75009, France",
      line3: "Email: europe@chronolegal.com",
    },
  },
];

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
        <div className="Services-pic">CONTACTS</div>
        <section className="main-content">
          <div className="wrapper">
            <div className="about-service">
              <p>
                Regardless of where our people are located, we are all committed
                to draw from our experience and expertise, to deliver smart and
                efficient solutions that help our clients contract on time and
                on budget, anywhere in the world. To contact us, please call{" "}
                <span style={{ color: "#ec720b" }}>+1 478-268-3446</span>, or
                fill the form below or send an email to{" "}
                <span style={{ color: "#ec720b" }}>info@chronolegal.com</span>{" "}
                and we will be in touch within hours.
              </p>
              <p className="section-title">OFFICES</p>
              {offises.map((item: any) => {
                return <CollapseButton value={item.city} label={item.adress} />;
              })}
            </div>
          </div>
        </section>

        {/* <!-- END OF Bootstrap "Containers" component --> */}
      </div>
      <Footer kind={"short"} />
    </>
  );
}
