import { useMediaQuery } from "react-responsive";
import Footer from "./components/footer/footer";
import AboutPicture from "../public/about_pic.png";
import HeaderMenu from "./components/header/header";

export default function Services({
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
          <h3 style={{ color: "#ec720b" }}>Contract drafting</h3>
          <h6>Protect Your Business With Bulletproof Contracts!</h6>
          <div className="about_service d-md-flex flex sm-column">
            <div className="about_service">
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
            </div>
          </div>
          <h2 style={{ color: "#ff8307" }}>
            GET HELP WITH YOUR CONTRACTS TODAY!
          </h2>
          <p>
            Don’t leave the most important documents in your business to chance.
            Let ChronoLegal protect your business interests through meticulously
            drafted contracts!
          </p>

          <h3 style={{ color: "#ec720b" }}>Contract Analysis</h3>
          <h6>Understand the fine print in your contracts!</h6>
          <div className="about_service d-md-flex flex sm-column">
            <div className="about_service">
              <p>
                Contracts are the backbones of all businesses. Think of them as
                the software or operating system of businesses. In the same way
                that "bugs" in the code behind the software cause it to
                malfunction, similarly, gaps and errors in your contracts can
                create issues for your business and reduce your revenue. Such
                gaps and errors include:
                <ul>
                  <li>
                    Unforeseen edge cases that aren't dealt with properly in the
                    contract
                  </li>
                  Terms that aren't detailed enough to produce the desired
                  results
                  <li>
                    Absence of dispute resolution clauses or other key terms
                  </li>
                  <li>
                    Outdated language or terminology that hasn't kept up with
                    changes in law or technology
                  </li>
                  <li>
                    Unforeseen conflicts and inconsistencies between existing
                    contracts
                  </li>
                </ul>
              </p>

              <p>
                Contract analysis is the process of analyzing and evaluating
                contracts to identify such gaps. It is a form of contract audit.
                We know what you’re thinking. Shouldn’t the process you just
                described be called contract review? Well, no! Although this
                option is usually what most people have in mind when it comes to
                having a contract reviewed, contract analysis and contract
                review are entirely different processes.
              </p>
              <p>
                While both activities involve looking closely at contracts, they
                occur at different times and produce different results. Contract
                analysis can occur at any point in the contract lifecycle,
                namely before entering into a contract, after executing it, or
                even after terminating it, whereas contract review typically
                happens before a contract has been signed. Contract analysis
                involves combing through the contract to identify any gaps,
                ambiguities, or potential risks whereas contract review
                typically involves redlining and may include negotiating the
                contract as well.
              </p>
            </div>
            <div className="about_service">
              <p>
                We are here to help you analyze your contract. Whether your
                contract is yet to be signed or has already been signed,
                ChronoLegal’s lawyers can analyze it to help you understand each
                party’s obligations under the agreement, identify any issues,
                and draw your attention to anything that negatively impacts your
                interests or has the potential to negatively impact your
                interests down the road.
              </p>
              <p>
                The goal of our contract analysis service is always to help you
                gather insights to improve your decision-making and provide you
                with information to make your contract better. Our lawyers are
                meticulous. After assessing the terms of your contract, we will
                let you know if there are any potential risks you should be
                especially aware of, and make recommendations to strengthen your
                contract, ensuring it aligns with your objectives and adequately
                protects your interests.
              </p>
              <p>
                We can help you analyze a wide range of contracts, including
                Partnership & Shareholder Agreements, Investment & Funding
                Agreements, Services Agreements, Master Service Agreements
                (MSAs), Statements of Work (SOWs), Work Orders (WOs) Data
                Processing Agreements (DPAs), Software as a Service (SaaS)
                Agreements, Service Level Agreements (SLAs), End-user license
                agreements (EULAs), Privacy policies, Purchase Orders,
                Purchasing Agreements, Vendor/Supplier Agreements,
                Non-Disclosure Agreements (NDAs), Non-compete Agreements (NCAs),
                Employee Contracts, Consulting Agreements, IP assignment
                agreements, Technology Assignment Agreements, Loan Agreements,
                Franchise Agreements, and Real Estate Contracts.
              </p>
            </div>
          </div>
          <h2 style={{ color: "#ff8307" }}>
            READY TO GET YOUR CONTRACTS ANALYZED?
          </h2>
          <p>
            • Our team is available to support you! Let us work together to
            identify opportunities and risks in your contracts both
            pre-signature and post-signature.{" "}
            <a style={{ color: "#ff8307" }}>Contact us!</a>
          </p>

          <h3 style={{ color: "#ec720b" }}>Contract Review</h3>
          <h6>Contracting done right and fast!</h6>
          <div className="about_service d-md-flex flex sm-column">
            <div className="about_service">
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
            </div>
            <div className="about_service">
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
            </div>
          </div>
          <h2 style={{ color: "#ff8307" }}>
            TAKE YOUR CONTRACTING UP A NOTCH!
          </h2>
          <p>
            Outsource your contract review to ChronoLegal and accelerate your
            deal closing time. Order a Review or contact us to learn more about
            our contract review services!
          </p>
        </section>

        {/* <!-- END OF Bootstrap "Containers" component --> */}
      </div>
      <Footer kind={"short"} />
    </>
  );
}
