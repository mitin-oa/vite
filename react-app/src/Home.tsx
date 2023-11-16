import { Footer } from "./components/footer/footer";
import StartScreen from "./components/startScreen/startScreen";

export default function Home({
  handleSignIn,
  onSignIn,
  modalIsOpen,
  setIsOpen,
}: any) {
  return (
    <div className="app">
      <StartScreen
        handleSignIn={handleSignIn}
        onSignIn={onSignIn}
        modalIsOpen={modalIsOpen}
        setIsOpen={setIsOpen}
      />
      <Footer />
    </div>
  );
}
