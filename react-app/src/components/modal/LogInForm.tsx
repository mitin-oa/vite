import Button from "../Button";

const LogInForm = ({ onSignIn }: any) => {
  return (
    <>
      <form
        className="form mx-4 mb-4"
        action="/signin"
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
          <input type="submit" className="btn btn-default" value="Submit" />
        </div>
        <p>Not registred? Push Sign In.</p>
        <div className="text-left col-xs-12">
          <Button children="Sign In" color="orange" onClick={onSignIn} />
        </div>
      </form>
    </>
  );
};

export default LogInForm;
