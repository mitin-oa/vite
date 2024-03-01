/**
 * Sends an authorization request to the server.
 * @param {UserData} userData - An object containing the values of the username
 * and password fields from the authorization form.
 * @returns {Promise<any>} - An object representing the data received from the
 *  server in response to an authorization request.
 */

interface UserData {
  username: string;
  password: string;
}

function sendLogInRequest(userData: UserData) {

  return new Promise((resolve, reject) => {
    fetch('/api/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
      .then(response => response.json())
      .then(data => {
        resolve(data);
      })
      .catch(error => {
        console.error('Error sending data:', error);
        reject(error);
      });
  });
}

function sendLogOutRequest() {

  return new Promise((resolve, reject) => {
    fetch('/api/signout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(response => response.json())
      .then(data => {
        resolve(data);
      })
      .catch(error => {
        console.error('Error sending data:', error);
        reject(error);
      });
  });
}

function createTempUser(userData: string[]) {

  const userDataObject = {
    userName: userData[0],
    userEmail: userData[1],
    userPhone: userData[2]
  };

  return new Promise((resolve, reject) => {
    fetch('/api/createTempUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userDataObject)
    })
      .then(response => response.json())
      .then(data => {
        resolve(data);
      })
      .catch(error => {
        console.error('Error sending data:', error);
        reject(error);
      });
  });
}

export { sendLogInRequest, sendLogOutRequest, createTempUser };