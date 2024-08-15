import React, { Component } from "react";

export default class BoxClass extends Component {
  render() {
    const result =
      this.props.title === "Computer" &&
      this.props.result !== "tie" &&
      this.props.result
        ? this.props.result === "win"
          ? "lose"
          : "win"
        : this.props.result;

    return (
      <div className={`box ${result}`}>
        <h1>{this.props.title}</h1>
        <img
          className="item-img"
          src={this.props.item && this.props.item.img}
          alt={this.props.item && this.props.item.name}
        />
        <h2 className={"a"}>{result}</h2>
      </div>
    );
  }
}
