import { Footer } from "./components/footer/footer";
import StartScreen from "./components/startScreen/startScreen";

export default function Home({ handleSignIn, modalIsOpen, setIsOpen }: any) {
  return (
    <div className="app">
      <StartScreen
        handleSignIn={handleSignIn}
        modalIsOpen={modalIsOpen}
        setIsOpen={setIsOpen}
      />
      <Footer />
    </div>
  );
}
