import { useState } from "react";
import Button from "../Button";

import { sendResetPassRequest } from "../scripts/fetch.resetPass"; // * VK Backend: Connecting an external script

const ResetPassForm = ({ setIsOpen, resetPass, setResetPass }: any) => {
  const [inputEmail, setInputEmail] = useState("");
  function closeModal() {
    setIsOpen(false);
    console.log(resetPass);
    setResetPass(!resetPass);
  }
  const handleClick = async () => {
    try {
      const serverAnswer: any = await sendResetPassRequest(inputEmail);
      alert(
        "If you have an account on our system with the specified username or password, " +
        "you will receive an email with a link to reset your password. " +
        "The link will be valid for 15 minutes."
      );
    } catch (error) {
      console.error("There was an error handling the password reset request:", error);
    }
    closeModal();
  };
  return (
    <>
      <form className="form">
        <div className="col-xs-12">
          <div className="form-group">
            <label htmlFor="email">Email address:</label>
            <input
              type="email"
              className="input-field"
              id="email"
              name="email"
              placeholder="Enter email"
              required
              onChange={(event) => setInputEmail(event.target.value)}
            />
            <br />
          </div>
        </div>

        <div className="col-xs-12">
          <p style={{ fontSize: "14px" }}>
            Please, enter you email to send new password.
          </p>
        </div>
        <div className="text-left col-xs-12">
          {/* <input type="submit" className="btn btn-default" value="Submit" /> */}
          <Button
            children="Submit"
            color="orange"
            onClick={handleClick}
            style="modal-btn"
          />
        </div>
      </form>
    </>
  );
};

export default ResetPassForm;
