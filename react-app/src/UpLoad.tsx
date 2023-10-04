import { useMediaQuery } from "react-responsive";
import { HashLink as Link } from "react-router-hash-link";
import HomePic from "../public/home.png";
import { FileDrop } from "./DragUpload";
import { ShortHeader } from "./components/shortHeader/shortHeader";
import { useState } from "react";

export default function UpLoad() {
  const isMobileScreen = useMediaQuery({ query: "(max-width: 1160px" });
  const isPhoneScreen = useMediaQuery({ query: "(max-width: 760px" });
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };
  return (
    <div className="app">
      <ShortHeader />
      {/* <!-- Bootstrap "Containers" component. Taken from https://getbootstrap.com/docs/5.2/layout/containers/#how-they-work --> */}
      <section className="main-content">
        <div className="container">
          <div className="row">
            <h2>Upload your files</h2>
            <p>File extensions allowed: .doc, .docx, .rtf, .pdf, .odt, .txt</p>
            {/* <!-- MyTIP When you set enctype="multipart/form-data" the browser automatically sets up the correct data encoding --> */}
            <form
              className="row row-cols-sm-auto g-3 align-items-center"
              action="/upload"
              method="post"
              encType="multipart/form-data"
            >
              <div className="col-12">
                <div className="input-group">
                  <input type="hidden" name="userID" id="userID" />
                </div>
              </div>
              <div className="col-12">
                <div className="file-upload">
                  <label>
                    <input
                      type="file"
                      name="fileToUpload"
                      id="fileToUpload"
                      accept=".doc, .docx, .rtf, .pdf, .odt, .txt"
                      onChange={handleFileChange}
                    />
                    <span>Choose file</span>
                  </label>
                </div>
                {file && (
                  <section>
                    File details:
                    <ul>
                      <li>Name: {file.name}</li>
                      <li>Type: {file.type}</li>
                      <li>Size: {file.size} bytes</li>
                    </ul>
                  </section>
                )}
              </div>
              <div className="col-12">
                <div className="input-group">
                  <input type="submit" value="Upload" name="submit" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      {/* <!-- END OF Bootstrap "Containers" component --> */}

      {/* <!-- Bootstrap "Containers" component. Taken from https://getbootstrap.com/docs/5.2/layout/containers/#how-they-work --> */}
      <section className="main-content">
        <div className="container">
          <div className="col-12">
            <div className="input-group">
              <input
                className="text-wrap"
                type="button"
                value="Show all uploaded files"
                onClick={() => FileDrop()}
              />
            </div>
          </div>
        </div>
        {/* <!-- END OF Bootstrap "Containers" component --> */}

        {/* <!-- Bootstrap "Containers" component. Taken from https://getbootstrap.com/docs/5.2/layout/containers/#how-they-work --> */}
        <div className="container">
          <div className="row">
            <div className="content">
              <div className="table-responsive-sm">
                <table className="allUploadedFiles"></table>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- END OF Bootstrap "Containers" component --> */}
    </div>
  );
}
