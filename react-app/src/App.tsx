import "./App.scss";
import { createContext, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import UpLoad from "./UpLoad";
import BuyCredits from "./BuyCredits";
import AdminPanel from "./AdminPanel";
import "vite/modulepreload-polyfill";
import About from "./About";
import CalculateCost from "./CalculateCost";
export const SignedInContext = createContext(false);

function App() {
  const [signedIn, onSignIn] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  function handleSignIn() {
    onSignIn(!signedIn);
    setIsOpen(!modalIsOpen);
  }

  return (
    <>
      <SignedInContext.Provider value={signedIn}>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                handleSignIn={handleSignIn}
                modalIsOpen={modalIsOpen}
                setIsOpen={setIsOpen}
              />
            }
          />
          <Route path="About" element={<About />} />
          <Route path="UpLoad" element={<UpLoad />} />
          <Route
            path="CalculateCost"
            element={<CalculateCost handleSignIn={handleSignIn} />}
          />
          <Route path="BuyCredits" element={<BuyCredits />} />
          <Route path="AdminPanel" element={<AdminPanel />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </SignedInContext.Provider>
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
function useReduxState(arg0: string, arg1: string): [any, any] {
  throw new Error("Function not implemented.");
}
