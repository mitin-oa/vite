import { useState } from "react";
import Button from "../Button";
import Swal from "sweetalert2";

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
      Swal.fire({
        title: "Good job!",
        text:
          "If you have an account on our system with the specified username, " +
          "you will receive an email with a link to reset your password. " +
          "The link will be valid for 15 minutes.",
        icon: "success",
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `There was an error handling the password reset request: ${error}`,
      });
    }
    closeModal();
  };

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
          console.error('Error sending data:', error);
          reject(error);
        });
    });
  }

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
