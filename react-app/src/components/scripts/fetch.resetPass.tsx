async function sendResetPassRequest(inputEmail: any) {
  const data = {
    emailToResetPass: inputEmail,
  };

  return new Promise((resolve, reject) => {
    fetch('/api/forgotPassword', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => {
        resolve(data);
      })
      .catch(error => {
        console.error('Error sending payment data:', error);
        reject(error);
      });
  });
}

export { sendResetPassRequest };
