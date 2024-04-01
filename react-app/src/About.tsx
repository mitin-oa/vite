import { useMediaQuery } from "react-responsive";
import Footer from "./components/footer/footer";
import AboutPicture from "../public/about_pic.png";
import HeaderMenu from "./components/header/header";

export default function About({
  onSignIn,
  onSignUp,
  handleSignIn,
  handleSignUp,
  setUserProfileData,
  modalIsOpen,
  setIsOpen,
}: any) {
  return (
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
      <div className="about-pic">ABOUT</div>
      <section className="main-content">
        <div className="wrapper">
          <div className="about-service">
            <h2 className="section-title">
              24/7 Contract Review Services Delivered on Time and on Budget!
            </h2>
            <p>
              ChronoLegal is dedicated to helping you contract and close deals
              efficiently. Our multinational team of experienced attorneys,
              legal practitioners, legal technologists, and consultants are
              passionate about contracts.
            </p>
            <p>
              We specialize in commercial contracts because we believe they are
              crucial for any business. Our clients range from Fortune 500
              enterprises to startups, and our services extend across various
              industries and countries.
            </p>
            <p>
              Leveraging our outstanding legal expertise, smart technology, and
              top-notch processes, we deliver high-quality, cost-effective, and
              time-efficient outsourced contract review services to help our
              clients close deals faster.
            </p>
            <p>
              Our team is committed to quick turnarounds, often delivering
              results in as little as one business day. We prioritize client
              satisfaction and strive to exceed expectations in every aspect of
              our service.
            </p>
            <p>
              Our attorneys are highly educated and experienced professionals
              who have held senior positions in businesses of all sizes. They
              bring a wealth of knowledge and practical insights to every
              project.
            </p>
            <p>
              We continuously seek ways to improve efficiency and reduce costs
              for our clients. Our solutions are designed to streamline
              processes and eliminate unnecessary activities, ensuring optimal
              outcomes.
            </p>
            <h2 className="section-title">How Can We Help You?</h2>
            <p>
              Do you have questions about our services? Please{" "}
              <a href="#" className="contact-link">
                reach out
              </a>
              , we're here to help!
            </p>
          </div>
        </div>
      </section>
      <Footer kind="short" />
    </div>
  );
}
