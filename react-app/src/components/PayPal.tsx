import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import * as React from "react";

// * VK Backend: connecting an external script to process requests to the backend
import { sendPaymentDataToServer } from './scripts/fetch';


const debug = true;

// * VK Backend: Storing this in the app variable allows  to access 
// * component's properties and methods inside the callback function.
let app = this;

type AmountProps = {
  amountPay: number;
};

type InitState = {
  amount: number;
  orderID: string;
  onApproveMessage: string;
  onErrorMessage: string;
};

export default class PayPal extends React.Component<AmountProps, InitState> {
  constructor(props: AmountProps) {
    super(props);
    this.state = {
      amount: this.props.amountPay,
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
      console.log(details.id);
      console.log(app.state.amount);
      
      // * VK Backend: sending payment data to server
      sendPaymentDataToServer(details.id, app.state.amount);

      app.setState({
        onApproveMessage: `Transaction completed by ${details.payer.name.given_name}!`,
      });
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
              <td>${this.props.amountPay}</td>
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
