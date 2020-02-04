import React from "react";
import "./App.css";
import keyPads from "./paddata.js";

let letters = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];

const DrumPad = props => {
  return (
    <div
      className="drum-pad"
      id={props.keypad.id}
      keypad={props.keypad}
      onClick={props.func}
    >
      {props.keypad.key}
      <audio
        className="clip"
        // ref={(input) => {this.audioRef = input}}
        src={props.keypad.file}
        id={props.keypad.key}
      ></audio>
    </div>
  );
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.soundTitle = this.soundTitle.bind(this);
    //this.handleKeyPress = this.handleKeyPress(this);
  }

  handleClick(event) {
    console.log(event.target.childNodes[1]);
    event.target.childNodes[1].play();
    // let aud = new Audio();
    // aud.src = event.target.childNodes[3].play();
    // document.getElementById("displayelement").textContent = this.soundTitle(
    // event.target
    // );
  }

  soundTitle(pad) {
    let letterIndex = letters.indexOf(pad.innerText);
    return keyPads[letterIndex].title;
  }

  render() {
    return (
      <div id="display">
        <div className="drum-row" id="a">
          <DrumPad keypad={keyPads[0]} func={this.handleClick} />
          <DrumPad keypad={keyPads[1]} func={this.handleClick} />
          <DrumPad keypad={keyPads[2]} func={this.handleClick} />
        </div>
        <div className="drum-row" id="b">
          <DrumPad keypad={keyPads[3]} func={this.handleClick} />
          <DrumPad keypad={keyPads[4]} func={this.handleClick} />
          <DrumPad keypad={keyPads[5]} func={this.handleClick} />
        </div>
        <div className="drum-row" id="c">
          <DrumPad keypad={keyPads[6]} func={this.handleClick} />
          <DrumPad keypad={keyPads[7]} func={this.handleClick} />
          <DrumPad keypad={keyPads[8]} func={this.handleClick} />
        </div>
        <div id="displayelement">Click a pad or press its key</div>
      </div>
    );
  }
}

function handleKeyPress(event) {
  let key = event.key.toUpperCase();
  let letterIndex = letters.indexOf(key);
  let name = "";
  try {
    name = keyPads[letterIndex].id;
    let el = document.getElementById(name);
    console.log(el);
    el.childNodes[3].play();
    // document.getElementById("displayelement").textContent =
    // keyPads[letterIndex].title;
  } catch (error) {
    //do nothing
  }
}

document.addEventListener("keydown", handleKeyPress);

export default App;
