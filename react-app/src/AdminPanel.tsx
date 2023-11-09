import { useMediaQuery } from "react-responsive";
import ShortHeader from "./components/shortHeader/shortHeader";
import { Footer } from "./components/footer/footer";

export default function AdminPanel() {
  const isMobileScreen = useMediaQuery({ query: "(max-width: 1160px" });
  const isPhoneScreen = useMediaQuery({ query: "(max-width: 760px" });
  return (
    <div className="app">
      <ShortHeader kind="short" />
      <section className="main-content">
        <div className="row">
          <p>Admin Panel</p>
          <p>Profile info</p>
          <p>Credit points</p>
          <p>Recent transactions (eg. 5 last transactions)</p>
          <p>Recent files (eg. 10 last files) with all the info of each</p>
          <p>Editor notes (recent/all editor notes)</p>
        </div>
      </section>
      <Footer kind="short" />
    </div>
  );
}
