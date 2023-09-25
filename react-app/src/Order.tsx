import { useMediaQuery } from "react-responsive";

export default function Order() {
  const isMobileScreen = useMediaQuery({ query: "(max-width: 1160px" });
  const isPhoneScreen = useMediaQuery({ query: "(max-width: 760px" });
  return (
    <div className="app">
      To order, select the length of your Document, upload it & checkout
    </div>
  );
}
