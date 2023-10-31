const SignInForm: React.FC = () => {
  return (
    <>
      <form
        className="form mx-4 mb-4"
        action="/signup"
        method="post"
        id="reg-form"
      >
        <div className="col-xs-12">
          <div className="form-group ">
            <label htmlFor="username">User name:</label>
            <input
              type="text"
              className="input-field"
              id="username"
              name="username"
              placeholder="Enter user name"
              value="user1"
              required
            />
            <br />
          </div>
        </div>
        <div className="col-xs-12">
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              className="input-field"
              id="email"
              name="email"
              placeholder="Enter email"
              value="user1@example.com"
              required
            />
            <br />
          </div>
        </div>
        <div className="col-xs-12">
          <div className="form-group">
            <label htmlFor="phone">Phone number:</label>
            <input
              type="text"
              className="input-field"
              id="phone"
              name="phone"
              placeholder="Enter phone"
              value="+3530000000"
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
              value="pass"
              required
            />
          </div>
        </div>
        <div className="text-left col-xs-12">
          <input type="submit" className="btn btn-default" value="Submit" />
        </div>
      </form>
    </>
  );
};

export default SignInForm;
