async function fetchWithRefreshAuth(url: string, options: RequestInit = {}): Promise<Response> {

  // // Adding a token to the 'Authorization': `Bearer for each request
  // const accessToken = localStorage.getItem('accessToken');
  // if (accessToken) {
  //   options.headers = {
  //     ...options.headers,
  //     'Authorization': `Bearer ${accessToken}`
  //   };
  // }
  // // END

  let response = await fetch(url, options);
  console.log("response", response.status);

  if (response.status == 401) {
    const isRefreshSuccess = await refreshToken();
    console.log("isRetrySuccess", isRefreshSuccess);
    if (isRefreshSuccess) {
      // Repeated request with updated token
      response = await fetch(url, options);
      console.log("response after retry", response.status);
    } else {
      localStorage.removeItem('accessToken');
      alert('Please log in');
      // If token update fails, redirects to the main page
      window.location.href = '/';
    }
  }

  return response;
}

// Function for token update
async function refreshToken(): Promise<boolean> {
  try {

    // // Adding a token to the 'Authorization': `Bearer for each request
    // const accessToken = localStorage.getItem('accessToken');
    // if (accessToken) {
    //   options.headers = {
    //     ...options.headers,
    //     'Authorization': `Bearer ${accessToken}`
    //   };
    // }
    // // END

    const response = await fetch(`/api/refresh`, {
      method: 'GET',
      credentials: 'include', // withCredentials: true Axios
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      const data = await response.json();
      localStorage.setItem('accessToken', "valid"); // Updating the token in the storage
      return true;
    }
    console.log('NOT AUTHORIZED');
    return false;
  } catch (error) {
    console.error('Error during token update', error);
    return false;
  }
}

// Exports the function for use in other parts of the code.
export { fetchWithRefreshAuth, refreshToken };
