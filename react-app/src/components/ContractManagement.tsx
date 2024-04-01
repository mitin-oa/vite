import { useMediaQuery } from "react-responsive";
import Footer from "./footer/footer";
import HeaderMenu from "./header/header";

export default function ContractManagement({
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
              <h3 className="section-title">Contract Management</h3>
              <h6>Conquer your contracts!</h6>

              <p>
                Effective contract management is a core business need for any
                organization. However, the majority of businesses say that it's
                a fragmented, labor-intensive, ineffective, inefficient, and
                risky process. Studies reveal that about 62% of companies manage
                over 100 contracts a month, and 26% of them manage over 500
                agreements per month (Ultria CLM Survey, 2019).
              </p>
              <p>
                12 to 15 percent of these contracts cannot be located or are not
                recorded. Unmanageable risks may arise when businesses do not
                manage their contracts well and have no mechanisms in place to
                monitor their contractual obligations or ensure suppliers carry
                out their prescribed duties under the contracts.
              </p>

              <p>
                In the absence of a good technology tool to help, adequate
                resources, and the right budget, it can be difficult to manage
                contracts efficiently, keep track of any contractual
                obligations, or identify commercial opportunities as they arise.
                Even purchasing a CLM tool and hiring a contract manager is
                often not sufficient.
              </p>
              <p>
                A good contract management solution like ChronoLegal’s Contract
                Management-as-a-Service is what you need to manage your
                contracts well. ChronoLegal’s Contract Management-as-a-Service
                leverages the power of our skillful technologists, bespoke
                tools, and stellar processes to help you manage your documents
                well, ensure easy access to information, give you a clear
                understanding of your contractual portfolio, and narrow down on
                key details such as renewals or price increases.
              </p>
              <p>
                Our Contract Management-as-a-Service solution is centered on
                reducing both sales-cycle and buy-cycle time and improving
                contract compliance to deliver value. We have the right
                professionals, technology, and processes to:
              </p>
              <ul>
                <li>
                  Track the status of contractual documents, including reviews,
                  approvals, and amendments.
                </li>
                <li>
                  Set reminders for deadlines and ensure timely closure of
                  deals.
                </li>
                <li>
                  Ensure completeness and compliance of contracts with company
                  policies.
                </li>
                <li>
                  Facilitate document signing and maintain accurate records.
                </li>
                <li>
                  Organize and retrieve contracts for reference and audit
                  purposes.
                </li>
              </ul>
              <p>
                Outsourcing your contract management to ChronoLegal will help
                you minimize risk, protect your companies' interests, and
                promote positive relationships with your clients and vendors.
                More importantly, it will help you save time and money.
              </p>

              <h4 className="section-bottom-title">
                GET HELP WITH YOUR CONTRACTS TODAY!
              </h4>
              <p>
                • Do you want to learn more about how ChronoLegal can improve
                your contract management experience? Contact us today!
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
