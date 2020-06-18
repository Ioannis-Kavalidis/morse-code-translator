import React, { Component } from "react";
import morseCode from "./MorseCode";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      output: "",
    };
  }

  translateToMorse(input) {}

  render() {
    return (
      <div className="App">
        <h1>Morse Code Translator</h1>
        <input
          className="form"
          onChange={(e) => this.translateToMorse(e.target.value)}
          placeholder="type here"
        />
      </div>
    );
  }
}

export default App;
