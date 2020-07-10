import React, { Component } from "react";
import Timer from "../timer";
import random3D from "../RandomGenerator/RandomGenerator3D";
import random2D from "../RandomGenerator/RandomGenerator2D";
import randomD from "../RandomGenerator/RandomGeneratorD";



const startD = 9;
const start2D = 99;
const start3D = 999;

//share abacus or mental math via props
//based on the selection use componentdidMount and autofill the questions
class level4 extends Component {
  constructor() {
    super();
    this.state = {
      count: -1,
      questions: [],
      answers: [],
      submittedAnswer: [],
      result: false,
      loadTimer: false,
      abacus: false,
    };
  }
  

  componentDidMount(){
   
    console.log(this.props.type);
    console.log("componentDidMount");
    if (String(this.props.type) === String("abacus")) {
      this.setState({ abacus: true });
      this.abacus();
    } else {
      console.log("trig men");
      this.mentalmath();
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let ans=this.input.value;
    this.input.value = "";
    if (this.state.count + 1 !== 50) {
      this.setState({
        submittedAnswer: [...this.state.submittedAnswer, ans],
        count: this.state.count + 1,
      });
    } else {
      this.setState({
        submittedAnswer: [...this.state.submittedAnswer, ans],
        count: this.state.count + 1,
        result: true,
      });
    }
    if (this.state.abacus) {
      this.abacus();
    } else {
      this.mentalmath();
    }
    console.log(this.state.answers);
  };





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

    if (this.state.questions.length > 10 && this.state.questions.length <= 25) {
      num1 = random3D(start3D);
      num2 = randomD(startD);
      ans = num1 * num2;
      random.push(num1, num2);
    }

    if (
      this.state.questions.length > 25 &&
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
      do{
      num1 = random3D(start2D);
      num2 = randomD(startD);
    }while(num1%)
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

  render()  {
    let score = 0;
    return !this.state.result ? (
      <div className="center">
        {this.state.loadTimer ? (
          <React.Fragment>
            <Timer />
            <div>
              <h1>
                <table className="qtable">
                  {this.state.questions[this.state.count].map((res2) => (
                    <tr>
                      <td>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{res2}{" "}
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </td>
                    </tr>
                  ))}
                </table>
              </h1>
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
            </div>
          </React.Fragment>
        ) : (
          <React.Fragment>
            {/* <Link to="/testpage">Back</Link> */}
            <div>
              <p className="title2">Total Questions: 50</p>
              <br />
              <br />
              <button
                className="start"
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
        <table className="qtable">
         
          <tr>
            {this.state.answers.map((res) => (
              <td>
              &nbsp;&nbsp;&nbsp;{res}&nbsp;&nbsp;&nbsp;
              </td>
            ))}
          </tr>
       
        
         
       
               
                  <tr>
            {this.state.submittedAnswer.map((res) => (
              <td>
              &nbsp;&nbsp;&nbsp;{res}&nbsp;&nbsp;&nbsp;
                </td>
            ))}
         </tr>
      <tr>
          {this.state.submittedAnswer.map((res, index) => (
            <td>
              {Number(this.state.answers[index]) === Number(res) ? (
                <i className="fa fa-check fa-3" aria-hidden="true">
                  <p className="heidi">{(score = score + 2)}</p>
                 
                </i>
              ) : (
                <i className="fa fa-times fa-3" aria-hidden="true">
                  
                </i>
              )}
            </td>
          ))}
          </tr>
          </table>
          <br />
          <br />
          <br />
          <table className="qtable">Your Score is: {score}</table>
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


