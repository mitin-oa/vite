import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter } from "react-router-dom";
import { Widget, addResponseMessage } from "react-chat-widget";
import logo from "../public/ChronoLegal_icon.png";

const handleNewUserMessage = (newMessage: any) => {
  console.log(`New message incoming! ${newMessage}`);
  // Now send the message throught the backend API
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  // </React.StrictMode>
);
