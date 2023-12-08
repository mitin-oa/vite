import { useState } from "react";
import Button from "../Button";

const ResetPassForm = ({ setIsOpen, resetPass, setResetPass }: any) => {
  const [inputEmail, setInputEmail] = useState("email");
  function closeModal() {
    setIsOpen(false);
    console.log(resetPass);
    setResetPass(!resetPass);
  }
  const handleClick = async () => {
    closeModal();
    //setResetPass(!resetPass);

    /*  try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      console.log("-------", response);
      if (response.status === 200) alert("Successfully registered!");
      else if (response.status === 400) alert("User Already Exist");
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      alert("Error Occured");
      throw error;
    } */
  };

  return (
    <>
      <form className="form " action="/api/signup" method="post" id="reg-form">
        <div className="col-xs-12">
          <div className="form-group">
            <label htmlFor="email">Email adress:</label>
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
