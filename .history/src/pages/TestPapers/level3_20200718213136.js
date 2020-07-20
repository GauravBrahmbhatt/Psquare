import React, { Component } from "react";
import random2D from "../RandomGenerator/RandomGenerator2D";
import randomD from "../RandomGenerator/RandomGeneratorD";
import Timer from "../timer";
import "../../styleSheets/test.scss";

//https://css-tricks.com/snippets/css/a-guide-to-flexbox/
//https://medium.com/coding-at-dawn/how-to-use-the-spread-operator-in-javascript-b9e4a8b06fab

class level3 extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      questionNumber:0,
      qa:[{
        questions:[],
        answers:"",
        submitted:"",
        result:""
      }],
      score:0,
      result: false,
      loadTimer: false,
      abacus: false,
    };
    //this.input = React.createRef();
    this.handleSubmit= this.handleSubmit.bind(this)
  }


 componentDidMount() {
    console.log(this.props.type);
    this.input.focus();
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
    this.input.focus();
    const {count,qa} = this.state;
    //console.log("Submitted")   
    qa[count].submitted = ans; 
    if(Number(ans)===this.state.qa[count].answers){
      qa[count].result=true;
      this.setState({score:this.state.score+2})
    }
    else{
      qa[count].result=false
    }
    if (this.state.count + 1 !== 50) {
      this.setState({
        qa: qa,
        count: this.state.count + 1,
      });
    } else {
      this.setState({
        qa: qa,
        count: this.state.count + 1,
        result: true,
      });
    }
    console.log(this.state.count);
    console.log(qa);
    if (this.state.abacus) {
      this.abacus();
    } else {
      this.mentalmath();
    }
  };



  abacus = () => {
    let i = 0;
    let sum = 0;
    const start = 99;
    let random = [];
    while (i < 4 && this.state.qa.length <= 50) {
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
    //console.log(qa);
    console.log(questionNumber);
    if(questionNumber===0){
      qa[questionNumber].questions=random;
      qa[questionNumber].answers=sum
    }
    else{
      let bundle={
        questions:random,
        answers:sum,
        submitted:"",
        result:""
      }
      qa.push(bundle)
    }
    this.setState({qa:qa, questionNumber: this.state.questionNumber+1});
    //this.setState({questionNumber: this.state.questionNumber+1});
    //console.log("Length of QA")
    //console.log(this.state.qa.length);
  };


  mentalmath = () => {
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
    //console.log(qa);
    //console.log(questionNumber);
    if(questionNumber===0){
      qa[questionNumber].questions=random;
      qa[questionNumber].answers=sum
    }
    else{
      let bundle={
        questions:random,
        answers:sum,
        submitted:"",
        result:""
      }
      qa.push(bundle)
    }
    this.setState({qa:qa});
    this.setState({questionNumber: this.state.questionNumber+1});
  };

  

  onTimeOut() {
    alert("Test Done");
  }

  //onTimeOut={() => this.onTimeOut()}

  render() {
    //let score = 0;
    //ref={(input) => (this.input = input)}
      return !this.state.result ? (
        <div className="center">
          {this.state.loadTimer ? (
            <React.Fragment>
              <Timer/>
              <div>
              <h1>
                <table className="qtable">
                  {this.state.qa[this.state.count].questions.map((res2) => (
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

            {this.state.qa.map((res) => (
              <tr>
              <td>&nbsp;&nbsp;&nbsp;{res.answers}&nbsp;&nbsp;&nbsp;</td>
              <td></td>
              </tr>
            ))}
          

        </table>
        <br />
        <br />
        <br />
        <table className="qtable">Your Score is: {score}</table>
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

