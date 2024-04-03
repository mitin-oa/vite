import { useMediaQuery } from "react-responsive";
import Footer from "./footer";
import HeaderMenu from "../header/header";

export default function Careers({
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
        <div className="Services-pic">CAREERS</div>
        <section className="main-content">
          <div className="wrapper">
            <div className="about_service">
              <h3 className="section-title">Careers</h3>
              <h6>
                Are you a go-getter and can-doer? If so, there’s a place for you
                here, irrespective of your background.
              </h6>

              <p>
                No matter what phase of your career you’re in, we need your
                unique perspective, experiences, and ideas. Come join our team
                of forward thinkers where you can grow as a professional, serve
                the community, and do remarkable work.
              </p>
              <p>
                To find out how you can become a member of our team, browse the
                opportunities below and apply today:
              </p>
              <p>
                <span>Lawyers and solicitors:</span> Are you an attorney? Do you
                have a servant's heart, an entrepreneurial spirit, and a good
                understanding of contract law and business processes? We would
                like to hear from you.
              </p>
              <p>
                <span>Legal Ops Consultants and Technologists:</span> Are you a
                good team player with a passion to streamline legal processes
                and deliver world-class legal solutions to clients? If you are a
                Legal Ops Consultant with experience, we need your expertise.
              </p>
              <p>
                <span>Other professionals:</span> In addition to the above,
                ChronoLegal always needs the services of several other
                professionals to carry out its mission. If your talent is in one
                of the following areas, we may also need your expertise: Sales,
                Customer Service, Human Resources, Management Information
                Technology, Accounting and Finance, Marketing, and Business
                Development.
              </p>
              <p>
                ChronoLegal is committed to providing equal employment
                opportunity to all applicants and employees. Our offices,
                employees, and partners are prohibited from discriminating on
                the basis of race, color, religion, sex, gender identity, sexual
                orientation, national origin, disability, age, genetic
                information, marital status, family/parental status, or any
                other status protected by applicable law.
              </p>
              <p>
                If you need a reasonable accommodation as part of the employment
                selection process, kindly email us. In your email, kindly tell
                us about the specific accommodation you are requesting and let
                us know which position you are applying for. If you have a
                disability that makes it difficult to state your interest in a
                position through our online application process, or if you
                require TTY/TDD assistance, please email us as well to tell us
                about your needs.
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
