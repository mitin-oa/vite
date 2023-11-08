import { useMediaQuery } from "react-responsive";
import { Footer } from "./components/footer/footer";
import FileUpload from "./components/fileUploader/FileUploader";
import { useState } from "react";
import ShortHeader from "./components/shortHeader/shortHeader";

export default function UpLoad() {
  const isMobileScreen = useMediaQuery({ query: "(max-width: 1160px" });
  const isPhoneScreen = useMediaQuery({ query: "(max-width: 760px" });

  const [newUserInfo, setNewUserInfo] = useState({
    profileImages: [],
  });

  const updateUploadedFiles = (files: any) =>
    setNewUserInfo({ ...newUserInfo, profileImages: files });

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    //logic to create new user...
  };

  return (
    <div className="app">
      <ShortHeader />
      {/* <!-- Bootstrap "Containers" component. Taken from https://getbootstrap.com/docs/5.2/layout/containers/#how-they-work --> */}
      <section className="main-content">
        <div className="container">
          <div className="row">
            <h2>Upload files</h2>
            <p>File extensions allowed: .doc, .docx, .rtf, .pdf, .odt, .txt</p>
            <form onSubmit={handleSubmit}>
              <FileUpload
                accept=".jpg,.png,.jpeg,.doc,.docx,.rtf,.pdf,.odt,.txt"
                label=""
                multiple
                updateFilesCb={updateUploadedFiles}
              />
              <button type="submit">PROCEED</button>
            </form>
          </div>
        </div>
      </section>
      <Footer kind={"short"} />
      {/* <!-- END OF Bootstrap "Containers" component --> */}
    </div>
  );
}
