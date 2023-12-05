import { useMediaQuery } from "react-responsive";
import { Footer } from "./components/footer/footer";
import { useContext, useState } from "react";
import FileUploader from "./components/fileUploader/fileUploaderValia";
import HeaderMenu from "./components/header/header";
import { SignedInContext, SignedUpContext } from "./App";

export default function UpLoad({
  onSignIn,
  handleSignIn,
  handleSignUp,
  modalIsOpen,
  setIsOpen,
}: any) {
  const isMobileScreen = useMediaQuery({ query: "(max-width: 1160px" });
  const isPhoneScreen = useMediaQuery({ query: "(max-width: 760px" });
  const signedIn = useContext(SignedInContext);
  const signedUp = useContext(SignedUpContext);
  console.log(signedIn);
  console.log(signedUp);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  /* const [newUserInfo, setNewUserInfo] = useState({
    profileImages: [],
  }); */

  /* const updateUploadedFiles = (files: any) =>
    setNewUserInfo({ ...newUserInfo, profileImages: files }); */

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    //logic ...
  };

  return (
    <>
      <div className="app">
        <HeaderMenu
          kind="short"
          onSignIn={onSignIn}
          handleSignIn={handleSignIn}
          handleSignUp={handleSignUp}
          modalIsOpen={modalIsOpen}
          setIsOpen={setIsOpen}
          setUserProfileData={undefined}
        />
        {/* <!-- Bootstrap "Containers" component. Taken from https://getbootstrap.com/docs/5.2/layout/containers/#how-they-work --> */}

        <section className="main-content">
          <div className="row">
            <h2>Upload files</h2>
            <p>File extensions allowed: .doc, .docx, .rtf, .pdf, .odt, .txt</p>
            <form onSubmit={handleSubmit}>
              <FileUploader
                setIsOpen={setIsOpen}
                handleSignIn={handleSignIn}
                handleSignUp={handleSignUp}
                modalIsOpen={modalIsOpen}
              />
            </form>
          </div>
          {/* {signedIn ? (
            <Button
              children="Proceed"
              color={""}
              onClick={() => handleSubmit}
            />
          ) : (
            <ModalWindow
              title={"Proceed"}
              childComp={
                signedUp ? (
                  <LogInForm onSignIn={handleSignIn} onSignUp={handleSignUp} />
                ) : (
                  <SignInForm onSignUp={handleSignUp} />
                )
              }
              modalIsOpen={modalIsOpen}
              openModal={openModal}
              closeModal={closeModal}
            />
          )}{" "} */}
        </section>

        {/* <!-- END OF Bootstrap "Containers" component --> */}
      </div>
      <Footer kind={"short"} />
    </>
  );
}
