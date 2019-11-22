import React from "react";
import "./App.css";

let letters = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];
let keyPads = [
  {
    id: "oneUp",
    title: "one up",
    key: "Q",
    file: "./sounds/one_up.wav"
  },
  {
    id: "coin",
    title: "coin",
    key: "W",
    file: "./sounds/coin.wav"
  },
  {
    id: "dragonCoin",
    title: "dragon coin",
    key: "E",
    file: "./sounds/dragon_coin.wav"
  },
  {
    id: "jump",
    title: "jump",
    key: "A",
    file: "./sounds/jump.wav"
  },
  {
    id: "midwayGate",
    title: "midway gate",
    key: "S",
    file: "./sounds/midway_gate.wav"
  },
  {
    id: "ridingYoshi",
    title: "riding yoshi",
    key: "D",
    file: "./sounds/riding_yoshi.wav"
  },
  {
    id: "stompBounce",
    title: "stomp bounce",
    key: "Z",
    file: "./sounds/stomp_bounce.wav"
  },
  {
    id: "thwomp",
    title: "thwomp",
    key: "X",
    file: "./sounds/thwomp.wav"
  },
  {
    id: "tongueAttack",
    title: "tongue attack",
    key: "C",
    file: "./sounds/yoshi_tongue_attack.wav"
  }
];

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
    let aud = new Audio();
    aud.src = event.target.childNodes[3].play();
    document.getElementById("displayelement").textContent = this.soundTitle(
      event.target
    );
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
  let name = keyPads[letterIndex].id;
  let el = document.getElementById(name);
  el.childNodes[3].play();
  document.getElementById("displayelement").textContent =
    keyPads[letterIndex].title;
}

document.addEventListener("keydown", handleKeyPress);

export default App;
