import { useMediaQuery } from "react-responsive";
import Footer from "./footer/footer";
import HeaderMenu from "./header/header";

export default function ContractDrafting({
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
              <h3 className="section-title">Contract Drafting</h3>
              <h6>Protect Your Business With Bulletproof Contracts!</h6>

              <p>
                Contracts are the backbone of any successful business. They play
                a crucial role in achieving your objectives, safeguarding your
                interests, protecting your interests, and advancing your goals.
                Unfortunately, with the rise of online DIY contract templates,
                many businesses try to cobble templates they find online into
                documents which very often, they don’t understand. The
                recipients of a flawed agreement are not likely to alert the
                other party, especially if the poorly drafted document favors
                them.
              </p>
              <p>
                When it comes to contract drafting, attention to detail is
                crucial. A well-drafted contract can shield you and your company
                from future legal, financial, and professional problems. On the
                other hand, a badly written one puts you and your company at
                serious risk. ChronoLegal offers top-notch contract drafting
                services tailored to meet the specific needs of your business.
                Our drafters are experienced lawyers who specialize in creating
                clear, concise, and legally sound documents that accurately
                reflect the intentions of the parties involved.
              </p>
              <p>
                Whether you are entering into a new business deal, or launching
                a new product or service, our lawyers will work closely with you
                to understand your business’s goals and needs. After that, we'll
                go over your options with you and give you advice on the kinds
                of contracts you might need to get.
              </p>
              <p>
                Once we have a good understanding of your current practices and
                processes, we will then draft agreements that protect your
                rights, mitigate potential risks, and work well for your
                company. Furthermore, if from our experience with your industry,
                we feel that there may be ways in which you could improve your
                current practices, we will discuss this with you and ensure you
                have the tools and contracts in place to support the
                implementation of any new approach.
              </p>
              <p>
                If on the other hand, you already have contract templates you
                are using, our lawyers would be more than happy to carry out a
                health check of your templates and advise you on any
                improvements that could be made, thus providing you with the
                comfort that your business is running with robust contracts in
                place.
              </p>
              <p>
                Our goal is always to provide you with business contracts that
                are well-drafted, legally sound, tailored to your specific
                needs, and designed to minimize potential risks. We avoid
                legalese and ensure that you and your counterparty understand
                what you are signing, making them more likely to accept without
                hesitation.
              </p>
              <p>
                We have extensive experience in contract law and are well-versed
                in drafting a wide range of contracts, including Partnership &
                Shareholder Agreements, Partnership & Joint Venture Agreements,
                Investment & Funding Agreements, Services Agreements, Master
                Service Agreements (MSAs), Statements of work (SOWs), Work
                Orders (WOs) Data Processing Agreements (DPAs), Software as a
                Service (SaaS) Agreements, Service Level Agreements (SLAs),
                End-user license agreements (EULAs), Privacy policies, Purchase
                orders, Purchase agreements, Vendor/Supplier Agreements,
                Non-Disclosure Agreements (NDAs), Non-compete Agreements (NCAs),
                Employee Contracts, Consulting Agreements, IP assignment
                agreements, Technology assignment agreements, Copyright license
                agreements, sale agreements, Loan agreements, Franchise
                agreements, commercial real estate contracts, Construction
                agreements, Lease agreements…etc.
              </p>

              <h4 className="section-bottom-title">
                GET HELP WITH YOUR CONTRACTS TODAY!
              </h4>
              <p>
                Don’t leave the most important documents in your business to
                chance. Let ChronoLegal protect your business interests through
                meticulously drafted contracts!
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
