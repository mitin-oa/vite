import "../homePage/startScreen.scss";
import "../../App.scss";
import { useMediaQuery } from "react-responsive";
import { useContext, useEffect, useRef, useState } from "react";
import { SignedInContext } from "../../App";
import "react-phone-input-2/lib/bootstrap.css";
import { Link } from "react-router-dom";
import Button from "../Button";
import CollapseButton from "../CollapseButton";
// * VK: Significant for the backend area. Please exercise caution when making alterations
import { createTempUser } from "../../fetchScripts/authRequests";
import Underline from "../Underline";
import { useForm, Controller } from "react-hook-form";

export default function ReadyToGet(this: any) {
  const isMobileScreen = useMediaQuery({ query: "(max-width: 1160px" });
  const isPhoneScreen = useMediaQuery({ query: "(max-width: 760px" });
  const signedIn = useContext(SignedInContext);
  const [inputName, setInputName] = useState("John Boil");
  const [inputCompanyName, setInputCompanyName] = useState("Microsoft");
  const [inputEmail, setInputEmail] = useState(
    "sb-yhbsi27086563@personal.example.com"
  );
  const [checkedEmail, setCheckedEmail] = useState(false); // Используется для отображения остальных полей после подтверждения имейла
  const [inputPhone, setInputPhone] = useState("+34312345678");
  const [inputCountry, setInputCountry] = useState("US");
  const [userId, setUserId] = useState(undefined);
  const [addInformation, setAddInformation] = useState("Add information");

  const offises = [
    {
      city: "Atlanta-USA",
      adress: {
        line1: "11720 Amberpark Dr,",
        line2: "Alpharetta, GA 30009, USA",
        line3: "Email: americas@chronolegal.com",
      },
    },
    {
      city: "Limassol-Cyprus",
      adress: {
        line1: "Vasileos Konstantinou",
        line2: "Limassol Cyprus",
        line3: "Email: europe@chronolegal.com",
      },
    },
    {
      city: "London-UK",
      adress: {
        line1: "1st floor, 415 High Street Stratford,",
        line2: "London E15 4QZ United Kingdom",
        line3: "Email: europe@chronolegal.com",
      },
    },
    {
      city: "New York-USA",
      adress: {
        line1: "980 6th Avenue,",
        line2: "New York NY 10018",
        line3: "Email: americas@chronolegal.com",
      },
    },
    {
      city: "Oakville (ON)-Canada",
      adress: {
        line1: "1075 North Service Road West Unit 100 ",
        line2: "Oakville, ON L6M 2G2 Canada",
        line3: "Email: americas@chronolegal.com",
      },
    },
    {
      city: "Paris, France",
      adress: {
        line1: "33 Rue La Fayette",
        line2: "Paris, le-de-France 75009, France",
        line3: "Email: europe@chronolegal.com",
      },
    },
  ];

  async function checkEmail() {
    const addedUser: any = await createTempUser([
      inputName,
      inputEmail,
      inputPhone,
    ]);
    if (
      addedUser.message == "User with the same name or email already exists"
    ) {
      alert(
        "User with the same email already exists. Please log in or choose a different e-mail address."
      );
      return;
    }

    setCheckedEmail(true); // * VK: Used to display the rest of the fields after the email has been confirmed
    setUserId(addedUser.userId);
    console.log(inputPhone);
  }
  interface IFormInputs {
    TextField: string;
    MyCheckbox: boolean;
  }
  const { handleSubmit, control, reset } = useForm<IFormInputs>({
    defaultValues: {
      MyCheckbox: false,
    },
  });

  return (
    <>
      <div className="title-container">
        <div className="home_title" style={{ letterSpacing: "1px" }}>
          READY TO GET YOUR CONTRACTS REVIEWED?
        </div>
        <Underline />
      </div>
      <div className="ready-to-get">
        <div className="wrapper ready-to-get__text">
          <span>
            <Link
              className="only__text"
              style={{
                color: "#ec720b",
                fontWeight: "bold",
                margin: "0 auto",
                textDecoration: "none",
              }}
              to="/OrderRewiew"
            >
              Order a Review
            </Link>{" "}
            or reach out to have your questions answered. We would be pleased to
            talk further and will contact you as soon as possible if you fill
            the form below or send an email to info@chronolegal.com.
          </span>
        </div>
        <div className="wrapper d-flex flex-lm-row flex-md-block">
          <div className="container form-container">
            <div className="col-md-12" id="fullWidthColumn">
              <form id="orderForm">
                <div
                  className="frame-container"
                  style={{
                    border: "none",
                  }}
                >
                  <h2 className="section-subtitle" style={{ marginLeft: "0" }}>
                    Contact us by filling out the form below:
                  </h2>
                  <div className="row">
                    <div className="form-group mb-3" style={{ width: "50%" }}>
                      <label htmlFor="contactPersonName">Your Name*</label>
                      <input
                        type="text"
                        className="form-control"
                        name="contactPersonName"
                        id="contactPersonName"
                        value={inputName}
                        required={true}
                        onChange={(e) => setInputName(e.target.value)}
                      />
                    </div>
                    <div className="form-group mb-3" style={{ width: "50%" }}>
                      <label htmlFor="contactCompanyName">
                        Your Company Name*
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="contactCompanyName"
                        id="contactCompanyName"
                        value={inputCompanyName}
                        required={true}
                        onChange={(e) => setInputCompanyName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group mb-3" style={{ width: "50%" }}>
                      <label htmlFor="email">Email*</label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        value={inputEmail}
                        required={true}
                        onChange={(e) => setInputEmail(e.target.value)}
                        disabled={checkedEmail}
                      />
                    </div>
                    <div
                      className="form-group mb-3"
                      style={{ width: "50%", borderWidth: "2px" }}
                    >
                      <label htmlFor="phoneNumber">Phone*</label>
                      <input
                        type="tel"
                        className="form-control"
                        name="phone"
                        id="phone"
                        value={inputPhone}
                        required={true}
                        onChange={(e) => setInputPhone(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="form-group mb-3">
                    <label htmlFor="Country">Country*</label>
                    <input
                      type="text"
                      className="form-control"
                      name="Country"
                      id="Country"
                      value={inputCountry}
                      required={true}
                      onChange={(e) => setInputCountry(e.target.value)}
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="addInformation">Message*</label>
                    <textarea
                      className="form-control"
                      name="addInformation"
                      id="addInformation"
                      rows={4}
                      placeholder="Enter text"
                      value={addInformation}
                      onChange={(e) => setAddInformation(e.target.value)}
                    ></textarea>
                  </div>
                  <div className="form-group mb-3">
                    {!checkedEmail && (
                      <Button
                        children="SEND"
                        color="orange"
                        onClick={checkEmail}
                        style="ready-to-get-btn"
                      />
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="container form-container">
            <div className="col-md-12" id="fullWidthColumn">
              <div className="frame-container">
                <h2 className="section-subtitle">OFFICES</h2>
                {offises.map((item: any) => {
                  return (
                    <CollapseButton value={item.city} label={item.adress} />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
