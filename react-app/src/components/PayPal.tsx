import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import * as React from "react";

const debug = true;

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
        <PayPalScriptProvider options={{ clientId: "test" }}>
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
