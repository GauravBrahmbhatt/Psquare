import React, { Component } from "react";
import random3D from "../RandomGenerator/RandomGenerator3D";
import random2D from "../RandomGenerator/RandomGenerator2D";
import randomD from "../RandomGenerator/RandomGeneratorD";



const startD = 9;
const start2D = 99;
const start3D = 999;
//const size = 40;

class level4 extends Component {
  constructor() {
    super();
    this.state = {
      //count: -1,
      questions: [],
      answers: [],
      submitted_answers: [],
      result: false,
      loadTimer: false,
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    //this.state.count + 1 !== data.length
    if (this.state.questions.length <= 40) {
      this.setState({
        submitted_answers: [...this.state.submitted_answers, this.input.value],
        //count: this.state.count + 1,
      });
      //  this.input.
    } else {
      this.setState({
        submitted_answers: [...this.state.submitted_answers, this.input.value],
        //count: this.state.count + 1,
        result: true,
      });
    }
  }


  abacus = () => {
    console.log(this.state.questions);
    //console.log(this.state.questions.length);
    console.log(this.state.answers);
    //console.log(this.state.count);
    //console.log("Answers: " + this.state.answers[this.state.count]);
    let i = 0;
    let ans = 0;
    let num1 = 0;
    let num2 = 0;
    let random = [];

    while (i < 6 && this.state.questions.length < 10) {
      if (ans === 0) {
        random.push(random2D(start2D));
        ans = ans + random[i];
      } else if (i % 2 === 0) {
        random.push(random2D(ans));
        ans = ans + random[i];
      } else {
        random.push(-random2D(ans));
        ans = ans + random[i];
      }

      i++;
    }

    if (this.state.questions.length > 10 && this.state.questions.length < 25) {
      num1 = random3D(start3D);
      num2 = randomD(startD);
      ans = num1 * num2;
      random.push(num1, num2);
    }

    if (
      this.state.questions.length >= 25 &&
      this.state.questions.length <= 40
    ) {
      console.log("Div");
      num1 = random3D(start3D);
      num2 = randomD(startD);
      ans = Math.floor(num1 / num2);
      console.log(ans);
      random.push(num1, num2);
    }

    this.setState({
      questions: [...this.state.questions, random],
      answers: [...this.state.answers, ans],
      count: this.state.count + 1,
    });
  };

  mentalmath = () => {
    //console.log("Question:");
    //console.log(this.state.questions);
    //console.log("Answer:");
    //console.log(this.state.answers);
    //console.log(this.state.count);
    //console.log("Answers: " + this.state.answers[this.state.count]);
    let i = 0;
    let ans = 0;
    let num1 = 0;
    let num2 = 0;
    let random = [];

    while (i < 6 && this.state.questions.length <= 50) {
      if (ans === 0) {
        random.push(randomD(startD));
        ans = ans + random[i];
      } else if (i % 2 === 0) {
        random.push(randomD(ans));
        ans = ans + random[i];
      } else {
        random.push(-randomD(ans));
        ans = ans + random[i];
      }

      i++;
    }

    if (this.state.questions.length >= 10 && this.state.questions.length < 25) {
      num1 = random3D(start2D);
      num2 = randomD(startD);
      ans = num1 * num2;
      random.push(num1, num2);
    }

    if (
      this.state.questions.length >= 25 &&
      this.state.questions.length <= 40
    ) {
      console.log("Div");
      num1 = random3D(start2D);
      num2 = randomD(startD);
      ans = Math.floor(num1 / num2);
      console.log(ans);
      random.push(num1, num2);
    }

    this.setState({
      questions: [...this.state.questions, random],
      answers: [...this.state.answers, ans],
      count: this.state.count + 1,
    });
  };

  render() {
    //Change the method to mentalmath or abacus based on which one you are testing
    //check and fix the length problem
    // <button onClick={this.abacus}>Click</button>
    //<div>{this.state.answers[this.state.count]}</div>
    return (
      <div>
       
      </div>
    );
  }
}

export default level4;

/*<div>{this.state.questions[this.state.count].map(res=>(
          <div>{res}</div>
          ))}</div>*/

//console.log("Random:" + random);
//random = -random2D(sum);


/*
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
              <label>Your Answer</label>
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
            <Link to="/testpage">Back</Link>
            <div className="center">
              <p className="title">
                <strong>Total Questions: {data.length}</strong>
              </p>
              <br />
              <br />
              <button
                className="center"
                onClick={() => this.setState({ loadTimer: true })}
              >
                Start
              </button>
            </div>
          </React.Fragment>
        )}
      </div>
    ) : (
      <div className="center">
        Result:
        <div>
          Correct Answers:
          <div>
            {data.map((res) => (
              <React.Fragment>
                {res.a}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </React.Fragment>
            ))}
          </div>
        </div>
        <div>
          <p>Your Answers:</p>
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
                <i className="fa fa-check fa-3" aria-hidden="true">
                  <p className="heidi">{(score = score + 2)}</p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </i>
              ) : (
                <i className="fa fa-times fa-3" aria-hidden="true">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </i>
              )}
            </React.Fragment>
          ))}
          <br />
          <br />
          <br />
          <div>Your Score is: {score}</div>
        </div>
      </div>
    );*/
