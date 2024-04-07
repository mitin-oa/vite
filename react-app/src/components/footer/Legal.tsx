import { useMediaQuery } from "react-responsive";
import Footer from "./footer";
import HeaderMenu from "../header/header";

export default function Legal({
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
        <div className="Services-pic">LEGAL</div>
        <section className="main-content">
          <div className="wrapper">
            <div className="about_service">
              <h3 className="section-title">Disclaimer</h3>

              <p className="only_text" style={{ color: "#033c5a" }}>
                We try to keep the content on this website current but do not
                guarantee the accuracy or completeness of the information.
                ChronoLegal makes no warranties, representations, or claims with
                respect to any of the material on this website. ChronoLegal
                denies any responsibility or liability for loss or damages that
                may result from your access to or use of the material on this
                website.
              </p>
              <p className="only_text" style={{ color: "#033c5a" }}>
                You may only use it for informational purposes. If you wish to
                use it for any other purposes, please contact ChronoLegal. You
                also may not alter or interfere in any way with the content or
                functioning of this website. The people who own the email
                addresses listed on this site do not desire to receive
                unsolicited email messages for services or products, so kindly
                refrain from sending such messages.
              </p>
              <p className="only_text" style={{ color: "#033c5a" }}>
                Some links within this website lead you to third-party sites.
                Those other sites are provided solely for your convenience. Our
                links to such third-party sites do not constitute an endorsement
                or approval of their content and we do not confirm or warrant
                the information on them because we do not have dominion over the
                websites. If you go to these websites, you assume the risk of
                doing so; and will be subject to the terms, conditions of use,
                and privacy policies of the said site.
              </p>
              <p className="only_text" style={{ color: "#033c5a" }}>
                The material of this website should not be relied upon for legal
                advice; nor does this website or your use of it create an
                attorney-client relationship between you and ChronoLegal. This
                website is also not intended as and should not be considered an
                offer or agreement to represent you. Any e-mail thus sent to
                ChronoLegal at e-mail addresses listed on this website will not
                create an attorney-client relationship and will not be
                confidential. Kindly refrain from sending us information you
                regard as confidential unless we establish a formal
                attorney-client relationship with you.
              </p>
              <h3 className="section-title">Privacy policy</h3>
              <ul>
                <li>
                  ChronoLegal is committed to protecting the privacy and
                  security of your personal information. This privacy notice
                  describes how we collect and use your personal information
                  during and after our interactions with you, in accordance with
                  the General Data Protection Regulation (“GDPR”) and the CCPA
                  (California Consumer Privacy Act). It may be updated at any
                  time.
                </li>
                <li>
                  By continuing to use this website, visitors agree to the
                  collection and use of their personal information in accordance
                  with this policy. The personal information that we collect
                  helps us provide and improve the user experience on com. We
                  will not use or share your information with anyone except as
                  described in this Privacy Policy.
                </li>
              </ul>
              <p className="only_text" style={{ color: "#ec720b" }}>
                The kind of information we hold about you
              </p>
              <ul>
                <li>
                  ChronoLegal collects personally identifiable information such
                  as names, addresses, and email addresses from visitors who
                  choose to enter this information.
                </li>
                <li>
                  This website uses “cookies”. Cookies are files with a small
                  amount of data that is commonly used as an anonymous unique
                  identifier. These are sent to your browser from the website
                  that you visit and are stored on your computer’s hard drive.
                  ChronoLegal.com uses these “cookies” to collect information
                  and to improve service.
                </li>
              </ul>
              <p className="only_text" style={{ color: "#ec720b" }}>
                How we will use this information
              </p>
              <ul>
                <li>
                  For a better experience, while using this website, you may
                  need to provide us with certain personal information,
                  including but not limited to your name, phone number, and
                  email address. The information that we collect will be used to
                  contact or identify you only for the specific purpose you have
                  entered your information for, whether it be to receive email
                  communications or attend an event.
                </li>
                <li>To facilitate our services.</li>
                <li>To provide the service.</li>
                <li>To assist us in analyzing how our service is used.</li>
              </ul>
              <p className="only_text" style={{ color: "#ec720b" }}>
                Sharing with third parties
              </p>
              <ul>
                <li>
                  We may share your personal information with third parties
                  where required by law. We may also employ the following
                  third-party companies and individuals and share your personal
                  information with them: translation services, credentials
                  evaluation agencies, IT support, and other relevant
                  third-party service providers.
                </li>
                <li>
                  All our third-party service providers are required to take
                  appropriate security measures to protect your personal
                  information. However, this may not apply to U.S. government
                  authorities or agencies, over which the ChronoLegal can assert
                  no control.
                </li>
              </ul>
              <p className="only_text" style={{ color: "#ec720b" }}>
                How we use particularly sensitive personal information
              </p>
              <ul>
                <li>
                  We may process special categories of personal information in
                  the following circumstances.
                </li>
                <li>
                  In limited circumstances, with your explicit written consent.
                </li>
                <li>Where it is needed to obtain an immigration</li>
                <li>Where it is needed to obtain an immigration</li>
                <li>
                  Less commonly, we may process this type of information where
                  it is needed in relation to legal claims or where it is needed
                  to protect your interests (or someone else’s interests,
                  including those of your employer) and you are not capable of
                  giving your consent, or where you have already made the
                  information public.
                </li>
                <li>
                  In limited circumstances, we may approach you for your written
                  consent to allow us to process certain particularly sensitive
                  data. If we do so, we will provide you with full details of
                  the information that we would like and the reason we need it,
                  so that you can carefully consider whether you wish to
                  consent.
                </li>
              </ul>
              <p className="only_text" style={{ color: "#ec720b" }}>
                Data security
              </p>
              <ul>
                <li>
                  We have put in place measures to protect the security of your
                  information. Details of these measures are available upon
                  request.
                </li>
                <li>
                  All our third-party service providers are also required to
                  take appropriate security measures to protect your personal
                  information. However, this may not apply to U.S. government
                  authorities or agencies.
                </li>
              </ul>
              <p className="only_text" style={{ color: "#ec720b" }}>
                Data retention
              </p>
              <ul>
                <li>
                  We want to inform you that whenever you visit our website, we
                  collect information that your browser transmits. This data may
                  include information such as your computer’s Internet Protocol
                  (“IP”) address, browser version, pages of our website that you
                  visit, the time and date of your visit, the time spent on
                  those pages, and other statistics.
                </li>
                <li>Changes to this privacy notice.</li>
                <li>
                  We reserve the right to update this privacy notice at any
                  time.
                </li>
                <li>
                  If you have any questions about this policy, please contact us
                  at info@ChronoLegal.com.
                </li>
              </ul>
              <h3 className="section-title">ChronoLegal Terms of Engagement</h3>

              <p className="only_text" style={{ color: "#ec720b" }}>
                1 Introduction
              </p>
              <p className="legal-terms">
                (a) These Standard Terms and Conditions of Engagement (Terms)
                and the accompanying Engagement Letter must be read together as
                they form the agreement (Agreement) between you and ChronoLegal,
                LLC (ChronoLegal). A reference to “us”, “our” or “we” is a
                reference to ChronoLegal. The Terms will apply to all services
                that we perform for you, as the Client, in relation to the
                Engagement Letter (the “Services”). A reference to “Client” or
                “you” or “your”, refers to the entity described in the
                Engagement Letter and is a Party to the Agreement. (b) These
                Terms may not be supplemented or amended by any conduct, prior
                representation, course of dealing, usage of trade, or document
                unless made in writing and signed by both parties. Any terms and
                conditions, whether prior or subsequent, set out in Your
                purchase order or any other document are rejected and will only
                have effect if accepted by ChronoLegal in writing. Your assent
                to these Terms shall be conclusively presumed upon Your order,
                payment for, or acceptance of all or any of the Services
                ordered.
              </p>
              <p className="only_text" style={{ color: "#ec720b" }}>
                2 Services
              </p>
              <p className="legal-terms">
                (a) We will provide for you the Services you choose when placing
                an order on our website or the ones described in the Engagement
                Letter. We will exercise reasonable skill, diligence, and due
                care to provide Services, in accordance with any legal or
                regulatory requirements applicable to us, and otherwise in
                accordance with reasonable and appropriate professional
                standards. (b) You may request to vary the scope of the Services
                as set out in the Engagement Letter, provided that such request
                is made in writing to us. Additional services and/or changes to
                the scope of Services must be agreed to in writing by both
                Parties. (c) We will make reasonable efforts to ensure any
                specific ChronoLegal’s Personnel named in the Engagement Letter
                are available to provide the Services. However, you acknowledge
                that Personnel are allocated based on our assessment of the
                experience, skills and responsibility required to perform the
                tasks in the Engagement Letter, as well as our general
                resourcing requirements. You do not have right to determine or
                request Personnel for particular tasks.
              </p>
              <p className="only_text" style={{ color: "#ec720b" }}>
                3 Basis and Use of Advice
              </p>
              <p className="legal-terms">
                (a) Our advice or opinion relating to the Services is provided
                solely for you. It is not a promise nor a guarantee to you about
                the outcome or consequences of any issues considered in the
                advice or opinion. Our advice or opinion does not constitute
                legal advice and should not be considered as such. Unless
                expressly provided for in the description of services on our
                website or Engagement Letter, our advice or opinion must neither
                be: (i) relied upon to disclose, investigate, or enforce illegal
                acts, errors or irregularities that may occur; nor (ii)
                included, whether wholly or in part, or referred to in any
                prospectus (or similar disclosure document), product disclosure
                statement, investor presentation, information memorandum or
                other similar document to be used in relation to fundraising
                activities or the offer of securities. (b) Our advice or opinion
                relates to, and is based on, the circumstances, information and
                effective law, regulatory frameworks, and their interpretation,
                as at the date of the advice or opinion. We are not obligated to
                update the advice or opinion after issuing it in final form.
                Except as required by law or whether we have expressly agreed in
                writing to do so, you must not disclose all or part of our
                advice or opinion to a Third Party, without written consent from
                us. This includes any publication or reference to the advice or
                opinion on electronic or social media. We are not liable for any
                actions or consequences of advice provided to Third Parties with
                or without written consent. If you provide any of our advice or
                opinion to a Third Party without our consent, you agree to
                indemnify us from and against all claims made by such Third
                Party or any other Third Party in relation to the same and for
                the costs of defending any such claims. Our written advice will
                take precedence over any oral, draft, or interim advice, reports
                or presentations to you. If you wish to rely on any oral advice
                that we provide, you must request documentary confirmation from
                us.
              </p>
              <p className="only_text" style={{ color: "#ec720b" }}>
                4 Timing and Delays
              </p>
              <p className="legal-terms">
                We will endeavor to provide the Services in a timely manner.
                However, we will not be responsible nor liable to you or any
                Third Party for any failure or delay in performing the Services
                if that failure of delay arises due to events or circumstances
                beyond our reasonable control, due to unforeseen circumstances,
                or due delays caused by you. In the case of untimely performance
                by you of your obligations, we reserve the right to review our
                fees and if the delay is substantial, to terminate this
                Agreement. Unless expressly agreed in writing: i. all dates on
                our website or in the Engagement Letter are indicative dates for
                planning and estimating purposes; ii. dates on our website or in
                the Engagement Letter are not contractually binding; and iii.
                estimated completion dates are provided on the assumption that
                full cooperation is always provided by you and your Personnel.{" "}
              </p>
              <p className="only_text" style={{ color: "#ec720b" }}>
                5 Independence and Conflicts of Interest
              </p>
              <p className="legal-terms">
                In performing certain Services, we may be subject to certain
                professional and ethical standards as well as legal requirements
                in relation to our independence. We are not aware of any
                conflict of interest that may exist in us providing the Services
                unless we have expressly noted such in the Engagement Letter.
                However, it is possible that a conflict of interest may arise in
                the future. If it does, we will notify you and discuss the
                issue. We seek to ensure that the Services are objective, and
                our provision of the Services is independent and is free from
                conflicts of interest, except where we notify you otherwise. In
                some cases, this may mean we must cease to provide Services to
                you.{" "}
              </p>
              <p className="only_text" style={{ color: "#ec720b" }}>
                6 Other Clients
              </p>
              <p className="legal-terms">
                We will provide services to other clients through the duration
                of our engagement by you. Some of these other clients may be
                competitors of yours or otherwise have interests which conflict
                with your own. We will not disclose to any of our other clients
                the confidential, proprietary, business or commercially
                sensitive information that you provide to us under the
                Agreement. Notwithstanding any other provision of these Terms,
                to the extent permitted by law, neither our engagement by you
                nor our provision of the Services will prevent or restrict us
                from providing services to our other clients.
              </p>
              <p className="only_text" style={{ color: "#ec720b" }}>
                7 Your Responsibilities
              </p>
              <p className="legal-terms">
                (a) Provision of information We require the timely provision by
                you of all information, documentation and materials and timely
                responses to our questions and requests so that we may provide
                the Services in a timely manner, as set out in the Engagement
                Letter. This may include getting access to Personnel, Third
                Parties, records, premises, technology, and information
                technology systems; and/or providing data, accounts, financial
                information, records, archives, and files. (b) Accuracy of
                information You are responsible for the completeness and
                accuracy of the information that you supply to us. We will not
                independently verify or assess the accuracy or veracity of
                information and will not be liable for any Loss resulting from
                inaccurate, incomplete or defective documents or information.
                You must promptly notify us in writing if, after providing us
                with any information, you determine that any part of that
                information is inaccurate, defective, misleading, deceptive, or
                untrue in any material respect. To the extent permitted by law,
                we disclaim all responsibility for your failure to inform us of
                any changes to any information which impact, or may impact, upon
                the Services. (c) Commercial decisions You acknowledge and agree
                that it is not our responsibility to make, nor will we make, any
                commercial or business decisions for you. Our advice or opinion
                should not be the sole basis for any such decisions that you
                make. Before making any such decisions where our advice or
                opinion will be considered, you should consider the limitations
                on and scope of that advice or opinion; and all commercial or
                other relevant factors that you and your professional advisers
                (other than us) are, or ought reasonably to be aware of, from
                sources other than us. (d) Opportunity to remedy You must
                provide us with the opportunity to rectify our advice or opinion
                if you become aware that it does not confirm to the scope of the
                Services in any material respect. If you fail notify us in
                writing of any such non- conformity, we disclaim all
                responsibility for our advice or opinion failing to conform with
                the scope of the Services
              </p>
              <p className="only_text" style={{ color: "#ec720b" }}>
                8 Fees
              </p>
              <p className="legal-terms">
                (a) Fees and Invoicing Calculation Our fees will be those set
                out on our website or in the Engagement Letter and will
                otherwise be calculated in accordance with these Terms. (b)
                Obligation to pay You agree to pay our fees for the Services in
                accordance with these Terms. (c) Time-based fees This clause
                applies in those cases where our website or Engagement Letter do
                not provide set fees. In such cases, our fees to provide the
                Services are based on time required by Personnel, plus
                disbursements and out-of-pocket Expenses. Any estimate of our
                fee on a time-based billing matter that we provide to you is an
                indicative estimate only and is subject to change. It is not a
                quote nor a cap on the amount of fees that we may charge you.
                Our fees may be more than, or less than, the amount estimated.
                Fee estimates are based on preliminary information. We reserve
                the right to issue final invoices for actual time spent on
                providing the Services. Any fee estimate that we provide you
                assumes that you carry out your responsibilities under the
                Agreement in a timely manner. We reserve the right to charge
                above our fee estimate if we are required to perform more work
                or reschedule commitments due to actions or delays beyond our
                control or that are caused by you. (d) Review of hourly rates We
                may review and increase our fees upon providing you with
                reasonable prior notice of such review and the amended rates.
                (e) Money on account We may request that you pay an amount in
                advance to cover anticipated Expenses or fees. Each such payment
                in advance is payable in accordance with the Engagement Letter.
                If you do not pay us any amounts in advance that we may request,
                we may elect not to commence or continue to provide Services to
                you. (f)Fixed fee arrangements In most cases on our website and
                Engagement letters, we agree to a fixed fee for the provision of
                the Services or any part of the Services. Where that is the
                case, our website or the Engagement Letter will specify which
                Services (if any) are to be performed on a fixed fee basis. We
                may also specify conditions or limitations applicable to any
                fixed fee component of the Services. Any fixed fee arrangement
                is conditional upon you carrying out your responsibilities under
                the Agreement in a timely manner. We reserve the right to amend
                our fixed fee arrangement or change additional fees if we are
                required to perform more work or reschedule commitments due to
                actions or delays beyond our control or that are caused by you.
                To the extent that any Services are not performed on a fixed fee
                basis or work in addition to the Services is performed by us, we
                will charge you on a time basis instead. (g) Invoicing Our
                Invoices are issued monthly or as otherwise agreed in writing.
                However, we reserve the right to invoice more or less
                frequently. (h) Payment Invoices are due and payable upon
                receipt unless we agree otherwise in writing. The preferred
                means of payment is by electronic funds transfer or internet
                banking. We also may accept payment by cash, credit card or
                cheque. If you do not pay an Invoice in full, we may: • elect to
                discontinue providing the Services to You. • suspend work until
                further payment is made. • charge interest as outlined below;
                and/or • instigate legal proceedings without further notice. We
                reserve the right to charge you interest on any outstanding
                amount under an Invoice not paid by the due date. Interest is to
                be calculated at daily at a rate of 2% per month and 24% per
                annum beginning on the date the amount became overdue. Without
                prejudice to the foregoing, we reserve the right to recover all
                default, recovery, enforcement costs and Expenses in the event
                that any and all amounts claimed in our Invoices are not paid by
                the due date. (i) Lien You agree that we will hold a lien over
                all documentation relating to the Services and in our possession
                or control until all outstanding amounts owed by you are
                received by us. This includes unpaid Invoices, accrued interest,
                default, recovery or enforcement costs and expenses or
                disbursements. We will retain this lien until all amounts are
                received in full by us. (j) Disputed invoices Any dispute in
                relation to Tax Invoices or time entries will not be recognized
                or acted upon unless notified in writing to us within seven (7)
                days of you receiving the break-down of time incurred and
                invoiced
              </p>
              <p className="only_text" style={{ color: "#ec720b" }}>
                9 Our Liability
              </p>
              <p className="legal-terms">
                (a) Limitations on liability may be set out on our website or in
                the Engagement Letter. Liability is limited in accordance with
                our professional standards obligations and monetary thresholds
                that we are insured for. Our Personnel will not be liable to you
                in relation to any Loss suffered by you as a result of the
                Services provided, nor for any Loss suffered by any Third Party.
                You must not bring any claim arising out of this Agreement
                against any of our Personnel personally. (b)Other than to the
                extent required under mandatory laws which cannot lawfully be
                excluded, restricted or modified: all terms, conditions,
                warranties and consumer guarantees, whether statutory or
                otherwise, are excluded in relation to the Services; and subject
                to limitations of liability and to the greatest extent allowed
                by law, our liability to you in relation to all Claims relating
                to the Agreement and the Services is limited, in our complete
                discretion, to either: re-supplying or paying the cost of re-
                supplying the Services; a refund of the fees paid by you to us
                in relation to the Services; or the proceeds of insurance
                received by us or payable by our insurers in relation to the
                relevant Claim (if any). (c) Our liability to you in relation to
                the Agreement and the Services (if any) is limited to that
                proportion of the Loss (including interest and costs) suffered
                by you, which is agreed between us or ascribed to us by a court
                allocating proportionate responsibility to us having regard to
                the extent of our responsibility for the loss or damage and the
                contribution to the loss or damage in question by you and any
                Third Party. (d)To the extent permitted by law, we will not be
                liable to you nor any Third Party for any Excluded Loss.
              </p>
              <p className="only_text" style={{ color: "#ec720b" }}>
                10 Third Party Claims
              </p>
              <p className="legal-terms">
                You agree to indemnify us against Loss or Expenses incurred by
                us in relation to any Claim by a Third Party which relates to
                this Agreement, including a prosecution, inquiry or
                investigation by a governmental body or agency. The indemnity
                above does not apply to the extent the any Claim in relation to
                matters which are finally determined by a court or by agreement
                to have resulted solely and directly from our negligent or
                willful acts or omissions.
              </p>
              <p className="only_text" style={{ color: "#ec720b" }}>
                11 General Indemnity
              </p>
              <p className="legal-terms">
                You indemnify us and our Personnel on a full indemnity basis, in
                relation to any Claim which relates to this Agreement where you
                or persons for whom you are vicariously liable cause any of the
                Loss relating to such Claim.
              </p>
              <p className="only_text" style={{ color: "#ec720b" }}>
                12 Compliance with Laws, Sanctions and Ethics
              </p>
              <p className="legal-terms">
                Both parties undertake to (i) comply with all applicable
                anti-corruption and anti-money laundering laws & regulations,
                (ii) abide by the principles of ChronoLegal’s Code of Conduct
                (available at www.ChronoLegal.com) and (iii) not sell, or supply
                the Services to be used, in any territory or by any individual
                or entity in breach of any sanction regulation, export
                restriction and other restrictive measure applicable on the
                Services or the parties, including those imposed by the United
                Nations, European Union, United States (OFAC). A serious breach
                of any of these undertakings entitles the non-defaulting party
                to immediately terminate the Agreement.
              </p>
              <p className="only_text" style={{ color: "#ec720b" }}>
                13 Confidentiality
              </p>
              <p className="legal-terms">
                (a)All non-public, confidential, or proprietary information of
                ChronoLegal, whether written or oral, whether or not identified
                as "confidential", including but not limited to, documents,
                data, business operations, customer lists, pricing, discounts,
                or rebates disclosed by ChronoLegal to You in connection with
                this Agreement, is solely for the purpose of performing this
                Agreement and may not be disclosed or copied by You unless
                authorized in advance by ChronoLegal in writing. At
                ChronoLegal's request, You shall promptly delete or return all
                documents and other materials received from ChronoLegal.
                ChronoLegal shall be entitled to injunctive relief for any
                violation of this clause. This clause does not apply to
                information that is: (a) in the public domain; (b) known to You
                at the time of disclosure; or (c) rightfully obtained by You on
                a non-confidential basis from a third party. (b) Any non-public,
                confidential, or proprietary information that we obtain from you
                in the course of providing the Services will be treated as
                confidential and will not be disclosed to any person other than
                any of our Personnel who require that confidential information
                for the purposes of performing the Services, unless you instruct
                us to do so. At your request, we shall promptly delete or return
                all confidential documents and other materials received from
                you. This clause does not apply to information that is: (a) in
                the public domain; (b) known to us at the time of disclosure; or
                (c) rightfully obtained by us on a non-confidential basis from a
                third party We may disclose your confidential information to the
                appropriate authority if this is required by law or is required
                in order for us to comply with our professional duties and
                obligations, or as required by professional or regulatory
                bodies. For example, such disclosure may occur if we identify or
                suspect non-compliance with laws or regulations that deal with
                fraud, corruption and bribery; money laundering, terrorist
                financing and proceeds of crime; securities markets and trading;
                banking and other financial products and services; data
                protection; tax and pension liabilities and payments;
                environmental protection; and public health and safety. You
                consent to the disclosure of your confidential information to
                the appropriate authority pursuant to this clause.
              </p>
              <p className="only_text" style={{ color: "#ec720b" }}>
                14 Documents
              </p>
              <p className="legal-terms">
                (a)All documents or other materials (including working papers,
                reports, written advice, drafts and software) developed,
                modified, designed, or created by us in the course of performing
                the Services, in electronic or any other format, belong to us
                unless our website or the Engagement Letter expressly states
                otherwise. All original documents or other materials that you
                provide to us for the purposes of our engagement, whether
                electronic or any other format, belong to you unless the
                Engagement Letter expressly states otherwise. We will return to
                you all physical copies of such documents or other materials
                that we have in our possession or control upon your request or
                otherwise on completion of our engagement to provide the
                Services. (b)We will store our files upon completion of the
                Services and our engagement, for a period of 1 year from the
                date of our final Invoice. Files may be maintained
                electronically. We may charge you for special storage
                requirements or retrieval of your files from storage. You
                authorize us to destroy our files relating to you after the
                expiration of the 1-year storage period. We do not accept any
                liability for any Loss that you may suffer if your files are
                damaged or destroyed for any reason.
              </p>
              <p className="only_text" style={{ color: "#ec720b" }}>
                15 Privacy
              </p>
              <p className="legal-terms">
                (a)We comply with relevant data privacy laws and set out how we
                collect, use, disclose, store and secure personal information
                with the ChronoLegal Privacy Policy. A copy of the policy is
                available upon request. We collect, use and disclose your
                personal information for the purposes of providing you with the
                Services and any associated professional services that we may
                perform for you, or other lawful and reasonable business uses.
                (b)By engaging us to provide the Services, you consent to the
                following: (i)Us disclosing your personal information to Third
                Parties when and to the extent required for us to provide the
                Services. It is your responsibility to ensure adequate consents
                are in place in relation to individuals’ privacy in relation to
                personal information that we may use in providing Services. (ii)
                Your personal information being used for marketing, training or
                business development initiatives. You expressly consent to your
                personal information, at times, being transferred overseas
                and/or to overseas contractors. (iii)Us referencing your name,
                your business name and/or your logo in proposals, submissions,
                tenders and marketing materials for the purpose of indicating
                your experience.
              </p>
              <p className="only_text" style={{ color: "#ec720b" }}>
                16 Notices and Communications
              </p>
              <p className="legal-terms">
                (a) Notices All notices hereunder shall be given in writing
                (including via email), addressed to the signatories of this
                Agreement at the respective addresses set forth in the first
                paragraph of this Agreement, if via email to ChronoLegal, at
                info@chronolegal.com, or at such other address as may from time
                to time be designated by either party to the other.
                (b)Electronic Communication You consent to us communicating with
                you electronically from time to time. You may opt out at any
                time if you do not wish to receive communications. You may also
                opt out of marketing communications. (c) E-mail. Documents sent
                to you by e-mail (whether or not containing confidential
                information) will not be encrypted unless you request us, in
                writing, to encrypt outgoing e-mail and we are able to agree
                with you and implement mutually acceptable encryption standards
                and protocols. We make reasonable attempts to exclude from our
                e-mails and any attachments any virus or other defect that might
                affect any computer or IT system. However, it is your
                responsibility to put in place measures to protect your computer
                or IT system against any such virus or defect, and we do not
                accept any liability for any loss or damage that may arise from
                the receipt or use of electronic communications from us. You
                acknowledge and accept the risks that email communications may
                not always be secure, irrespective of the security we have in
                place. You must contact us immediately if you have any concerns
                about the authenticity of any documents or communications
                purportedly sent by us. (d) Use of Cloud Services for Data
                Storage and Processing We utilize third party service providers
                (including those that offer “cloud” services) in order to
                facilitate the provision of legal services to you. We evaluate
                all third-party service providers to confirm their adherence to
                (i) industry standard frameworks for information security to
                protect the confidentiality, integrity, and availability of data
                and (ii) applicable data protection laws. All third-party
                service providers operate under services agreements that require
                conduct that is consistent with our legal and ethical
                obligations.
              </p>
              <p className="only_text" style={{ color: "#ec720b" }}>
                17 Intellectual Property Rights
              </p>
              <p className="legal-terms">
                (a)Background IP All Intellectual Property Rights in a Party’s
                Background IP remain vested in that Party, and all Intellectual
                Property Rights derived or developed from a Party’s Background
                IP vest upon creation in that Party. You grant us a
                non-exclusive, royalty-free, non-transferable license to use
                your Background IP solely, and only to the extent necessary, for
                us to provide the Services. This license will operate for the
                term of our engagement under the Agreement. (b)Contract IP All
                Intellectual Property Rights in the Contract IP vest in us upon
                their creation unless we agree otherwise in writing. We will
                grant to you a non-exclusive, royalty-free, irrevocable,
                non-transferable license to use the Contract IP solely, and only
                to the extent necessary, for you obtain the benefit of and enjoy
                the Services in the ordinary course. We may terminate or suspend
                this license if you do not pay when due our fees and other
                amounts under the Agreement. This license does not include any
                right to use our name, our business names, our logos or our
                trademarks on any of your products, websites, social media,
                documents or services without our prior written consent. (c) Use
                A References to “use” of Intellectual Property Rights hereunder
                includes the right to load, execute, store, transmit, display
                copy (for the purposes of loading, execution, storage,
                transmission, or display), modify, adapt, enhance, reverse
                compile, decode, translate, and otherwise utilize. (d) Third
                Party infringement Any intellectual property provided to us must
                not infringe the Intellectual Property Rights of any other Third
                Party. You must take reasonable precautions to ensure that no
                such infringement occurs. You are liable for any breach of
                another Third Party’s Intellectual Property Rights if you
                provide them to us.
              </p>
              <p className="only_text" style={{ color: "#ec720b" }}>
                18 Termination
              </p>
              <p className="legal-terms">
                (a)Unless otherwise provided in writing, to the extent permitted
                by law, we may terminate the Agreement and our engagement at any
                time by giving at least 14 days’ written notice to that effect.
                (b)Either Party may terminate the Agreement immediately if the
                other Party commits a material or persistent breach of its
                obligations under the Agreement. A material breach includes but
                is not limited to, a breach capable of being remedied but has
                not been remedied within 14 days of receipt by the Party in
                breach of a notice identifying the breach and demanding its
                remedy. A material breach also includes but is not limited to
                either Party suffering an Insolvency Event. (c) If, at any point
                in time from the commencement of our engagement to provide the
                Services, our engagement is terminated for any reason, you agree
                to pay us for any accrued work in progress as at the date of
                termination. All amounts under the Agreement become due and
                payable upon termination.
              </p>
              <p className="only_text" style={{ color: "#ec720b" }}>
                19 Force Majeure
              </p>
              <p className="legal-terms">
                Neither Party will be liable to the other Party for any delay or
                failure to fulfil obligations to the extent that such delay or
                failure arises from significant and unforeseen causes beyond the
                first-mentioned Party’s control, having taken reasonable
                precautions, including fire, floods, acts of God, terrorism,
                strikes, lock out, war, riot or any governmental act or
                regulation.
              </p>
              <p className="only_text" style={{ color: "#ec720b" }}>
                20 Entire Agreement
              </p>
              <p className="legal-terms">
                These Terms, the Acknowledgment, the Supply Agreement, and any
                applicable attachments, exhibits, and supplements agreed in
                writing by both parties regarding the Services, constitute the
                entire agreement between the parties (the “Agreement”). All
                other documents, including catalogues, brochures,
                advertisements, and manuals provided by ChronoLegal are merely
                for information and are non-contractual. The Agreement
                supersedes all prior or contemporaneous negotiations,
                representations, warranties, commitments, and understandings
                between the parties with respect to the Services covered by the
                Agreement. A waiver, implied or express, by ChronoLegal of any
                provision of the Agreement shall not influence the validity and
                applicability of the other provisions. The invalidity and/or
                illegality, in whole or in part, of any provisions of the
                Agreement shall have no effect on the validity of the other
                provisions. The fact that ChronoLegal does not require the
                application of a provision of the Agreement in no account
                constitute a waiver of ChronoLegal’s right to avail itself
                thereof at a later date.
              </p>
              <p className="only_text" style={{ color: "#ec720b" }}>
                21 Governing Law and Dispute Resolution
              </p>
              <p className="legal-terms">
                (a) The Agreement shall be governed by and construed exclusively
                in accordance with the laws of the State of Georgia, U.S.A.,
                exclusive of conflicts of laws rules. (b) Any dispute,
                controversy or claim arising out of or in connection with the
                Agreement, or the breach, termination or invalidity thereof,
                shall be settled by arbitration pursuant to the rules of the
                American Arbitration Association (the “AAA”). The location of
                the arbitration shall be Atlanta, Georgia and the language of
                the arbitration shall be English. (c) Notwithstanding the
                arbitration clause above, ChronoLegal shall in its sole
                discretion for the purpose of collecting the debts of You, be
                entitled to submit any claim against You in the courts and
                authorities of the country, state or county where You are
                domiciled, or the Services are located.
              </p>
              <p className="only_text" style={{ color: "#ec720b" }}>
                22 Limitation of Liability
              </p>
              <p className="legal-terms">
                (a) Except in cases of gross negligence or willful misconduct,
                in no event shall ChronoLegal be liable under this agreement to
                you or any third party for any general, special, indirect,
                punitive, exemplary, incidental, consequential, or other damages
                of any kind, including without limitation, loss of business,
                loss of profit, business interruption, whether arising in
                contract, tort (including negligence), or under any other theory
                of liability, regardless of whether such damages were
                foreseeable and whether or not ChronoLegal has been advised of
                the possibility of such damages. these limitations shall apply
                even under circumstances that cause any remedy hereunder to fail
                of its essential purpose. (b) In any event, to the maximum
                extent permitted by applicable law, ChronoLegal’s aggregate
                liability under the agreement to you, or any other person, or
                entity, shall not exceed the amounts received by ChronoLegal
                from you in the twelve months preceding the event giving rise to
                the claim or damages. (c) Furthermore, ChronoLegal shall have no
                liability for any claim whatsoever when notification is made
                more than one year after the event giving rise to the claim
                occurred.
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
