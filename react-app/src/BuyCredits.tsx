import { useMediaQuery } from "react-responsive";
import PayPal from "./components/PayPal";
import Footer from "./components/footer/footer";
import { ChangeEvent, useState } from "react";
import NumInput from "./components/InputNumber";
import ModalWindow from "./components/modal/modal";
import HeaderMenu from "./components/header/header";
import Alert from "./components/Alert";

export default function BuyCredits({
  kind,
  onSignIn,
  onSignUp,
  handleSignIn,
  handleSignUp,
  setUserProfileData,
  modalIsOpen,
  setIsOpen,
}: any) {
  const isMobileScreen = useMediaQuery({ query: "(max-width: 1160px" });
  const isPhoneScreen = useMediaQuery({ query: "(max-width: 760px" });
  const [numCredits, onChange]: any = useState(1);
  const [show, setShow] = useState(false);
  const onCreditsChange: any = (e: ChangeEvent<HTMLInputElement>) => {
    const numCredits = !Number.isNaN(e.target.valueAsNumber)
      ? e.target.valueAsNumber
      : null;
    onChange(numCredits);
  };

  // * ↓ VK: Significant for the backend area. Please exercise caution when making alterations
  const [showModal, setShowModal] = useState(false); // * VK: State to control the visibility of a modal window
  const [paymentStatus, setPaymentStatus] = useState(false);

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
    console.log("serverResponse", serverResponse);
    setPaymentStatus(serverResponse.success);
    // * VK: Closing the modal window after successful payment
    setShowModal(!showModal);
  };

  function sendPaymentDataToServer(dataToSend: any) {
    return new Promise((resolve, reject) => {
      fetch("/api/process-payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      })
        .then((response) => response.json())
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          console.error("Error sending payment data:", error);
          reject(error);
        });
    });
  }
  // * ↑ VK: Significant for the backend area. Please exercise caution when making alterations

  // console.log(show);

  return (
    <>
      <div className="app">
        <HeaderMenu
          kind={kind}
          onSignIn={onSignIn}
          onSignUp={onSignUp}
          handleSignIn={handleSignIn}
          handleSignUp={handleSignUp}
          modalIsOpen={modalIsOpen}
          setIsOpen={setIsOpen}
          setUserProfileData={setUserProfileData}
        />
        {/* <!-- Bootstrap "Containers" component. Taken from https://getbootstrap.com/docs/5.2/layout/containers/#how-they-work --> */}
        <section className="main-content">
          <div className="container mt-5">
            <div className="row">
              {paymentStatus ? (
                <Alert
                  children={
                    paymentStatus
                      ? "The payment has been done"
                      : "Payment has been failed"
                  }
                  onClose={() => {
                    setPaymentStatus(!paymentStatus);
                  }}
                />
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className="container mt-5">
            <div className="row">
              {/* <!-- Левая колонка с текстом --> */}
              <div className="col-md-6">
                <h2>Credits Purchase</h2>
                <ul className="nav-item">
                  <li style={{ marginBottom: "10px" }}>1 credit costs 1$</li>
                  <li style={{ marginBottom: "10px" }}>
                    The size of document determines cost in credits (20 credits
                    per page)
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    Express delivery (23-72 hours) require 50% increase of cost
                  </li>
                </ul>
              </div>

              {/* <!-- Правая колонка с элементами формы --> */}
              <div className="col-md-6 ">
                <form>
                  <div className="form-container">
                    <div className="form-group mb-3">
                      <label htmlFor="quantity">
                        Select the number of credits you want to purchase
                      </label>
                      <NumInput num={numCredits} onChange={onCreditsChange} />
                    </div>

                    {/*  <!-- Элемент для отображения суммы к оплате --> */}
                    <div className="form-group mb-3">
                      <label>Amount to Pay:</label>
                      <span
                        id="amountToPay"
                        style={{ fontWeight: "650", color: "#ec720b" }}
                      >
                        {" " + (numCredits || 1) + " $"}
                      </span>{" "}
                    </div>

                    {/* <!-- Button to show the PayPal button --> */}
                  </div>
                  {/* <!-- PayPal кнопка (placeholder) --> */}

                  <ModalWindow
                    title={"Proceed to pay"}
                    // * VK: Significant for the backend area. Please exercise caution when making alterations
                    // * VK: Passing the handlePaymentSuccess function to the PayPal component via the onSuccess property
                    childComp={
                      <PayPal
                        amountPay={1 * numCredits}
                        onSuccess={handlePayment}
                      />
                    }
                    modalIsOpen={showModal}
                    openModal={() => setShowModal(true)}
                    closeModal={() => setShowModal(false)}
                    btnModalStyle={"modal-btn"}
                  />
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer kind={"short"} />
    </>
  );
}
