import React, { Component } from "react";
import random3D from "../RandomGenerator/RandomGenerator3D";
import random2D from "../RandomGenerator/RandomGenerator2D";
import randomD from "../RandomGenerator/RandomGeneratorD";

//https://codeburst.io/useful-javascript-array-and-object-methods-6c7971d93230
//https://sheelahb.com/blog/how-to-send-email-from-react-without-a-backend/

    const startD = 9;
    const start2D = 99;
    const start3D = 999;
    const size

class level3 extends Component {

    

  constructor() {
    super();
    this.state = {
      count: -1,
      questions: [],
      answers: [],
      result: false,
      loadTimer: false,
    };
  }

  abacus = () => {

    console.log(this.state.questions);
    //console.log(this.state.questions.length);
    //console.log(this.state.answers);
    //console.log(this.state.count);
    //console.log("Answers: " + this.state.answers[this.state.count]);
    let i = 0;
    let ans = 0;
    let num1=1;
    let num2=1;
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

   if((this.state.questions.length >= 10) && (this.state.questions.length < 25))
    {
        num1= random3D(start3D);
        num2= randomD(startD);
        ans = num1 * num2;
        random.push(num1,num2);
    }

    if((this.state.questions.length >= 25) && (this.state.questions.length <= 40))
    {
        console.log("Div");
        num1= random3D(start3D);
        num2= randomD(startD);
        ans = Math.floor(num1 / num2);
        console.log(ans);
        random.push(num1,num2);
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
    let sum = 0;
    let random = [];
    while (i < 6 && this.state.questions.length <= 50) {
      if (sum === 0) {
        random.push(randomD(startD));
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

  render() {
    return (
      <div>
        <button onClick={this.abacus}>Click</button>

        <div>{this.state.answers[this.state.count]}</div>
      </div>
    );
  }
}

export default level3;

/*<div>{this.state.questions[this.state.count].map(res=>(
          <div>{res}</div>
          ))}</div>*/

//console.log("Random:" + random);
//random = -random2D(sum);
