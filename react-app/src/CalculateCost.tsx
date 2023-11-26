import { useMediaQuery } from "react-responsive";
import { Footer } from "./components/footer/footer";
import NumInput from "./components/InputNumber";
import { ChangeEvent, SetStateAction, useState } from "react";
import { HeaderMenu } from "./components/header/header";
import Button from "./components/Button";

export default function CalculateCost({
  handleSignIn,
  handleSignUp,
  modalIsOpen,
  setIsOpen,
  onSignIn,
}: any) {
  const isMobileScreen = useMediaQuery({ query: "(max-width: 1160px" });
  const isPhoneScreen = useMediaQuery({ query: "(max-width: 760px" });
  const [numPages, onChange]: any = useState();
  const onPagesChange: any = (e: ChangeEvent<HTMLInputElement>) => {
    const numPages = !Number.isNaN(e.target.valueAsNumber)
      ? e.target.valueAsNumber
      : null;
    onChange(numPages);
  };
  const [calculateCost, setCalculateCost] = useState(false);
  function handleCalculation() {
    setCalculateCost(!calculateCost);
  }
  const [expressDelivery, setExpressDelivery] = useState(false);

  return (
    <>
      <div className="app">
        <HeaderMenu
          kind="short"
          handleSignIn={handleSignIn}
          handleSignUp={handleSignUp}
          modalIsOpen={modalIsOpen}
          setIsOpen={setIsOpen}
          onSignIn={onSignIn}
        />
        <section
          className="main-content container"
          style={{ flexDirection: "column" }}
        >
          <h2>To calculate cost</h2>
          <p>
            The length of agreement determines number of credits to be used (20$
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
                    <label>2. Optional Extras</label>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        name="expressDelivery"
                        id="expressDelivery"
                        onChange={(e) => setExpressDelivery(e.target.checked)}
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
                      Is there any information that you would like to bring to
                      our attention about your contract? (Optional)
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
              <div className="col-md-6" id="rightColumn">
                <form id="orderForm">
                  <div className="form-group mb-3">
                    <label>3. Contact Information</label>
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
                    <label htmlFor="contactPersonName">
                      Contact person name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="contactPersonName"
                      id="contactPersonName"
                      value="John Boil"
                      required
                    />
                  </div>
                  <div className="form-group mb-3" style={{ margin: "0 auto" }}>
                    <Button
                      children="Proceed to checkout"
                      color="orange"
                      onClick={handleCalculation}
                    />
                  </div>
                </form>

                {/* <!-- PayPal кнопка (placeholder) --> */}
              </div>
            </div>
          </div>
          {calculateCost && (
            <table className="table">
              <tbody>
                <tr>
                  <td rowSpan={2}>Total</td>
                  <td>Number of pages</td>
                  <td>Estimated cost in credits</td>
                  <td>Estimated cost in Euro</td>
                </tr>
                <tr>
                  <td>{numPages ? numPages : 1}</td>
                  <td>
                    {numPages
                      ? expressDelivery
                        ? numPages * 1.5
                        : numPages
                      : 1}
                  </td>
                  <td>
                    {numPages
                      ? expressDelivery
                        ? numPages * 1.5 * 20
                        : numPages * 20
                      : 20}
                  </td>
                </tr>
              </tbody>
            </table>
          )}
        </section>
      </div>
      <Footer kind={"short"} />
    </>
  );
}
