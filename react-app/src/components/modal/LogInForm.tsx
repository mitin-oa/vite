import Button from "../Button";

const LogInForm = ({ onSignIn, onSignUp }: any) => {
  // * ↓ VK: Significant for the backend area. Please exercise caution when making alterations
  const handleLogInSubmit = () => {
    // * VK: Form fields data entered by the user
    const formData = new FormData(document.getElementById("login-form") as HTMLFormElement);
    const login = formData.get("login") as string;
    const password = formData.get("password") as string;

    // * VK: Pass the data to the onSignIn function
    onSignIn({
      login,
      password,
    });
  };
  // * ↑ VK: Significant for the backend area. Please exercise caution when making alterations
  
  return (
    <>
      <form
        className="form mx-4 mb-4"
        action="/api/signin"
        method="post"
        id="login-form"
      >
        <div className="col-xs-12">
          <div className="form-group">
            <label htmlFor="login">User name or email:</label>
            <input
              type="text"
              className="input-field"
              id="login"
              name="login"
              placeholder="Enter user name"
              defaultValue="client"
              required
            />
            <br />
          </div>
        </div>
        <div className="col-xs-12">
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              className="input-field"
              id="password"
              name="password"
              placeholder="Enter password"
              defaultValue="pass"
              required
            />
          </div>
        </div>
        <div className="text-left col-xs-12">
          {/* <input type="submit" className="btn btn-default" value="Submit" /> */}
          {/* <Button children="Submit" color="orange" onClick={onSignIn} /> */}
          {/* // * VK: Significant for the backend area. Please exercise caution when making alterations */}
          <Button children="Submit" color="orange" onClick={handleLogInSubmit} />
        </div>
        <p>Not registred? Push Sign Up.</p>
        <div className="text-left col-xs-12">
          <Button children="Sign Up" color="orange" onClick={onSignUp} />
        </div>
      </form>
    </>
  );
};

export default LogInForm;
