import React, { Component } from "react";
import random2D from "../RandomGenerator/RandomGenerator2D";
import randomD from "../RandomGenerator/RandomGeneratorD";
import Timer from "../timer";
import "../../styleSheets/test.scss";

class level3 extends Component {
  constructor() {
    super();
    this.state = {
      count: -1,
      questions: [],
      answers: [],
      submittedAnswer:[],
      result: false,
      loadTimer: false,
      abacus:false
    };
  }
  componentDidMount() {
    console.log(this.props.type);
   if (String(this.props.type) === String("abacus")) {
     //console.log("trig abs");
     this.setState({abacus:true});
      this.abacus();
    }
     else {
      //console.log("trig men");
     this.mentalmath();
    }
  }


  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.count + 1 !== 50) {
      this.setState({
        submittedAnswer: [...this.state.submittedAnswer, this.input.value],
        count: this.state.count + 1,
      });
    } else {
      this.setState({
        submittedAnswer: [...this.state.submittedAnswer, this.input.value],
        count: this.state.count + 1,
        result: true,
      });
    }

    if(this.state.abacus){
      this.abacus()
    }
    else{
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
    console.log(random);
    this.setState({
      questions: [...this.state.questions, random],
      answers: [...this.state.answers, sum],
      count: this.state.count + 1,
    });
    console.log(this.state.questions);
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
    this.setState({
      questions: [...this.state.questions, random],
      answers: [...this.state.answers, sum],
      count: this.state.count + 1,
    });
  };

  render() 
  {
    //console.log(this.state.questions)
    //!this.state.result ? (
      // <table><td></td>   </tr></table>
    return (
      <div className="center">
        {this.state.loadTimer ? (
          <React.Fragment>
            <Timer />
            <div className="center card2">
              <h1>
                <table>
                  {this.state.questions[this.state.count].map((res2) => (
                    <tr>
                   {res2} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
            <div className="center">
              <p className="title">
                <strong>Total Questions: 50</strong>
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
    );
  }
}

export default level3;
// <button onClick={this.abacus}>Click</button>
/*<div>{this.state.questions[this.state.count].map(res=>(
          <div>{res}</div>
          ))}</div>*/

//console.log("Random:" + random);
//random = -random2D(sum);

/*<button onClick={this.abacus}>Click</button>

<div>{this.state.answers[this.state.count]}</div>*/
