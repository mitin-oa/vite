import React, { useState, useEffect } from "react";
import { Footer } from "./components/footer/footer";

export default function Home() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [serverAnswerMessage, setServerAnswerMessage] = useState("");

  useEffect(() => {}, []);

  const handleResetPassword = () => {
    // Извлекаем параметры из адреса при загрузке компонента
    const urlParams = new URLSearchParams(window.location.search);
    const emailParam = urlParams.get("email");
    const tokenParam = urlParams.get("token");

    // Проверка, что newPassword и confirmPassword совпадают перед отправкой
    if (newPassword !== confirmPassword) {
      setServerAnswerMessage("Пароли не совпадают.");
      return;
    }

    // Kод для отправки нового пароля на сервер
    const data = {
      email: emailParam,
      token: tokenParam,
      newPassword: newPassword,
    };

    // Пример использования fetch для отправки данных на сервер
    fetch("/api/resetPassword", {
      method: "POST",
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
      <div className="app">
        <h1>Форма для сброса пароля</h1>
        <div>
          <input
            type="password"
            placeholder="Новый пароль"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Подтвердите пароль"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div>
          <button onClick={handleResetPassword}>Сбросить пароль</button>
        </div>
        <div>
          <p>{serverAnswerMessage}</p>
        </div>
      </div>
      <Footer kind="full" />
    </>
  );
}
