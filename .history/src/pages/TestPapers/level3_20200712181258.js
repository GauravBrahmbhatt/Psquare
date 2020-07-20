import React, { Component } from "react";
import random2D from "../RandomGenerator/RandomGenerator2D";
import randomD from "../RandomGenerator/RandomGeneratorD";
import Timer from "../timer";
import "../../styleSheets/test.scss";

//focus ref to put the cursor back to input
/*qa={
  questions:"",
  answers:"",
  submitted:"",
  result:""
}*/
//https://css-tricks.com/snippets/css/a-guide-to-flexbox/
//https://medium.com/coding-at-dawn/how-to-use-the-spread-operator-in-javascript-b9e4a8b06fab

class level3 extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      questionNumber:0,
      questions: [],
      answers: [],
      submittedAnswer: [],
      qa:[{
        questions:[],
        answers:"",
        submitted:"",
        result:""
      }],
      result: false,
      loadTimer: false,
      abacus: false,
    };
    // const textInput = React.createRef();
  }
 componentDidMount() {
    console.log(this.props.type);
    console.log("componentDidMount");
    if (String(this.props.type) === String("abacus")) {
      this.setState({ abacus: true });
      this.abacus();
    } else {
      this.mentalmath();
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.qa);
    let ans = this.input.value;
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
    //alternate positive and negative num
    //console.log(this.state.questions);
    //console.log(this.state.answers);
    //console.log(this.state.count);
    //console.log("Answers: " + this.state.answers[this.state.count]);
    //console.log("trigerred");
    //console.log(this.state.qa);
    //this.setState({questionNumber: this.state.questionNumber+1})
    let i = 0;
    let sum = 0;
    const start = 99;
    let random = [];
    while (i < 4 && this.state.questions.length <= 50) {
      if (sum === 0) {
        random.push(random2D(start));
        sum = sum + random[i];
      } else if (i % 2 === 0) {
        random.push(random2D(sum));
        sum = sum + random[i];
      } else {
        random.push(-random2D(sum));
        sum = sum + random[i];
      }

      i++;
    }


    const {questionNumber,qa} = this.state;
    console.log(qa);
    console.log(questionNumber)
    qa[questionNumber].questions = random;
    qa[questionNumber].answers = sum;
    /*const {qa} = this.state;
  
    console.log(qa);
    let bundle={
      questions:random,
      answers:sum,
      submitted:"",
      result:""
    }
    qa.push(bundle);*/
    this.setState({qa:qa});
    this.setState({questionNumber: this.state.questionNumber+1});
    //qa.questions = random;
    //qa.answers= sum ;
    //let bundle= [...this.state.qa , qa];
   

    /*this.setState({
      questions: [...this.state.questions, random],
      answers: [...this.state.answers, sum],
      count: this.state.count + 1,
    });*/
    //console.log(this.state.questions);
  };


  mentalmath = () => {
    //console.log("Question:");
    //console.log(this.state.questions);
    //console.log("Answer:");
    //console.log(this.state.answers);
    //console.log(this.state.count);
    //console.log("Answers: " + this.state.answers[this.state.count]);
    let i = 0;
    let sum = 0;
    const start = 9;
    let random = [];
    while (i < 6 && this.state.questions.length <= 50) {
      if (sum === 0) {
        random.push(randomD(start));
        sum = sum + random[i];
      } else if (i % 2 === 0) {
        random.push(randomD(sum));
        sum = sum + random[i];
      } else {
        random.push(-randomD(sum));
        sum = sum + random[i];
      }

      i++;
    }

    const {questionNumber,qa} = this.state;
    console.log(qa);
    qa[questionNumber].questions = random;
    qa[questionNumber].answers = sum;
    /*let bundle={
      questions:random,
      answers:sum,
      submitted:"",
      result:""
    }
    qa.push(bundle);*/
    this.setState({qa:qa});

    /*this.setState({
      questions: [...this.state.questions, random],
      answers: [...this.state.answers, sum],
      count: this.state.count + 1,
    });*/
  };

  

  render() {
    //let score = 0;
    return (
      <div>
      <button onClick={this.abacus}>Click</button>
      <h1>
                <table className="qtable">
                  {this.state.qa[this.state.questionNumber].questions.map((res2) => (
                    <tr>
                      <td>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{res2}{" "}
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </td>
                    </tr>
                  ))}
                </table>
                </h1>

      </div>

    );
    /*
    <div>
      <button onClick={this.abacus()}>Click</button>
      </div>
      let score = 0;
    return !this.state.result ? (
      <div className="center">
        {this.state.loadTimer ? (
          <React.Fragment>
            <Timer/>
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
              <td>&nbsp;&nbsp;&nbsp;{res}&nbsp;&nbsp;&nbsp;</td>
            ))}
          </tr>

          <tr>
            {this.state.submittedAnswer.map((res) => (
              <td>&nbsp;&nbsp;&nbsp;{res}&nbsp;&nbsp;&nbsp;</td>
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
                  <i className="fa fa-times fa-3" aria-hidden="true"></i>
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
    );*/
  }
}


export default level3;

