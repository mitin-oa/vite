import { useMediaQuery } from "react-responsive";
import { ShortHeader } from "./components/shortHeader/shortHeader";
import FileUploader from "./components/FileUploader";
import { Footer } from "./components/footer/footer";

export default function UpLoad() {
  const isMobileScreen = useMediaQuery({ query: "(max-width: 1160px" });
  const isPhoneScreen = useMediaQuery({ query: "(max-width: 760px" });

  return (
    <div className="app">
      <ShortHeader />
      {/* <!-- Bootstrap "Containers" component. Taken from https://getbootstrap.com/docs/5.2/layout/containers/#how-they-work --> */}
      <section className="main-content">
        <div className="container">
          <div className="row">
            <h2>Upload your files</h2>
            <p>File extensions allowed: .doc, .docx, .rtf, .pdf, .odt, .txt</p>
            <FileUploader />
          </div>
        </div>
      </section>
      <Footer kind={"short"} />
      {/* <!-- END OF Bootstrap "Containers" component --> */}
    </div>
  );
}

{
  /* <!-- END OF Bootstrap "Containers" component --> */
}

{
  /* <!-- Bootstrap "Containers" component. Taken from https://getbootstrap.com/docs/5.2/layout/containers/#how-they-work --> */
}
{
  /* <section className="main-content">
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
        </div> */
}
{
  /* <!-- END OF Bootstrap "Containers" component --> */
}

{
  /* <!-- Bootstrap "Containers" component. Taken from https://getbootstrap.com/docs/5.2/layout/containers/#how-they-work --> */
}
{
  /* <div className="container">
          <div className="row">
            <div className="content">
              <div className="table-responsive-sm">
                <table className="allUploadedFiles"></table>
              </div>
            </div>
          </div>
        </div>
      </section> */
}
