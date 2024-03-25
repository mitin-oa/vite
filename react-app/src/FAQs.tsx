import { useMediaQuery } from "react-responsive";
import Footer from "./components/footer/footer";
import AboutPicture from "../public/about_pic.png";
import HeaderMenu from "./components/header/header";
import CollapseButton from "./components/CollapseButton";

export default function FAQs({
  onSignIn,
  onSignUp,
  handleSignIn,
  handleSignUp,
  setUserProfileData,
  modalIsOpen,
  setIsOpen,
}: any) {
  const questions = [
    {
      city: "What is contract review?",
      adress: {
        line1:
          "During a contract review, an attorney will go over your contract, taking into account your particular situation, and will highlight any red flags, concerns, or recommendations that you should take into consideration before signing or agreeing to the terms of the agreement.",
        line2: "",
        line3: "",
      },
    },
    {
      city: "What types of contracts can you review? ",
      adress: {
        line1:
          "We can help you with any contracts you need to deal with in the course of your business, including: Partnership & Shareholder Agreements, Partnership & Joint Venture Agreements, Investment & Funding Agreements, Services Agreements, Master Service Agreements (MSAs), Statements of Work (SOWs), Work Orders (WOs) Data Processing Agreements (DPAs), Software as a Service (SaaS) Agreements, Service Level Agreements (SLAs), End-user license agreements (EULAs), Privacy policies, Purchase Orders, Purchasing Agreements, Vendor/Supplier Agreements, Non-Disclosure Agreements (NDAs), Non-compete Agreements (NCAs), Employee Contracts, Consulting Agreements, IP assignment agreements, Technology Assignments, Copyright License Agreements, Sale Agreements, Loan Agreements, Franchise Agreements, Commercial Real estate Contracts, Construction Agreements, Lease Agreements…etc.",
        line2: "",
        line3: "",
      },
    },
    {
      city: "How long does it take?",
      adress: {
        line1:
          "It is up to you. You can choose to receive your analysis report or redlines in a few hours or a few days. Generally, our turnaround time is two to four working days, unless you choose one of our expedited delivery options. For same-day delivery before midnight, the Express Delivery option must be ordered by 12 PM EST; otherwise, it will be delivered before 12 AM EST the following day.",
        line2: "",
        line3: "",
      },
    },
    {
      city: "Why do I need you if I can use an AI tool online or just DIY it?",
      adress: {
        line1:
          "The quote “He who represents himself has a fool for a lawyer” applies to all legal matters including contract review. Contract law is complex and there are many aspects to a transaction that require professional assistance despite what you may read or see online. It could be a grave mistake to rely on information found online for advice relating to your contracts and business deals. Your lack of experience could lead to mistakes that can be costly in terms of time and money. If you have to hire a law firm for help later, your mistakes may limit your options and those lawyers are likely to charge more to clean up the mess. It is always better to get it right from the get-go.",
        line2: "",
        line3: "",
      },
    },
    {
      city: "How senior are your lawyers?",
      adress: {
        line1:
          "All our lawyers are qualified attorneys with multiple years of experience in law firms and in-house.",
        line2: "",
        line3: "",
      },
    },
    {
      city: "Where are your lawyers based?",
      adress: {
        line1:
          "Our lawyers are based in the US, UK, Canada, Cyprus, France, Ghana, and South Africa.",
        line2: "",
        line3: "",
      },
    },
    {
      city: "What if my business is not located near one of your offices?",
      adress: {
        line1:
          "We work with businesses all over the world. While many clients will meet with us in person at some point in the process, today’s technology enables us to have virtual face-to-face conversations with our clients and assist them effectively no matter where they are.",
        line2: "",
        line3: "",
      },
    },
    {
      city: "Can you liaise with other business functions (i.e., Sales, Procurement, IT) in our company?",
      adress: {
        line1:
          "Yes, we will function as a genuine extension of your legal team and will communicate directly with internal stakeholders and outside parties on your behalf as needed.",
        line2: "",
        line3: "",
      },
    },
    {
      city: "Can you review contracts that are not governed by US, UK, Canada, or France laws?",
      adress: {
        line1:
          "Like the majority of in-house attorneys, we are comfortable reviewing contracts that are subject to any jurisdiction. We approach them of course, from the perspective of US, UK, Cyprus, Canada, or France qualified attorneys in the US, UK, Cyprus, Canada, or France. Naturally, we will let you know if there is anything we are unsure of and, if necessary, will seek the counsel of a local attorney.",
        line2: "",
        line3: "",
      },
    },
    {
      city: "Do you have a good understanding of data privacy law?",
      adress: {
        line1:
          "Yes, we do. Many of our attorneys have extensive experience in data privacy law and are CIPP-US and CIPP-E qualified.",
        line2: "",
        line3: "",
      },
    },
    {
      city: "How does ChronoLegal protect our personal data and confidential information?",
      adress: {
        line1:
          "ChronoLegal partners with industry leaders to provide secure identity verification, payment collection, and encrypted data storage. Every session takes place in a secure virtual environment. All confidential information that we are not required to keep is deleted.",
        line2: "",
        line3: "",
      },
    },
    {
      city: "How much does it cost?",
      adress: {
        line1:
          "It depends on the type of contract, number of pages, type of review, and delivery window you choose. We offer both a pay-as-you-go option and a subscription model which comes with significant savings and free add-ons services.",
        line2: "",
        line3: "",
      },
    },
    {
      city: "What if I have credits left over at the end of my subscription period?",
      adress: {
        line1:
          "We have included a rollover feature in most of our subscription plans that allows a predetermined number of unused credits to be transferred to the next subscription period. ",
        line2: "",
        line3: "",
      },
    },
    {
      city: "How do you keep your fees so low?",
      adress: {
        line1:
          "At ChronoLegal, we’re making the law work for you. We built some amazing technology to help our lawyers work more efficiently, eliminated a large portion of the typical overhead found in traditional firms, and cut out the junior attorney training that so many clients pay for. We can pass on the significant financial savings to our clients.",
        line2: "",
        line3: "",
      },
    },
    {
      city: "What forms of payments do you accept?",
      adress: {
        line1:
          "We accept all forms of payments including all major credit cards (Visa, American Express, Mastercard, Discover), debit cards, Automated Clearing House (ACH) transfers, paper checks, eChecks, digital payments (Paypal), and money orders.",
        line2: "",
        line3: "",
      },
    },
    {
      city: "How do you determine page length?",
      adress: {
        line1:
          "Pricing is calculated based on the assumption that a contract is a standard 8-1/2″ x 11″ page with 1″ margins all around, standard spacing, and a 12-point type size using a traditional font. A page with larger sheets, smaller typefaces, or double-column text may count as multiple pages.",
        line2: "",
        line3: "",
      },
    },
    {
      city: "How does it work?",
      adress: {
        line1:
          "Click on Order a Review and simply follow the steps outlined there to get started.",
        line2: "",
        line3: "",
      },
    },
    {
      city: "Is ChronoLegal an alternative Legal Service Provider?",
      adress: {
        line1:
          "We have been called many names: Contracting Specialists, Contracting Experts, New Law, Business Lawyers, Managed Legal Services Provider, Contracting-as-a-Service Provider, Outside General Counsel, Outsourced In-house Counsel, Outsourced Legal Services Provider, Alternative Legal Services Provider, Vendor Management Office, Contract Review Services Provider, Lawyers on demand, Fractional General Counsel, On-demand General Counsel…etc., But does it really matter? We like to keep it simple; we are ChronoLegal, and we are all about contracts!",
        line2: "",
        line3: "",
      },
    },
  ];
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
        <div className="FAQs-pic">FAQ's</div>
        <section className="main-content" style={{ paddingBottom: "40px" }}>
          <h2>FREQUENTLY ASKED QUESTIONS</h2>
          {questions.map((item: any) => {
            return <CollapseButton value={item.city} label={item.adress} />;
          })}
        </section>

        {/* <!-- END OF Bootstrap "Containers" component --> */}
      </div>
      <Footer kind={"short"} />
    </>
  );
}
