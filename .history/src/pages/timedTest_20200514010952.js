import React, { Component } from "react";
import { Link } from "react-router-dom";
import data from "../PracticeTest-master/JSON_PT.json";
import Timer from "./timer";

import "../styleSheets/main.scss";

export default class timedTest extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      answers: [],
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({
      answers: [...this.state.answers, this.input.value],
      count: this.state.count + 1,
    });

    this.input = 
    //this.input.reset();

    console.log(this.state.answers);
  };

  render() {
    console.log(data);
    //onSubmit={this.handleSubmit}
    return (
      <div className="center">
        <Link to="/testpage">back</Link>
        <div>Total Questions: {data.length}</div>
        <Timer />

        <h3 className="center">
          {data[this.state.count].q.map((res2) => (
            <React.Fragment>
              {res2}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </React.Fragment>
          ))}
        </h3>
        <br />
        <br />
        <form>
          <label htmlFor="username">Your Answer </label>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            type="number"
            name="number"
            ref={(input) => (this.input = input)}
          />{" "}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button onClick={this.handleSubmit}>
            Submit your answer
          </button>
        </form>
      </div>
    );
  }
}
