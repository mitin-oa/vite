/**
 * Contains scripts related to sending Fetch requests
 * @file fetch.tsx
 */


/**
 * Sends successful payment data for processing on the server
 * @param payPalOrderID - order ID returned by the PayPal API after a successful payment
 * @param totalAmount - the amount entered by the user for payment
 */
function sendPaymentDataToServer(payPalOrderID: any, totalAmount: any) {

  const dataToSend = { payPalOrderID: payPalOrderID, totalAmount: totalAmount };
  let serverResponse;

  fetch('/api/process-payment', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(dataToSend)
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      serverResponse =  data;
    })
    .catch(error => {
      console.error('Error sending payment data:', error);
    });

    return serverResponse;
}

export { sendPaymentDataToServer };
