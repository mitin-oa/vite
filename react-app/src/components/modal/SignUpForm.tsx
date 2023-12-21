import { useState } from "react";
import Button from "../Button";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import { stripVTControlCharacters } from "util";

const SignUpForm = ({
  handleSignUp,
  onCloseModal,
  setUserProfileData,
}: any) => {
  const [inputName, setInputName] = useState("username");
  const [inputEmail, setInputEmail] = useState("email");
  const [inputPhone, setInputPhone] = useState("+3530000000");
  const [inputPassword, setInputPassword] = useState("pass");

  const handleClick = async () => {
    () => handleSignUp();
    onCloseModal();
    const data = {
      userName: inputName,
      userEmail: inputEmail,
      userPhone: inputPhone,
      userPassword: inputPassword,
    };
    setUserProfileData(data);

    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      console.log("-------", response);
      if (response.status === 200) {
        //alert("Successfully registered!");
        Swal.fire({
          title: "Good job!",
          text: "Successfully registered!",
          icon: "success",
        });
      } else if (response.status === 400) {
        //alert("User Already Exist");
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "User Already Exist!",
        });
      }
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      alert("Error Occured");
      throw error;
    }
  };

  return (
    <>
      <form className="form " action="/api/signup" method="post" id="reg-form">
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
            <label htmlFor="password">Choose a password:</label>
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
          <a style={{ fontSize: "14px" }}>
            At least 16 characters OR at least 8 characters including a number
            and a letter.
          </a>
        </div>
        <div className="text-left col-xs-12">
          {/* <input type="submit" className="btn btn-default" value="Submit" /> */}
          <Button
            children="Submit"
            color="orange"
            onClick={() => {
              handleClick();
            }}
            style="modal-btn"
          />
        </div>
      </form>
    </>
  );
};

export default SignUpForm;
