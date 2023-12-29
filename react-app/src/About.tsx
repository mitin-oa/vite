import { useMediaQuery } from "react-responsive";
import { Footer } from "./components/footer/footer";
import AboutPicture from "../public/about_pic.png";
import HeaderMenu from "./components/header/header";

export default function About({
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
          <div className="about_service d-md-flex flex sm-column">
            <div className="about_service">
              <h2>About service</h2>
              <p className="about_service">
                Phasellus faucibus nunc pellentesque nisi sodales, ut posuere
                massa ornare. Suspendisse potenti. Aliquam erat volutpat. Donec
                aliquet ut orci eu tincidunt. Donec lacus enim, luctus et
                ultricies nec, sodales at diam. Quisque blandit massa vitae
                ipsum viverra, id lobortis purus iaculis. Donec non magna sit
                amet odio pretium euismod. Fusce non accumsan risus. Vestibulum
                lacinia vehicula augue, ac condimentum nulla laoreet in. Nunc
                sit amet magna sagittis, viverra ligula ac, vulputate est. Sed
                facilisis dignissim lectus non semper. Quisque elementum massa
                sed ante faucibus consequat. Etiam fringilla turpis est. Donec
                eleifend convallis est a fringilla. Morbi at nibh sollicitudin,
                feugiat nisl at, molestie leo.
              </p>
              <p className="about_service">
                Nam vel quam ligula. Cras aliquam varius bibendum. Nulla
                suscipit dictum metus, at dapibus mauris venenatis a. Aliquam
                venenatis leo vel suscipit rhoncus. Maecenas vulputate a ligula
                sit amet interdum. Fusce in metus id mauris elementum
                consectetur. Maecenas lobortis, dolor ut porta tincidunt, tellus
                ante egestas mi, vitae imperdiet neque turpis a felis. Class
                aptent taciti sociosqu ad litora torquent per conubia nostra,
                per inceptos himenaeos. Nulla eu ipsum dui. Cras viverra sem id
                vehicula imperdiet. Aliquam erat volutpat.
              </p>
            </div>
            <div className="about_service">
              <img
                className="about_service__picture"
                src={AboutPicture}
                alt="Picture"
              />
            </div>
          </div>
        </section>

        {/* <!-- END OF Bootstrap "Containers" component --> */}
      </div>
      <Footer kind={"short"} />
    </>
  );
}
