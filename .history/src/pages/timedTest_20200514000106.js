import React, { Component } from "react";
import { Link } from "react-router-dom";
import data from "../PracticeTest-master/JSON_PT.json";
import Timer from "./timer";

import 

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
        <div>Total Questions: {data.length}</div>
        <Timer/>
        
        <h3>
          {data[this.state.count].q.map((res2) => (
            <React.Fragment>
                {res2}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</React.Fragment>
          ))}
        </h3>
        <form>
          <label htmlFor="username">Your Answer </label>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            type="number"
            name="number"
            //pattern="[0-9]*"
            //defaultValue="0"
            ref={(input) => (this.input = input)}
          /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button onClick={this.handleSubmit}>Submit your answer</button>
        </form>
      </div>
    );
  }
}
