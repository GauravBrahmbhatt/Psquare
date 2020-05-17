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
      result: false,
      score: 0,
      loadTimer: false,
    };

    //this.Timer = React.createRef();
  }

  /*onClick = () => {
      this.Timer.current.startCountDown();
  }*/
  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.count + 1 !== data.length) {
      this.setState({
        answers: [...this.state.answers, this.input.value],
        count: this.state.count + 1,
      });
      //  this.input.
    } else {
      this.setState({
        answers: [...this.state.answers, this.input.value],
        count: this.state.count + 1,
        result: true,
      });
    }

    // this.input.;

    console.log(this.state.answers);
  };

  render() {
    console.log(data);
    const { score } = this.state;
    //onSubmit={this.handleSubmit}
    //<button onClick={this.onClick()}>Start</button>
    //<Timer ref={this.Timer}/>
    return !this.state.result ? (
      <div className="center">
        {this.state.loadTimer ? (
          <React.Fragment>
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
              <button onClick={this.handleSubmit}>Submit your answer</button>
            </form>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Link to="/testpage">back</Link>
            <div className="center">
              <h1>
                <strong>Total Questions: {data.length}</strong>
              </h1>
              <button onClick={() => this.setState({ loadTimer: true })}>
                Start
              </button>
            </div>
          </React.Fragment>
        )}
      </div>
    ) : (
      <div className="center">
        Results:
        <div>
          Correct Answer:
          <div>
            {data.map((res) => (
              <React.Fragment>
                {res.a}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </React.Fragment>
            ))}
          </div>
        </div>
        <div>
          <h2>Your Answer:</h2>
          <div>
            {this.state.answers.map((res) => (
              <React.Fragment>
                {res}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </React.Fragment>
            ))}
          </div>
        </div>
        <div>
          {data.map((res, index) => (
            <React.Fragment>
              {Number(this.state.answers[index]) === Number(res.a) ? (
                <React.Fragment >
                <i class="fa fa-check fa-3" aria-hidden="true" onChange={(e)=> {this.setState({ score: this.state.score + 1 })
                  console.log(this.state.score)}}>
                 
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </i>
                </React.Fragment>
              ) : (
                <i class="fa fa-times fa-3" aria-hidden="true">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </i>
              )}
            </React.Fragment>
          ))}
          <div>Your Score is: {this.state.score}</div>
        </div>
      </div>
    );
  }
  // componentDidMount() {
  //   this.setState({
  //     score: this.state.score + 1,
  //   });
  // }
}

/*
   <div>{data.map((res,index)=>( 
              
                res.a === this.state.answers[index] ?
                  <React.Fragment>
                      
                      {res.a}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </React.Fragment>

         


              
              ))}</div>*/
