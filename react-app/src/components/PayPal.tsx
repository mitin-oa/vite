import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import * as React from "react";

import { refreshToken } from "../fetchScripts/fetchWithRefreshAuth";

const debug = true;

// * VK: Significant for the backend area. Please exercise caution when making alterations
// * VK: Defining the type of properties (props) for the PayPal component.
type PaymentProps = {
  amountPay: number;
  onSuccess?: (
    payPalOrderId: string,
    totalAmount: number,
    sellerTransactionId: string,
    paymentStatus: string,
    paymentCaptureId: string
  ) => void;
  onError?: (error: string) => void; // * VK: Adding a collback for error handling
};

type InitState = {
  amount: number;
  orderID: string;
  onApproveMessage: string;
  onErrorMessage: string;
};

export default class PayPal extends React.Component<PaymentProps, InitState> {
  constructor(props: PaymentProps) {
    super(props);
    this.state = {
      amount: this.props.amountPay || 1, // * VK: Value set to use default minimum possible payment
      orderID: "",
      onApproveMessage: "",
      onErrorMessage: "string",
    };

    this.createOrder = this.createOrder.bind(this);
    this.onApprove = this.onApprove.bind(this);
    this.onError = this.onError.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  createOrder(data: Record<string, unknown>, actions: any) {
    console.log("createOrder");
    console.log(actions);
    if (debug) console.log("Creating order for amount", this.state.amount);

    return actions.order
      .create({
        purchase_units: [
          {
            amount: {
              currency_code: "USD",
              value: this.state.amount,
            },
          },
        ],
      })
      .then((orderID: any) => {
        console.log(orderID);
        this.setState({ orderID: orderID });
        return orderID;
      });
  }

  async onApprove(data: any, actions: any) {
    let app = this;

    // * VK: Additional rechecking of authorization before making a payment.
    const validTokens = await refreshToken();
    if (validTokens == false) {
      const errorMessage = {
        message: "Transaction terminated due to the expiration of the session!",
      };
      app.onError(errorMessage); // Pass the error object to the onError method
      return;
    }


    return actions.order.capture().then(function (details: any) {
      const orderId = details.id;
      const sellerTransactionId = details.purchase_units[0].payments.captures[0].id;
      const paymentStatus = details.purchase_units[0].payments.captures[0].status;
      const paymentCaptureId = details.purchase_units[0].payments.captures[0].id
      const amount = app.state.amount;

      app.setState({
        onApproveMessage: `Transaction completed by ${details.payer.name.given_name}!`,
      });

      // * VK: Significant for the backend area. Please exercise caution when making alterations
      // * VK: Call the onSuccess callback if it has been passed
      if (app.props.onSuccess) {
        app.props.onSuccess(orderId, amount, sellerTransactionId, paymentStatus, paymentCaptureId);
      }
    });
  }

  onError(err: Record<string, unknown>) {
    // * VK: заменить на сообщение, передаваемое в параметрах
    // * VK: требуется согласовать типы данных, onErrorMessage не принимает тип unknown
    const errorMessage = "An error occurred"; 
    this.setState({
      onErrorMessage: errorMessage,
    });

    // Проверяем, что колбэк onError был предоставлен и вызываем его
    if (this.props.onError) {
      this.props.onError(errorMessage);
    }
  }

  onClick() {
    if (debug) console.log("When clicked, amount was", this.state.amount);
  }

  render() {
    return (
      <div style={{ minHeight: "300px" }}>
        <table className="table" style={{ margin: "30px 0 30px" }}>
          <tbody>
            <tr>
              <th>
                <label htmlFor="amount">Order Amount: </label>
              </th>
              {/* // * VK: this.props.amountPay changed to use default minimum possible payment */}
              <td>${this.state.amount}</td>
            </tr>
          </tbody>
        </table>
        {/* // * VK: clientId here now - sandbox seller id */}
        <PayPalScriptProvider
          options={{
            clientId:
              "AUprT9UtwMMy-HhFsqQf4jYc0_0HtkOK9PWJBvVuMm5MlBZEv6MO-2MuWxHM5xqcEqUl0DYmnr9OBGv6",
          }}
        >
          <PayPalButtons
            createOrder={this.createOrder}
            onApprove={this.onApprove}
            onError={this.onError}
            onClick={this.onClick}
          />
        </PayPalScriptProvider>
      </div>
    );
  }
}
