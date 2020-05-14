import React, { Component } from "react";
import { Link } from "react-router-dom";
import data from "../PracticeTest-master/JSON_PT.json";
import Timer from "./timer";

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
    //alert('Your username is: ' + this.input.value);
    this.setState({
      answers: [...this.state.answers, this.input.value],
      count: this.state.count + 1,
    });

    console.log(this.state.answers);
  };

  render() {
    console.log(data);
    //onSubmit={this.handleSubmit}
    return (
      <div>
        <Link to="/testpage">back</Link>
        <Timer
        <div>Total Questions: {data.length}</div>
        <div>
          {data[this.state.count].q.map((res2) => (
            <li>{res2}</li>
          ))}
        </div>
        <form>
          <label htmlFor="username">Your Answer </label>
          <input
            type="number"
            name="number"
            //pattern="[0-9]*"
            //defaultValue="0"
            ref={(input) => (this.input = input)}
          />
          <button onClick={this.handleSubmit}>Submit your answer</button>
        </form>
      </div>
    );
  }
}
