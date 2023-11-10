import { useMediaQuery } from "react-responsive";
import { Footer } from "./components/footer/footer";
import FileUpload from "./components/fileUploader/FileUploader";
import { useState } from "react";
import ShortHeader from "./components/shortHeader/shortHeader";
import FileUploader from "./components/fileUploader/fileUploaderValia";
import { HeaderMenu } from "./components/header/header";

export default function About() {
  const isMobileScreen = useMediaQuery({ query: "(max-width: 1160px" });
  const isPhoneScreen = useMediaQuery({ query: "(max-width: 760px" });

  return (
    <div className="app">
      <HeaderMenu kind="short" />
      {/* <!-- Bootstrap "Containers" component. Taken from https://getbootstrap.com/docs/5.2/layout/containers/#how-they-work --> */}
      <section className="main-content">
        <div className="container">
          <div className="row">
            <h2>About service</h2>
            <p>Fgfgfj cmvnlvjjc tokgeog flkgkge cv fvj gkergr</p>
          </div>
        </div>
      </section>
      <Footer kind={"short"} />
      {/* <!-- END OF Bootstrap "Containers" component --> */}
    </div>
  );
}
