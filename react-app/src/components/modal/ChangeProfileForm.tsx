import { useContext, useEffect, useState } from "react";
import Button from "../Button";
import Swal from "sweetalert2";
import { SignedUpContext } from "../../App";

const ChangeProfileForm = ({ onCloseModal }: any) => {
  const [inputName, setInputName] = useState("username");
  const [inputEmail, setInputEmail] = useState("email");
  const [inputPhone, setInputPhone] = useState("+3530000000");
  const [newPassword, setNewPassword] = useState("pass");
  const [confirmNewPassword, setConfirmPassword] = useState("pass");
  const [serverAnswerMessage, setServerAnswerMessage] = useState("");
  const signedUp = useContext(SignedUpContext);

  const handleChangeProfile = () => {
    // Проверка, что newPassword и confirmPassword совпадают перед отправкой
    if (newPassword !== confirmNewPassword) {
      setServerAnswerMessage("Пароли не совпадают.");
      return;
    }

    // Kод для отправки нового пароля на сервер

    const data = {
      username: inputName,
      email: inputEmail,
      phone: inputPhone,
      newPassword: newPassword,
    };
    // Пример использования fetch для отправки данных на сервер
    fetch("/api/resetPassword", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        // Обработка ответа от сервера
        if (result.HTTP_status) {
          setServerAnswerMessage("Пароль успешно сброшен.");
        } else {
          setServerAnswerMessage("Произошла ошибка при сбросе пароля.");
        }
      })
      .catch((error) => {
        console.error("Ошибка при отправке запроса:", error);
        setServerAnswerMessage("Произошла ошибка при сбросе пароля.");
      });
  };

  return (
    <>
      <form className="form">
        <div className="col-xs-12">
          <div className="form-group ">
            <label htmlFor="username">User name:</label>
            <input
              type="text"
              className="input-field"
              id="username"
              name="username"
              placeholder="Enter user name"
              value={inputName}
              required
              onChange={(event) => setInputName(event.target.value)}
            />
            <br />
          </div>
        </div>
        <div className="col-xs-12">
          <div className="form-group">
            <label htmlFor="email">Email address:</label>
            <input
              type="email"
              className="input-field"
              id="email"
              name="email"
              placeholder="Enter email"
              value={inputEmail}
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
              value={inputPhone}
              required
              onChange={(event) => setInputPhone(event.target.value)}
            />
            <br />
          </div>
        </div>
        <div className="col-xs-12">
          <label>Choose new password:</label>
          <div>
            <input
              type="password"
              placeholder="Новый пароль"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <a style={{ fontSize: "14px" }}>
            At least 16 characters OR at least 8 characters including a number
            and a letter.
          </a>
          <div>
            <label>Confirm new password:</label>
            <input
              type="password"
              placeholder="Подтвердите пароль"
              value={confirmNewPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <div>
            <p>{serverAnswerMessage}</p>
          </div>
        </div>
        <div className="text-left col-xs-12">
          <Button
            children="Submit"
            color="orange"
            onClick={() => {
              handleChangeProfile(), onCloseModal();
            }}
            style="modal-btn"
          />
        </div>
      </form>
    </>
  );
};

export default ChangeProfileForm;
