import { useMediaQuery } from "react-responsive";
import { HashLink as Link } from "react-router-hash-link";

export default function UpLoad() {
  const isMobileScreen = useMediaQuery({ query: "(max-width: 1160px" });
  const isPhoneScreen = useMediaQuery({ query: "(max-width: 760px" });
  return (
    <div className="app">
      <Link to="/">
        <img className="Home-pic" alt="Home" />
      </Link>
      File upload
    </div>
  );
}
