import { useMediaQuery } from "react-responsive";
import Footer from "./footer/footer";
import HeaderMenu from "./header/header";

export default function ContractAnalysis({
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
              <h3 className="section-title">Contract Analysis</h3>
              <h6>Understand the fine print in your contracts!</h6>

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

              <h4 className="section-bottom-title">
                READY TO GET YOUR CONTRACTS ANALYZED?
              </h4>
              <p>
                • Our team is available to support you! Let us work together to
                identify opportunities and risks in your contracts both
                pre-signature and post-signature.{" "}
                <a style={{ color: "#ff8307" }}>Contact us!</a>
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
