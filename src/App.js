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

  translateToMorse(input) {
    let output = "";
    let morseArray = input.split("");
    for (let i = 0; i < morseArray.length; i++) {
      if (morseArray[i].toUpperCase() === " ") {
        output += "\xa0\xa0";
      } else {
        output += morseCode[morseArray[i].toUpperCase()];
      }
    }
    this.setState({ output });
  }

  render() {
    return (
      <div className="App">
        <h1>Morse Code Translator</h1>
        <br />
        <span>Original Text:</span>
        <textarea
          className="form"
          size="40"
          onChange={(e) => this.translateToMorse(e.target.value)}
          placeholder="type here"
        />
        <br />
        <span>Morse Code:</span>
        <textarea
          className="form2"
          rows="5"
          cols="40"
          value={this.state.output}
        />
      </div>
    );
  }
}

export default App;
