import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import * as React from "react";

const debug = true;

// * VK: Significant for the backend area. Please exercise caution when making alterations
/** * VK: Defining the type of properties (props) for the PayPal component.
 * - amountPay: a required number representing the payment amount.
 * - onSuccess: an optional callback function called when the PayPal transaction completes successfully.
 * Takes two parameters: transactionId (transaction ID) and amount (payment amount).
 * If passed, this function will be called by the component upon successful payment.
 */
type PaymentProps = {
  amountPay: number;
  onSuccess?: (transactionId: string, amount: number) => void;
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
        this.setState({ orderID: orderID });
        return orderID;
      });
  }

  onApprove(data: any, actions: any) {
    let app = this;
    return actions.order.capture().then(function (details: any) {
      // console.log(details.id);
      // console.log(app.state.amount);

      app.setState({
        onApproveMessage: `Transaction completed by ${details.payer.name.given_name}!`,
      });

      // * VK: Significant for the backend area. Please exercise caution when making alterations
      // * VK: Call the onSuccess callback if it has been passed
      if (app.props.onSuccess) {
        app.props.onSuccess(details.id, app.state.amount);
      }
    });
  }

  onError(err: Record<string, unknown>) {
    this.setState({
      onErrorMessage: err.toString(),
    });
  }

  onClick() {
    if (debug) console.log("When clicked, amount was", this.state.amount);

  }

  render() {
    return (
      <div style={{ minHeight: "300px" }}>
        <table className="table" style={{ maxWidth: "400px" }}>
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
        <PayPalScriptProvider options={{ clientId: "ATLcPG0Iju719cAPBCZfb_8CgpSv4Pg8xt73NQW4C8Qf6STnU84kWdVDGPHPBllV6kJbwWHiPZPvEtD4" }}>
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
