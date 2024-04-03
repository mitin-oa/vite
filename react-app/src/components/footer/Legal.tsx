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

              <p>
                We try to keep the content on this website current but do not
                guarantee the accuracy or completeness of the information.
                ChronoLegal makes no warranties, representations, or claims with
                respect to any of the material on this website. ChronoLegal
                denies any responsibility or liability for loss or damages that
                may result from your access to or use of the material on this
                website.
              </p>
              <p>
                You may only use it for informational purposes. If you wish to
                use it for any other purposes, please contact ChronoLegal. You
                also may not alter or interfere in any way with the content or
                functioning of this website. The people who own the email
                addresses listed on this site do not desire to receive
                unsolicited email messages for services or products, so kindly
                refrain from sending such messages.
              </p>
              <p>
                Some links within this website lead you to third-party sites.
                Those other sites are provided solely for your convenience. Our
                links to such third-party sites do not constitute an endorsement
                or approval of their content and we do not confirm or warrant
                the information on them because we do not have dominion over the
                websites. If you go to these websites, you assume the risk of
                doing so; and will be subject to the terms, conditions of use,
                and privacy policies of the said site.
              </p>
              <p>
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
              <p>The kind of information we hold about you</p>
              <ul>
                <li>
                  • ChronoLegal collects personally identifiable information
                  such as names, addresses, and email addresses from visitors
                  who choose to enter this information.
                </li>
                <li>
                  • This website uses “cookies”. Cookies are files with a small
                  amount of data that is commonly used as an anonymous unique
                  identifier. These are sent to your browser from the website
                  that you visit and are stored on your computer’s hard drive.
                  ChronoLegal.com uses these “cookies” to collect information
                  and to improve service.
                </li>
              </ul>
              <p>How we will use this information</p>
              <ul>
                <li>
                  • For a better experience, while using this website, you may
                  need to provide us with certain personal information,
                  including but not limited to your name, phone number, and
                  email address. The information that we collect will be used to
                  contact or identify you only for the specific purpose you have
                  entered your information for, whether it be to receive email
                  communications or attend an event.
                </li>
                <li>• To facilitate our services.</li>
                <li>• To provide the service.</li>
                <li>• To assist us in analyzing how our service is used.</li>
              </ul>
              <p>Sharing with third parties</p>
              <ul>
                <li>
                  • We may share your personal information with third parties
                  where required by law. We may also employ the following
                  third-party companies and individuals and share your personal
                  information with them: translation services, credentials
                  evaluation agencies, IT support, and other relevant
                  third-party service providers.
                </li>
                <li>
                  • All our third-party service providers are required to take
                  appropriate security measures to protect your personal
                  information. However, this may not apply to U.S. government
                  authorities or agencies, over which the ChronoLegal can assert
                  no control.
                </li>
              </ul>

              <p>How we use particularly sensitive personal information</p>
              <ul>
                <li>
                  • We may process special categories of personal information in
                  the following circumstances:
                </li>
                <li>
                  In limited circumstances, with your explicit written consent.
                </li>
                <li>Where it is needed to obtain an immigration</li>
                <li>Where it is needed to obtain an immigration</li>
                <li>
                  • Less commonly, we may process this type of information where
                  it is needed in relation to legal claims or where it is needed
                  to protect your interests (or someone else’s interests,
                  including those of your employer) and you are not capable of
                  giving your consent, or where you have already made the
                  information public.
                </li>
                <li>
                  • In limited circumstances, we may approach you for your
                  written consent to allow us to process certain particularly
                  sensitive data. If we do so, we will provide you with full
                  details of the information that we would like and the reason
                  we need it, so that you can carefully consider whether you
                  wish to consent.
                </li>
              </ul>
              <p>
                Data Security • We have put in place measures to protect the
                security of your information. Details of these measures are
                available upon request. • All our third-party service providers
                are also required to take appropriate security measures to
                protect your personal information. However, this may not apply
                to U.S. government authorities or agencies. Data retention • We
                want to inform you that whenever you visit our website, we
                collect information that your browser transmits. This data may
                include information such as your computer’s Internet Protocol
                (“IP”) address, browser version, pages of our website that you
                visit, the time and date of your visit, the time spent on those
                pages, and other statistics. • Changes to this privacy notice •
                We reserve the right to update this privacy notice at any time.
                • If you have any questions about this policy, please contact us
                at info@ChronoLegal.com.
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
