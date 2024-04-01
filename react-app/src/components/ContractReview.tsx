import { useMediaQuery } from "react-responsive";
import Footer from "./footer/footer";
import HeaderMenu from "./header/header";

export default function ContractReview({
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
        <div className="Services-pic">SERVICES</div>
        <section className="main-content">
          <div className="wrapper">
            <div className="about_service">
              <h3 className="section-title">Contract Review</h3>
              <h6>Contracting done right and fast!</h6>
              <p>
                As businesses deal with increasing volumes of contracts, they
                need to establish cost-effective and streamlined review
                processes to ensure that these contracts are handled
                efficiently. Working with ChronoLegal is one way to do this.
              </p>
              <p>
                By outsourcing routine contract review to ChronoLegal, you can
                avoid the overhead costs associated with establishing an
                internal legal department or those linked with hiring additional
                in-house legal staff, all while benefiting from our competitive
                pricing.
              </p>

              <p>
                We can scale our operations to handle fluctuations in your
                workload. Whether you are dealing with a sudden surge in
                contracts due to a merger or need ongoing support for routine
                contract review, we can work with you to ensure that your
                contracts are reviewed efficiently without overburdening your
                in-house legal team.
              </p>
              <p>
                So, what is contract review exactly? Contract review goes a step
                further than contract analysis. It does not only involve
                analyzing a contract to assess its accuracy, clarity,
                enforceability, and thoroughness, it also generally encompasses
                contract modification and negotiation.
              </p>
              <p>
                With contract review, you ensure that you are not missing
                anything. Instead of having us just analyze your contract, point
                out what needs to be fixed, and answer your questions, with
                contract review, we will add comments to your agreement, change
                the wording as necessary, and provide you with a revised version
                of your contract that you can send to the other party for
                review.
              </p>
              <p>
                The other party will receive a redlined copy of the agreement
                with the proposed changes, which they can accept or reject. This
                is often referred to as "redlining a contract" in the legal
                community and usually helps the whole negotiation process move
                along more smoothly.
              </p>
              <p>
                This is the option that you should choose if the agreement is
                for a major deal, or the subject matter of the contract is
                important enough that you want to make sure you are protected to
                the maximum extent possible. It is generally expected that
                contracts of this type are redlined and exchanged between
                parties a few times until a finalized version is agreed to.
              </p>
              <p>
                We have extensive experience in contract law and can help you
                review a wide range of contracts, including Partnership &
                Shareholder Agreements, Investment & Funding Agreements,
                Services Agreements, Master Service Agreements (MSAs),
                Statements of Work (SOWs), Work Orders (WOs) Data Processing
                Agreements (DPAs), Software as a Service (SaaS) Agreements,
                Service Level Agreements (SLAs), End-User License Agreements
                (EULAs), Privacy Policies, Purchase Orders, Purchasing
                Agreements, Vendor/Supplier Agreements, Non-Disclosure
                Agreements (NDAs), Non-Compete Agreements (NCAs), Employee
                Contracts, Consulting Agreements, IP Assignment Agreements,
                Technology Assignment Agreements, Loan Agreements, Franchise
                Agreements, and Real Estate Contracts.
              </p>

              <h4 className="section-bottom-title">
                TAKE YOUR CONTRACTING UP A NOTCH!
              </h4>
              <p>
                Outsource your contract review to ChronoLegal and accelerate
                your deal closing time. Order a Review or contact us to learn
                more about our contract review services!
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
