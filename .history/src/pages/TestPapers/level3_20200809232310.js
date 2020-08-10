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
      time:0
    };
    this.input = React.createRef();
    this.handleSubmit= this.handleSubmit.bind(this)
  }


 componentDidMount() {
    console.log(this.props.type); 
    if (String(this.props.type) === String("abacus")) {
      this.setState({ abacus: true, time: '03' });
      this.abacus();
    } else {
      this.setState({abacus: false, time: '03' });
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
    console.log(Number(ans));
    console.log(Number(this.state.qa[count].answers));
    if(Number(ans)===Number(this.state.qa[count].answers)){
      console.log(Number(ans));
      console.log(Number(this.state.qa[count].answers));
      qa[count].result=true;
      this.setState({score:this.state.score+2})
    }
    else{
      qa[count].result=false
    }
    if (this.state.count + 1 !== 49) {
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
    while (i < 4 && this.state.qa.length < 50) {
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
    //console.log("Length of QA")
    //console.log(this.state.qa.length);
  };


  mentalmath = () => {
    let i = 0;
    let sum = 0;
    const start = 9;
    let random = [];
    while (i < 6 && this.state.qa.length < 50) {
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
    this.setState({qa:qa, questionNumber: this.state.questionNumber+1});
  };

  

  onTimeOut() {
   this.setState({result:true});
  }

  //onTimeOut={() => this.onTimeOut()}
  //className="center"

  render() {
      return !this.state.result ? (
        <div >
          {this.state.loadTimer ? (
            <React.Fragment>
              <div className="u-center-item">
              <Timer onTimeOut={() => this.onTimeOut()} value={this.state.time}/>
              </div>
              <div>
              <div className="question_grid">
                
                  {this.state.qa[this.state.count].questions.map((res2) => (
                    
                    <div className="question-card u-margin-bottom-small">
                        {res2}{" "}
                    </div>
                    
                  ))}
      
                  </div>
                <br />
              <br />

              <form>
                <label>Your Answer</label>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                <input
                  type="number"
                  name="number"
                  placeholder="Please enter your answer"
                  ref={(input) => (this.input = input)}
                  required
                />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={this.handleSubmit}>Submit your answer</button>
              </form>
      </div>
      </React.Fragment>
        ) : (
          <React.Fragment>

            <div className="header_main">
              <p className="heading-secondary">Total Questions: 50</p>
              <br />
              <br />
              <button
                className="btn btn--green"
                onClick={() => this.setState({ loadTimer: true })}
              >
                Start
              </button>
            </div>
          </React.Fragment>
        )}
      </div>
    ) : (
      <React.Fragment>
      <div className="center">
        Result:
        </div>
        <div className="result_grid">

            {this.state.qa.map((res) => (
              <div className="result-card">
              <div>{res.questions.map(q=>(
                <React.Fragment>{q}&nbsp;&nbsp;&nbsp;</React.Fragment>))}</div>
              <div>&nbsp;&nbsp;&nbsp;{res.answers}&nbsp;&nbsp;&nbsp;</div>
              <div>&nbsp;&nbsp;&nbsp;{res.submitted}&nbsp;&nbsp;&nbsp;</div>
              <div>
                {res.result ? (
                  <i className="fa fa-check fa-3" aria-hidden="true"></i>
                ) : (
                  <i className="fa fa-times fa-3" aria-hidden="true"></i>
                )}
              </div>
              </div>
            ))}
          </div>
       
        <br />
        <br />
        <br />
        <table className="qtable">Your Score is: {this.state.score}</table>
        </React.Fragment>
    );

  }
}


export default level3;

