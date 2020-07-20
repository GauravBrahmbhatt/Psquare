import React, { Component } from "react";
import Timer from "../timer";
import random3D from "../RandomGenerator/RandomGenerator3D";
import random2D from "../RandomGenerator/RandomGenerator2D";
import randomD from "../RandomGenerator/RandomGeneratorD";



const startD = 9;
const start2D = 99;
const start3D = 999;
//const size = 40;

class level7 extends Component {
  constructor() {
    super();
    this.state =
      {
        count: 0,
        questionNumber:0,
        qa:[{
          questions:[],
          answers:"",
          submitted:"",
          result:"",
          type:""
        }],
        score:0,
        result: false,
        loadTimer: false,
        abacus: false,
        time:0
      };
      this.input = React.createRef();
      this.handleSubmit= this.handleSubmit.bind(this)
  }

  componentDidMount(){
    if (String(this.props.type) === String("abacus")) {
      this.setState({ abacus: true, time: '03' });
      this.abacus();
    } else {
      this.setState({abacus: false, time: '03' });
      this.mentalmath();
    }
  }
  
  handleSubmit = (event)=>{
    event.preventDefault();
    console.log(this.state.qa);
    let ans = this.input.value;
    this.input.value = "";
    this.input.focus();
    const {count,qa} = this.state;   
    qa[count].submitted = ans; 
    if(Number(ans)===Number(this.state.qa[count].answers)){
      qa[count].result=true;
      this.setState({score:this.state.score+2})
    }
    else{
      qa[count].result=false
    }
    if (this.state.count + 1 !== 40) {
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
    let ans = 0;
    let num1 = 0;
    let num2 = 0;
    let random = [];
    let type = "";

    while (i < 6 && this.state.qa.length < 10) {
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

    if (this.state.qa.length > 10 && this.state.qa.length < 25) {
      num1 = random3D(start3D);
      num2 = randomD(startD);
      ans = num1 * num2;
      random.push(num1, num2);
    }

    if (
      this.state.qa.length >= 25 &&
      this.state.qa.length <= 40
    ) {
      console.log("Div");
      num1 = random3D(start3D);
      num2 = randomD(startD);
      ans = Math.floor(num1 / num2);
      console.log(ans);
      random.push(num1, num2);
    }

    const {questionNumber,qa} = this.state;
    if(questionNumber===0){
      qa[questionNumber].questions=random;
      qa[questionNumber].answers=ans;
      qa[questionNumber].type=type;
    }
    else{
      let bundle={
        questions:random,
        answers:ans,
        submitted:"",
        result:"",
        type:type
      }
      qa.push(bundle)
    }
    this.setState({qa:qa, questionNumber: this.state.questionNumber+1});
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

    while (i < 6 && this.state.qa.length < 10) {
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

    if (this.state.qa.length >= 10 && this.state.qa.length < 25) {
      num1 = random3D(start2D);
      num2 = randomD(startD);
      ans = num1 * num2;
      random.push(num1, num2);
    }

    if (
      this.state.qa.length > 25 &&
      this.state.qa.length < 40
    ) {
      //console.log("Div");
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
              <p className="title2">Total Questions: 40</p>
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

export default level7;

/*<div>{this.state.questions[this.state.count].map(res=>(
          <div>{res}</div>
          ))}</div>*/

//console.log("Random:" + random);
//random = -random2D(sum);
