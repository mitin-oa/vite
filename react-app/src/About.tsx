import { useMediaQuery } from "react-responsive";
import { Footer } from "./components/footer/footer";
import AboutPicture from "../public/about_pic.png";
import { HeaderMenu } from "./components/header/header";

export default function About({
  onSignIn,
  handleSignIn,
  handleSignUp,
  modalIsOpen,
  setIsOpen,
}: any) {
  const isMobileScreen = useMediaQuery({ query: "(max-width: 1160px" });
  const isPhoneScreen = useMediaQuery({ query: "(max-width: 760px" });

  return (
    <>
      <div className="app">
        <HeaderMenu
          kind="short"
          onSignIn={onSignIn}
          handleSignUp={handleSignUp}
          handleSignIn={handleSignIn}
          modalIsOpen={modalIsOpen}
          setIsOpen={setIsOpen}
        />
        {/* <!-- Bootstrap "Containers" component. Taken from https://getbootstrap.com/docs/5.2/layout/containers/#how-they-work --> */}
        <section className="main-content">
          <div className="d-md-flex flex-md-row flex sm-column">
            <div className="row about_service">
              <h2>About service</h2>
              <p>
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
              <p>
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
                width={"100%"}
                height={"100%"}
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
