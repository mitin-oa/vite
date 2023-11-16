import { useMediaQuery } from "react-responsive";
import PayPal from "./components/PayPal";
import { Footer } from "./components/footer/footer";
import {
  ChangeEvent,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import NumInput from "./components/InputNumber";
import ModalWindow from "./components/modal/modal";
import ShortHeader from "./components/shortHeader/shortHeader";

// * VK Backend: connecting an external script to process requests to the backend
import { sendPaymentDataToServer } from "../src/components/scripts/fetch";
import { HeaderMenu } from "./components/header/header";

export default function BuyCredits({
  kind,
  onSignIn,
  handleSignIn,
  modalIsOpen,
  setIsOpen,
}: any) {
  const isMobileScreen = useMediaQuery({ query: "(max-width: 1160px" });
  const isPhoneScreen = useMediaQuery({ query: "(max-width: 760px" });
  const [numCredits, onChange]: any = useState();
  const [show, setShow] = useState(false);
  const onCreditsChange: any = (e: ChangeEvent<HTMLInputElement>) => {
    const numCredits = !Number.isNaN(e.target.valueAsNumber)
      ? e.target.valueAsNumber
      : null;
    onChange(numCredits);
  };

  // * ↓ VK: Significant for the backend area. Please exercise caution when making alterations
  const [showModal, setShowModal] = useState(false); // * VK: State to control the visibility of a modal window

  const handlePayment = (transactionId: string, amount: number) => {
    console.log("Transaction ID:", transactionId);
    console.log("Amount:", amount);

    // * VK Backend: sending payment data to server
    sendPaymentDataToServer(transactionId, amount);

    // * VK: Closing the modal window after successful payment
    setShowModal(!showModal);
  };
  // * ↑ VK: Significant for the backend area. Please exercise caution when making alterations

  console.log(show);
  return (
    <>
      <div className="app">
        <HeaderMenu
          kind={kind}
          onSignIn={onSignIn}
          handleSignIn={handleSignIn}
          modalIsOpen={modalIsOpen}
          setIsOpen={setIsOpen}
        />
        {/* <!-- Bootstrap "Containers" component. Taken from https://getbootstrap.com/docs/5.2/layout/containers/#how-they-work --> */}
        <section className="main-content">
          <div className="container mt-5">
            <div className="row">
              {/* <!-- Левая колонка с текстом --> */}
              <div className="col-md-6">
                <h2>If you want to purchase of credits</h2>
                <p>1 credit costs 1$</p>
                <p>
                  The length of agreement determines number of credits to be
                  used (20 credits per page)
                </p>
                <p>Delivery within 23-72 hours + 50% to the total cost</p>
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
                      <label>Amount to Pay: </label>
                      <span id="amountToPay">{1 * numCredits || 1}</span> $
                    </div>

                    {/* <!-- Button to show the PayPal button --> */}
                  </div>
                  {/* <!-- PayPal кнопка (placeholder) --> */}
                  <ModalWindow
                    title={"Proceed"}
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
