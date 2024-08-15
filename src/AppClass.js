import React, { Component } from "react";
import "./App.css";
import BoxClass from "./component/BoxClass";

const choice = {
  rock: {
    name: "Rock",
    img: "https://nationaltoday.com/wp-content/uploads/2021/08/National-Pet-Rock-Day-1200x834.jpg",
  },
  scissors: {
    name: "Scissors",
    img: "https://media.officedepot.com/images/f_auto,q_auto,e_sharpen,h_450/products/6822487/6822487_o02_081820/6822487",
  },
  paper: {
    name: "Paper",
    img: "https://www.collinsdictionary.com/images/full/paper_111691001.jpg",
  },
};

export default class AppClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userSelect: null,
      computerSelect: null,
      result: "",
    };
  }

  play = (userChoice) => {
    const userSelection = choice[userChoice];
    const computerSelection = this.randomChoice();
    this.setState({
      userSelect: userSelection,
      computerSelect: computerSelection,
      result: this.judgement(userSelection, computerSelection),
    });
  };

  randomChoice = () => {
    const itemArray = Object.keys(choice);
    const randomItem = Math.floor(Math.random() * itemArray.length);
    const final = itemArray[randomItem];
    return choice[final];
  };

  judgement = (user, computer) => {
    if (user.name === computer.name) {
      return "tie";
    } else if (user.name === "Rock")
      return computer.name === "Scissors" ? "win" : "lose";
    else if (user.name === "Scissors")
      return computer.name === "Paper" ? "win" : "lose";
    else if (user.name === "Paper")
      return computer.name === "Rock" ? "win" : "lose";
  };

  render() {
    return (
      <div>
        <div className="main">
          <BoxClass title="You" item={this.state.userSelect} result={this.state.result} />
          <BoxClass title="Computer" item={this.state.computerSelect} result={this.state.result} />
        </div>
        <div className="main">
          <button onClick={() => this.play("scissors")} className="img-button">
            <img
              src={"https://media.officedepot.com/images/f_auto,q_auto,e_sharpen,h_450/products/6822487/6822487_o02_081820/6822487"}
              className="button-img"
              alt="Scissors"
            />
          </button>
          <button onClick={() => this.play("rock")} className="img-button">
            <img
              src={"https://nationaltoday.com/wp-content/uploads/2021/08/National-Pet-Rock-Day-1200x834.jpg"}
              className="button-img"
              alt="Rock"
            />
          </button>
          <button onClick={() => this.play("paper")} className="img-button">
            <img
              src={"https://www.collinsdictionary.com/images/full/paper_111691001.jpg"}
              className="button-img"
              alt="Paper"
            />
          </button>
        </div>
      </div>
    );
  }
}
