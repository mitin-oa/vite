import { useMediaQuery } from "react-responsive";
import Footer from "./components/footer/footer";
import { ChangeEvent, useState } from "react";
import HeaderMenu from "./components/header/header";
import Button from "./components/Button";
import FileChooser from "./components/fileUploader/fileChooser";
import ModalWindow from "./components/modal/modal";
import PayPal from "./components/PayPalGuest";


export default function CalculateCost({
  handleSignIn,
  handleSignUp,
  modalIsOpen,
  setIsOpen,
  onSignIn,
  onSignUp,
  setUserProfileData,
}: any) {
  const isMobileScreen = useMediaQuery({ query: "(max-width: 1160px" });
  const isPhoneScreen = useMediaQuery({ query: "(max-width: 760px" });
  const [numPages, setNumPages]: any = useState();
  const onPagesChange: any = (e: ChangeEvent<HTMLInputElement>) => {
    const numPages = !Number.isNaN(e.target.valueAsNumber)
      ? e.target.valueAsNumber
      : null;
    setNumPages(numPages);
  };
  const [checkedEmail, setCheckedEmail] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);

  const [calculateCost, setCalculateCost] = useState(false);


  const [expressDelivery, setExpressDelivery] = useState(false);
  const [addInformation, setAddInformation] = useState("Add information");
  const [inputName, setInputName] = useState("John Boil");
  const [inputEmail, setInputEmail] = useState(
    "sb-yhbsi27086563@personal.example.com"
  );
  const [inputPhone, setInputPhone] = useState("+343 12345678");

  const [companyName, setCompanyName] = useState("Company 1");
  const [companyAddress, setCompanyAddress] = useState("Company 1 address");
  const [companyIndustry, setCompanyIndustry] = useState("Company 1 Industry");

  // Определяем тип данных для переменной contractType
  type ContractType = 'type 1' | 'type 2' | 'type 3' | '';
  const [contractType, setContractType] = useState<ContractType>('');


  const [contractDescription, setContractDescription] = useState("Contract Description 1");
  const [contractValue, setContractValue] = useState("10000 $");

  const [counterpartyName, setCounterpartyName] = useState("Counterparty 1");
  const [counterpartyAddress, setCounterpartyAddress] = useState("Counterparty 1 address");

  // Определяем тип данных для переменной serviceType
  type ServiceType = 'review' | 'redlining' | 'negotiation' | '';
  const [serviceType, setServiceType] = useState<ServiceType>('');
  const [deliveryTime, setDeliveryTime] = useState('');



  const [calculateCostInf, setCalcCostInf] = useState({
    name: "",
    email: "",
    phone: "",
    numberOfPages: "",
    express: false,
    notes: "",
  });

  function handleCalculation() {
    setCalculateCost(true);
  }
  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    //logic ...
  };

  function handleOrder() {
    setCalcCostInf({
      name: inputName,
      email: inputEmail,
      phone: inputPhone,
      numberOfPages: numPages,
      express: expressDelivery,
      notes: addInformation,
    });
    // add logic...
  }

  function checkEmail() {
    setCheckedEmail(true);
    setButtonClicked(true);
    console.log("checkEmail");
  }
  const [uploadedContracts, setUploadedContracts] = useState<File[]>([]);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const [totalPages, setTotalPages] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  const [totalCostInCerdits, setTotalCostInCerdits] = useState(0);
  const [totalCostCalculated, setTotalCostCalculated] = useState(false);


  const [showModal, setShowModal] = useState(false); // * VK: State to control the visibility of a modal window
  const [paymentStatus, setPaymentStatus] = useState(false);

  const handleContractsUpload = (files: File[]) => {
    setTotalCostCalculated(false);
    console.log("handleContractsUpload");

    console.log(files);
    // Сохраняем список полученных файлов в состоянии
    setUploadedContracts(files);
    setTotalPages(0);
  };

  const handleFilesUpload = (files: File[]) => {
    console.log("handleFilesUpload");

    console.log(files);
    // Сохраняем список полученных файлов в состоянии
    setUploadedFiles(files);
    setTotalPages(0);
  };

  function calculateTotalCost() {
    console.log("calculateTotalCost");
    setTotalCost(100);
    setTotalCostInCerdits(20);
    setTotalCostCalculated(true);
  }

  function proceed() {
    console.log("proceed");
  }

  function sendOtherInstructions() {
    console.log("sendOtherInstructions");
  }

  const handlePayment = async (
    payPalOrderId: string,
    totalAmount: number,
    sellerTransactionId: string,
    paymentStatus: string,
    paymentCaptureId: string
  ) => {
    // * VK Backend: sending payment data to server
    const dataToSend = {
      payPalOrderId: payPalOrderId,
      totalAmount: totalAmount,
      sellerTransactionId: sellerTransactionId,
      paymentStatus: paymentStatus,
      paymentCaptureId: paymentCaptureId,
    };

    const serverResponse: any = await sendPaymentDataToServer(dataToSend);
    setPaymentStatus(true); // потом удалить!!!
    // console.log("serverResponse", serverResponse);
    // setPaymentStatus(serverResponse.success);
    // // // * VK: Closing the modal window after successful payment
    setShowModal(!showModal);
  };

  function sendPaymentDataToServer(dataToSend: any) {
    console.log("данные отправлены");
    // return new Promise((resolve, reject) => {
    //   fetch("/api/process-payment", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(dataToSend),
    //   })
    //     .then((response) => response.json())
    //     .then((data) => {
    //       resolve(data);
    //     })
    //     .catch((error) => {
    //       console.error("Error sending payment data:", error);
    //       reject(error);
    //     });
    // });
  }

  const handlePayPalError = (error: string) => {
    console.log("An error occurred while making a payment: " + error);
    setPaymentStatus(false);
    setShowModal(!showModal);
  };
  console.log(addInformation);
  return (
    <>
      <div className="app">
        <HeaderMenu
          kind="short"
          handleSignIn={handleSignIn}
          handleSignUp={handleSignUp}
          setUserProfileData={setUserProfileData}
          modalIsOpen={modalIsOpen}
          setIsOpen={setIsOpen}
          onSignIn={onSignIn}
          onSignUp={onSignUp}
        />
        <section className="main-content container" style={{ flexDirection: "column" }}>
          {paymentStatus ? (
            // Если платеж выполнен, будет отображать эти данные
            <>
              <h2>Payment completed successfully! Your order has been processed.</h2>

              <div className="container mt-5 form-container">
                <div className="row">
                  <div className="col-md-12" id="fullWidthColumn">
                    <form id="orderForm">
                      <div className="frame-container">
                        <h3>Other instructions</h3>
                        <div className="form-group">
                          <label htmlFor="files">
                            Upload your playbook or a model template to use if any. <br />
                            (File extensions allowed: .doc, .docx, .rtf, .pdf, .odt)
                          </label>
                          <FileChooser onFilesSelected={handleFilesUpload} />
                        </div>
                        <div className="form-group mb-3">
                          <label htmlFor="addInformation">
                            Tell us anything else that will help us serve you
                          </label>
                          <textarea
                            className="form-control"
                            name="addInformation"
                            id="addInformation"
                            rows={4}
                            placeholder="Enter text"
                            value={addInformation}
                            onChange={(e) => setAddInformation(e.target.value)}
                          ></textarea>
                        </div>
                        <div className="form-group">
                          <Button
                            children="Send"
                            color="orange"
                            onClick={sendOtherInstructions}
                            style="modal-btn"
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div >
            </>

          ) : (
            // Если платеж пока не выполнен, отображаем форму
            <>
              <h2>ORDER A REVIEW</h2>

              <div className="container mt-5 form-container">
                <div className="row">
                  <div className="col-md-12" id="fullWidthColumn">
                    <form id="orderForm">
                      <div className="frame-container">
                        <h3>Tell us about you</h3>
                        <div className="form-group mb-3">
                          <label htmlFor="contactPersonName">
                            Your name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="contactPersonName"
                            id="contactPersonName"
                            value={inputName}
                            required={true}
                            onChange={(e) => setInputName(e.target.value)}
                          />
                        </div>
                        <div className="form-group mb-3">
                          <label htmlFor="email">Your email</label>
                          <input
                            type="email"
                            className="form-control"
                            name="email"
                            id="email"
                            value={inputEmail}
                            required={true}
                            onChange={(e) => setInputEmail(e.target.value)}
                            disabled={checkedEmail}
                          />
                        </div>
                        <div className="form-group mb-3">
                          <label htmlFor="phoneNumber">Your phone number</label>
                          <input
                            type="text"
                            className="form-control"
                            name="phoneNumber"
                            id="phoneNumber"
                            value={inputPhone}
                            required
                            onChange={(e) => setInputPhone(e.target.value)}
                          />
                        </div>
                        <div className="form-group">
                          {!buttonClicked && (
                            <Button
                              children="Next"
                              color="orange"
                              onClick={checkEmail}
                              style="modal-btn"
                            />
                          )}
                        </div>
                      </div>

                      {checkedEmail && (
                        <div className="frame-container">
                          <h3>Tell us about your business</h3>
                          <div className="form-group mb-3">
                            <label htmlFor="companyName">
                              Your company name
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              name="companyName"
                              id="companyName"
                              value={companyName}
                              required={true}
                              onChange={(e) => setCompanyName(e.target.value)}
                            />
                          </div>
                          <div className="form-group mb-3">
                            <label htmlFor="companyAddress">
                              Your company address
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              name="companyAddress"
                              id="companyAddress"
                              value={companyAddress}
                              required={true}
                              onChange={(e) => setCompanyAddress(e.target.value)}
                            />
                          </div>
                          <div className="form-group mb-3">
                            <label htmlFor="companyIndustry">
                              Your company industry
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              name="companyIndustry"
                              id="companyIndustry"
                              value={companyIndustry}
                              required={true}
                              onChange={(e) => setCompanyIndustry(e.target.value)}
                            />
                          </div>
                        </div>
                      )}

                      {checkedEmail && (
                        <div className="frame-container">
                          <h3>Tell us about the contract</h3>
                          <div className="form-group mb-3">
                            <div className="form-group mb-3">
                              <label htmlFor="contractType">
                                Contract type
                              </label>
                              <select
                                className="form-control"
                                name="contractType"
                                id="contractType"
                                value={contractType}
                                required={true}
                                onChange={(e) => setContractType(e.target.value as ContractType)}
                              >
                                <option value="" disabled hidden>Select contract type</option>
                                <option value="type 1">type 1</option>
                                <option value="type 2">type 2</option>
                                <option value="type 3">type 3</option>
                              </select>
                            </div>
                          </div>

                          <div className="form-group mb-3">
                            <label htmlFor="contractDescription">
                              Contract description (what is the contract about? what are you buying?
                              Selling? Where is your company located? Where is the other party located?)
                            </label>
                            <textarea
                              className="form-control"
                              name="contractDescription"
                              id="contractDescription"
                              value={contractDescription}
                              required={true}
                              onChange={(e) => setContractDescription(e.target.value)}
                            />
                          </div>


                          <div className="form-group mb-3">
                            <label htmlFor="contractValue">
                              Contract value (how much will you pay or receive for the goods/services)
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              name="contractValue"
                              id="contractValue"
                              value={contractValue}
                              required={true}
                              onChange={(e) => setContractValue(e.target.value)}
                            />
                          </div>
                        </div>
                      )}

                      {checkedEmail && (
                        <div className="frame-container">
                          <h3>Tell us about the other party</h3>
                          <div className="form-group mb-3">
                            <label htmlFor="companyName">
                              Counterparty name (the party you are contracting with)
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              name="counterpartyName"
                              id="counterpartyName"
                              value={counterpartyName}
                              required={true}
                              onChange={(e) => setCounterpartyName(e.target.value)}
                            />
                          </div>
                          <div className="form-group mb-3">
                            <label htmlFor="counterpartyAddress">
                              Counterparty address
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              name="counterpartyAddress"
                              id="counterpartyAddress"
                              value={counterpartyAddress}
                              required={true}
                              onChange={(e) => setCounterpartyAddress(e.target.value)}
                            />
                          </div>
                        </div>
                      )}

                      {checkedEmail && (
                        <div className="frame-container">
                          <h3>Choose Service</h3>
                          <div className="form-group mb-3">
                            <label htmlFor="serviceType">
                              Type of service you want?
                            </label>
                            <select
                              className="form-control"
                              name="serviceType"
                              id="serviceType"
                              value={serviceType}
                              required={true}
                              onChange={(e) => setServiceType(e.target.value as ServiceType)}
                            >
                              <option value="" disabled hidden>Select service type</option>
                              <option value="review">Review/Check</option>
                              <option value="redlining">First round of redlining</option>
                              <option value="negotiation">Start to finish negotiation</option>
                            </select>
                          </div>
                          <div className="form-group mb-3">
                            <label htmlFor="serviceType">
                              Delivery time (drop down menu) same day, 1 day, 3 days, 5 days,
                            </label>
                            <select
                              className="form-control"
                              name="deliveryTime"
                              id="deliveryTime"
                              value={deliveryTime}
                              required={true}
                              onChange={(e) => setDeliveryTime(e.target.value as ServiceType)}
                            >
                              <option value="whenever">whenever</option>
                              <option value="same day">same day</option>
                              <option value="1 day">1 day</option>
                              <option value="3 days">3 days</option>
                              <option value="5 days">5 days</option>
                              <option value="5-10 days">5-10 days</option>
                            </select>
                          </div>
                        </div>
                      )}

                      {checkedEmail && (
                        <div className="frame-container">
                          <div className="form-group">
                            <h3>Upload files</h3>
                            <p>File extensions allowed: .doc, .docx, .rtf, .pdf, .odt</p>
                            {/* Передаем функцию обратного вызова в компонент FileChooser */}
                            <FileChooser onFilesSelected={handleContractsUpload} />
                          </div>
                          <div className="form-group">
                            {uploadedContracts.length > 0 && (
                              <Button
                                children="Calculate cost"
                                color="orange"
                                onClick={calculateTotalCost}
                                style="modal-btn"
                              />
                            )}
                          </div>
                          {/* Отображаем данные о стоимости заказа */}
                          {totalCostCalculated && (
                            <table className="table">
                              <tbody>
                                <tr>
                                  <td style={{ width: "20%", textAlign: "center" }}>
                                    Pages</td>
                                  <td style={{ width: "20%", textAlign: "center" }}>
                                    Estimated cost in credits
                                  </td>
                                  <td style={{ width: "20%", textAlign: "center" }}>
                                    Estimated cost in $</td>
                                </tr>
                                <tr>
                                  <td style={{ width: "20%", textAlign: "center" }}>
                                    {totalPages}
                                  </td>
                                  <td style={{ width: "40%", textAlign: "center" }}>
                                    {totalCost}
                                  </td>
                                  <td style={{ width: "40%", textAlign: "center" }}>
                                    {totalCostInCerdits}
                                  </td>

                                </tr>
                              </tbody>
                            </table>
                          )}
                          <div className="form-group">
                            {totalCostCalculated && (
                              <ModalWindow
                                title={"Proceed to pay"}
                                // * VK: Significant for the backend area. Please exercise caution when making alterations
                                // * VK: Passing the handlePaymentSuccess function to the PayPal component via the onSuccess property
                                childComp={
                                  <PayPal
                                    amountPay={1}
                                    onSuccess={handlePayment}
                                    onError={handlePayPalError} // * VK: Pass the error handling function
                                  />
                                }
                                modalIsOpen={showModal}
                                openModal={() => setShowModal(true)}
                                closeModal={() => setShowModal(false)}
                                btnModalStyle={"modal-btn"}
                              />
                            )}
                          </div>
                        </div>
                      )}
                    </form>
                  </div>
                </div>
              </div >
            </>
          )}

        </section >

      </div >
      <Footer kind={"short"} />
    </>
  );
}
