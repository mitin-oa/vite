import { useMediaQuery } from "react-responsive";

export default function BuyCredits() {
  const isMobileScreen = useMediaQuery({ query: "(max-width: 1160px" });
  const isPhoneScreen = useMediaQuery({ query: "(max-width: 760px" });
  return (
    <div className="app">Select the number of credits you want to purchase</div>
  );
}
