import react from "react";
import SudokuApp from "./components/SudokuApp";
import axios from "axios";
class App extends react.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <>
        <SudokuApp />
      </>
    );
  }
}

export default App;
