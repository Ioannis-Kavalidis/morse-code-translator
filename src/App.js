import React, { Component } from "react";
import MorseCode from "./MorseCode";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      output: "",
    };
  }

  convertToMorse(input) {}

  render() {
    return (
      <div className="App">
        <h1>Morse Code Translator</h1>
        <input
          className="form"
          onChange={(e) => this.convertToMorse(e.target.value)}
        />
      </div>
    );
  }
}

export default App;
