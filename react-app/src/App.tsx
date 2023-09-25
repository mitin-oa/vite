/* import "./App.css"; */
import { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import UpLoad from "./UpLoad";
import Order from "./Order";
import BuyCredits from "./BuyCredits";

function App() {
  let items = ["New York", "San Francisco", "Tokio", "London", "Paris"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="UpLoad" element={<UpLoad />} />
        <Route path="Order" element={<Order />} />
        <Route path="BuyCredits" element={<BuyCredits />} />
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

{
  /* <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
      )}
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      <StartScreen />
      <Button color="primary" onClick={() => setAlertVisibility(true)}>
        My Button
      </Button>
    </div> */
}
