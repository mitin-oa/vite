import { fetchWithRefreshAuth } from "./fetchWithRefreshAuth";


/**
 * Sends a GET request to initiate the processing of the specified order
 * (implies assigning the "paid" status to the order).
 * @param {any} orderId - The identifier of the order to be processed.
 * @param {any} points_cost - The cost of the order in points.
 * @returns {Promise} - A Promise object resolving with JSON data from the server:
 *                      on successful request - {status: 'success', message: 'Order processed successfully'}
 *                      on unsuccessful request due to insufficient balance - {status: 'fail', message: 'Low balance'}
 *                      Throws an error with an error message in case of any issues with the fetch operation or if the server returns an error.
 * @throws {Error} - In case of issues with the fetch operation or if the server returns an error.
 */


async function sendHandleOrderRequest(orderId: any, points_cost: any) {
  try {
    const response = await fetchWithRefreshAuth(`/api/putOrderToWork?orderId=${orderId}&points_cost=${points_cost}`, {

      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
    throw error;
  }
}

// Exports the function for use in other parts of the code.
export { sendHandleOrderRequest };
