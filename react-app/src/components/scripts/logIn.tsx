/* **
 * Sends an authorization request to the server.
 * @param {UserData} userData - An object containing the values of the username
 * and password * fields from the authorization form.
 * @returns {Promise<any>} - An object representing the data received from the
 *  server in response to an authorization request.
 */

interface UserData {
  username: string;
  password: string;
}

export async function sendLogInRequest(userData: UserData): Promise<any> {
  try {
    const response = await fetch("/api/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
    throw error;
  }
}
