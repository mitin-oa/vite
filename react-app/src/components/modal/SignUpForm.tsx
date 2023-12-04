import { useState } from "react";
import Button from "../Button";

const SignUpForm = ({
  handleSignUp,
  onCloseModal,
  setUserProfileData,
}: any) => {
  const [inputName, setInputName] = useState("username");
  const [inputEmail, setInputEmail] = useState("email");
  const [inputPhone, setInputPhone] = useState("+3530000000");
  const [inputPassword, setInputPassword] = useState("pass");

  const handleClick = () => {
    handleSignUp();
    onCloseModal();
    setUserProfileData({
      userName: inputName,
      userEmail: inputEmail,
      userPhone: inputPhone,
      userPassword: inputPassword,
    });
  };

  return (
    <>
      <form
        className="form mx-4 mb-4"
        action="/api/signup"
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
              defaultValue="user1"
              required
              onChange={(event) => setInputName(event.target.value)}
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
              defaultValue="user1@example.com"
              required
              onChange={(event) => setInputEmail(event.target.value)}
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
              defaultValue="+3530000000"
              required
              onChange={(event) => setInputPhone(event.target.value)}
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
              onChange={(event) => setInputPassword(event.target.value)}
            />
          </div>
        </div>
        <div className="text-left col-xs-12">
          {/* <input type="submit" className="btn btn-default" value="Submit" /> */}
          <Button children="Submit" color="orange" onClick={handleClick} />
        </div>
      </form>
    </>
  );
};

export default SignUpForm;
