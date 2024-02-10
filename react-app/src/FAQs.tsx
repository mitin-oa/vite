import { useMediaQuery } from "react-responsive";
import Footer from "./components/footer/footer";
import AboutPicture from "../public/about_pic.png";
import HeaderMenu from "./components/header/header";

export default function FAQs({
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
          <h2>
            24/7 Contract review Services delivered on time, and on budget!
          </h2>
          <div className="about_service d-md-flex flex sm-column">
            <div className="about_service">
              <p>
                ChronoLegal exists to help you contract and close more deals, on
                time and on budget! Our vision is driven forth by a
                multinational team of experienced attorneys, legal
                practitioners, legal technologists, and consultants who are
                passionate about contracts.
              </p>
              <p>
                We live and breathe commercial contracts; it’s all we do and
                think about. We won’t try to solve all your legal and business
                problems, but we will conquer your contracts!!!
              </p>
              <p>
                We focus on commercial contracts because we believe that they
                are the most important documents for any business. Our clients
                include Fortune 500 enterprises, leading technology companies,
                start-ups, SMEs, in-house legal departments, procurement teams,
                and law firms in the US, the UK, Canada, and France.
              </p>
              <p>
                By combining our outstanding legal expertise, smart technology,
                and top-notch processes, we are able to deliver high-quality,
                cost-effective, and time-efficient end to end outsourced
                contract review services to our clients, helping them close
                deals faster.
              </p>
              <p>
                Our team will turn your contracts around in as little as one
                business day, when needed. We are commercially minded and
                deliver delight to our clients, doing all that can be done and
                delivering more than is expected.
              </p>
              <p>
                Our attorneys are smart, experienced, and practical. They were
                educated at top law schools and trained in some of the most
                prestigious law firms in the world. Many of them have held
                senior in-house counsel positions in businesses of all sizes and
                are experts across a range of industries.
              </p>
            </div>
            <div className="about_service">
              <img
                className="about_service__picture"
                src={AboutPicture}
                alt="Picture"
              />

              <p>
                We are continually striving to find ways to help our clients
                save time and money. We achieve this by ensuring that efficiency
                is built into our solutions, through a combination of
                appropriate resourcing, smart use of technology and a continuous
                improvement methodology which emphasizes the identification and
                reduction of unnecessary activity cycles such as excessive
                rounds of negotiation.
              </p>
              <h2>HOW CAN WE HELP YOU?</h2>
              <p>
                Do you have questions about our services? Please{" "}
                <a style={{ color: "#ff8307" }}>reach out</a>, we have answers!
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
