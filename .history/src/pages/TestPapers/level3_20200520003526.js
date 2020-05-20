import React, { Component } from "react";
import random2D from "./RandomGenerator2D";


//https://codeburst.io/useful-javascript-array-and-object-methods-6c7971d93230
//https://sheelahb.com/blog/how-to-send-email-from-react-without-a-backend/

class level3 extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      questions: [],
      answers: [],
      result: false,
      loadTimer: false,
    };
  }

  abacus = () => {
    //alternate positive and negative num
      
    //console.log(this.state.questions);
    console.log(this.state.answers);
    console.log(this.state.count);
    console.log(this.state.answers[this.state.count]);
    let i = 0;
    let sum = 0;
    const start = 99;
    let random=[];
    while ((i < 4) && (this.state.questions.length <= 50) ) {
      if (sum === 0) {
        random.push(random2D(start));     
        sum = sum + random;
      } else if (i % 2 === 0) {
        random.push(random2D(sum));
        sum = sum + random;
      } else {
        random.push(-random2D(sum));
        sum = sum + random;
      }

      i++;
    }
    this.setState({questions:[...this.state.questions,random],answers:[...this.state.answers,sum],count:this.state.count+1});
  };


  mentalmath=() =>{

  }


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
