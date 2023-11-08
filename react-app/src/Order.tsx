import { useMediaQuery } from "react-responsive";
import { ShortHeader } from "./components/shortHeader/shortHeader";
import FileUploader from "./components/fileUploader/FileUploader";
import { Footer } from "./components/footer/footer";
import NumInput from "./components/InputNumber";
import { ChangeEvent, useState } from "react";

export default function Order() {
  const isMobileScreen = useMediaQuery({ query: "(max-width: 1160px" });
  const isPhoneScreen = useMediaQuery({ query: "(max-width: 760px" });
  const [numPages, onChange]: any = useState();
  const onPagesChange: any = (e: ChangeEvent<HTMLInputElement>) => {
    const numPages = !Number.isNaN(e.target.valueAsNumber)
      ? e.target.valueAsNumber
      : null;
    onChange(numPages);
  };
  return (
    <div className="app">
      <ShortHeader />
      <section className="main-content">
        <h2>
          To order, select the length of your Document, upload it & checkout
        </h2>
        <p>
          The length of agreement determines number of credits to be used (20€
          per page). Delivery within 23-72 hours is +50% to total amount.
        </p>

        <div className="container mt-5 form-container">
          <div className="row">
            {/* <!-- Левая колонка с текстом --> */}
            <div className="col-md-6" id="leftColumn">
              <form id="orderForm">
                {/*  <!-- <form id="orderForm"> --> */}
                <div className="form-group mb-3">
                  <label htmlFor="numberOfPages">
                    1. Select the number of pages in your document
                  </label>

                  <NumInput num={numPages} onChange={onPagesChange} />
                </div>
                {/* <!-- Форма загрузки --> */}
                <div className="form-group mb-3">
                  <label>2. Upload your document</label>
                  <p>
                    File extensions allowed: .doc, .docx, .rtf, .pdf, .odt, .txt
                  </p>
                  <FileUploader />
                </div>
                <div className="form-group mb-3">
                  <label>3. Optional Extras</label>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      name="expressDelivery"
                      id="expressDelivery"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="expressDelivery"
                    >
                      Express Delivery (+50%)
                    </label>
                  </div>
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="addInformation">
                    Is there any information that you would like to bring to our
                    attention about your contract? (Optional)
                  </label>
                  <textarea
                    className="form-control"
                    name="addInformation"
                    id="addInformation"
                    rows={4}
                    placeholder="Enter text"
                    value="addInformation"
                  ></textarea>
                </div>
              </form>
            </div>

            {/* <!-- Правая колонка с элементами формы --> */}
            <div className="col-md-6">
              <form id="orderForm">
                <div className="form-group mb-3">
                  <label>4. Contact Information</label>
                </div>

                <div className="form-group mb-3">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    value="sb-yhbsi27086563@personal.example.com"
                    required
                  />
                </div>

                <div className="form-group mb-3">
                  <label htmlFor="phoneNumber">Phone number</label>
                  <input
                    type="text"
                    className="form-control"
                    name="phoneNumber"
                    id="phoneNumber"
                    value="+343 12345678"
                    required
                  />
                </div>

                <div className="form-group mb-3">
                  <label htmlFor="contactPersonName">Contact person name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="contactPersonName"
                    id="contactPersonName"
                    value="John Boil"
                    required
                  />
                </div>
                <input
                  type="submit"
                  className="btn btn-primary"
                  value="Proceed to checkout"
                />
              </form>

              {/* <!-- PayPal кнопка (placeholder) --> */}
              <div
                id="paypal-button-container"
                style={{ display: "none" }}
              ></div>
            </div>
          </div>
        </div>
      </section>
      <Footer kind={"short"} />
    </div>
  );
}
