import "./App.scss";
import { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import UpLoad from "./UpLoad";
import Order from "./Order";
import BuyCredits from "./BuyCredits";
import AdminPanel from "./AdminPanel";
import "vite/modulepreload-polyfill";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="UpLoad" element={<UpLoad />} />
        <Route path="Order" element={<Order />} />
        <Route path="BuyCredits" element={<BuyCredits />} />
        <Route path="AdminPanel" element={<AdminPanel />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

function NotFound() {
  return (
    <>
      <h2>Not found page!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </>
  );
}
