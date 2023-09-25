import { useMediaQuery } from "react-responsive";

export default function UpLoad() {
  const isMobileScreen = useMediaQuery({ query: "(max-width: 1160px" });
  const isPhoneScreen = useMediaQuery({ query: "(max-width: 760px" });
  return <div className="app">File upload</div>;
}
