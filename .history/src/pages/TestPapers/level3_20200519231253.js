import React, { Component } from "react";
import random2D from "./RandomGenerator2D";


//https://codeburst.io/useful-javascript-array-and-object-methods-6c7971d93230

class level3 extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      questions: {},
      answers: [],
      result: false,
      loadTimer: false,
    };
  }

  abacus = () => {
    //alternate positive and negative num
    let i = 0;
    let sum = 0;
    const start = 99;
    let random;
    let randomArr=[];
    while (i < 4) {
      if (sum === 0) {
        random = random2D(start);
        randomArr.push(random);
        console.log("Random:" + random);
        sum = sum + random;
      } else if (i % 2 === 0) {
        random = random2D(sum);
        randomArr.push(random);
        console.log("Random:" + random);
        sum = sum + random;
      } else {
        random = -random2D(sum);
        randomArr.push(random);
        console.log("Random:" + random);
        sum = sum + random;
      }

      i++;
    }
    this.setState({questions:randomArr,answers:sum,count:this.state.count+1});
    //console.log(randomArr);
    //console.log("Result: " + sum);
  };


  mentalmath=() =>{

  }


  render() {
    console.log(this.state.q)
    return (
      <div>
        <button onClick={this.abacus}>Click</button>
        <div>{this.state.questions[this.state.count].map(res=>(
          <div>{res}</div>
          ))}</div>
          <div>{this.state.answers[this.state.count]}</div>
      </div>
    );
  }
}

export default level3;