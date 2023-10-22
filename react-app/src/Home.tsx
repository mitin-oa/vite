import { Footer } from "./components/footer/footer";
import StartScreen from "./components/startScreen/startScreen";
import { Component } from "react";
export default class Home extends Component {
  render() {
    return (
      <div className="app">
        <StartScreen />
        <Footer />
      </div>
    );
  }
}
