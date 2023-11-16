import { useMediaQuery } from "react-responsive";
import { Footer } from "./components/footer/footer";
import { useState } from "react";
import FileUploader from "./components/fileUploader/fileUploaderValia";
import { HeaderMenu } from "./components/header/header";
import Button from "./components/Button";

export default function UpLoad({
  onSignIn,
  handleSignIn,
  modalIsOpen,
  setIsOpen,
}: any) {
  const isMobileScreen = useMediaQuery({ query: "(max-width: 1160px" });
  const isPhoneScreen = useMediaQuery({ query: "(max-width: 760px" });

  const [newUserInfo, setNewUserInfo] = useState({
    profileImages: [],
  });

  const updateUploadedFiles = (files: any) =>
    setNewUserInfo({ ...newUserInfo, profileImages: files });

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
          modalIsOpen={modalIsOpen}
          setIsOpen={setIsOpen}
        />
        {/* <!-- Bootstrap "Containers" component. Taken from https://getbootstrap.com/docs/5.2/layout/containers/#how-they-work --> */}
        <section className="main-content">
          <div className="container">
            <div className="row">
              <h2>Upload files</h2>
              <p>
                File extensions allowed: .doc, .docx, .rtf, .pdf, .odt, .txt
              </p>
              <form onSubmit={handleSubmit}>
                <FileUploader />
              </form>
            </div>
          </div>
          <Button children="Proceed" color={""} onClick={() => handleSubmit} />
        </section>

        {/* <!-- END OF Bootstrap "Containers" component --> */}
      </div>
      <Footer kind={"short"} />
    </>
  );
}
