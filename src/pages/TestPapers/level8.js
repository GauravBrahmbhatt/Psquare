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

    if (this.state.qa.length >= 39) {
      this.setState({ result: true });
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
    let i = 0;
    let ans = 0;
    let num1 = 0;
    let num2 = 0;
    let random = [];
    let type = '';

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
      type = 'mul';
      num1 = random3D(start2D);
      num2 = randomD(startD);
      ans = num1 * num2;
      random.push(num1, num2);
    }

    if (
      this.state.qa.length > 25 &&
      this.state.qa.length < 40
    ) {
      type='div';
      num1 = random3D(start2D);
      num2 = randomD(startD);
      ans = Math.floor(num1 / num2);
      console.log(ans);
      random.push(num1, num2);
    }

   if (this.state.qa.length >= 39) {
      this.setState({ result: true });
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

  

			   
								
   

									  
					  

  render(){
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
											   

					  
            <form className="form-grid form">
              <input
                  className="form__input"
                  type="number"
                  name="number"
                  placeholder="Please enter your answer"
                  ref={(input) => (this.input = input)}
                  required
                />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button className="btn-submit" onClick={this.handleSubmit}>submit</button>
              </form>  
    </div>
    </React.Fragment>
		  
			
      ) : (
        <React.Fragment>
		 <div className="header_main">
              <p className="heading-secondary">Total Questions: 40</p>
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
                <React.Fragment>{q}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</React.Fragment>))}</div>
              <div>&nbsp;&nbsp;&nbsp;Answer:&nbsp;{res.answers}&nbsp;&nbsp;&nbsp;</div>
              <div>&nbsp;&nbsp;&nbsp;Submitted:&nbsp;{res.submitted}&nbsp;&nbsp;&nbsp;</div>
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

export default level7;

/*<div>{this.state.questions[this.state.count].map(res=>(
          <div>{res}</div>
          ))}</div>*/

//console.log("Random:" + random);
//random = -random2D(sum);
