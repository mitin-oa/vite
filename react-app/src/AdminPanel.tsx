import { useMediaQuery } from "react-responsive";
import ShortHeader from "./components/shortHeader/shortHeader";

export default function AdminPanel() {
  const isMobileScreen = useMediaQuery({ query: "(max-width: 1160px" });
  const isPhoneScreen = useMediaQuery({ query: "(max-width: 760px" });
  return (
    <div className="app">
      <ShortHeader kind="short" />
      <p>Admin Panel</p>
    </div>
  );
}
