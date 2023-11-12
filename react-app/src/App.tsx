import "./App.scss";
import { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import UpLoad from "./UpLoad";
import Order from "./CalculateCost";
import BuyCredits from "./BuyCredits";
import Dashboard from "./Dashboard";
import "vite/modulepreload-polyfill";
import About from "./About";
import CalculateCost from "./CalculateCost";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="UpLoad" element={<UpLoad />} />
        <Route path="CalculateCost" element={<CalculateCost />} />
        <Route path="BuyCredits" element={<BuyCredits />} />
        <Route path="Dashboard" element={<Dashboard />} />
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
