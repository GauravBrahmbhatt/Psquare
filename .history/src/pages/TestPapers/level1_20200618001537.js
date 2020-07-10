import React, { Component } from "react";
import { Link } from "react-router-dom";
import data from "../../PracticeTest-master/JSON_PT.json";
import Timer from "../timer";
import "../../styleSheets/main.scss";

//https://daveceddia.com/usestate-hook-examples/

 class level1 extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      answers: [],
      result: false,
      loadTimer: false,
    };

    //this.Timer = React.createRef();
  }

  /*onClick = () => {
      this.Timer.current.startCountDown();
  }*/
  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.count + 1 !== data.length) {
      this.setState({
        answers: [...this.state.answers, this.input.value],
        count: this.state.count + 1,
      });
      //  this.input.
    } else {
      this.setState({
        answers: [...this.state.answers, this.input.value],
        count: this.state.count + 1,
        result: true,
      });
    }

    // this.input.;

    console.log(this.state.answers);
  };

  render() {
    console.log(data);
    //const { score } = this.state;
    //onSubmit={this.handleSubmit}
    //<button onClick={this.onClick()}>Start</button>
    //<Timer ref={this.Timer}/>
    let score = 0;
    //let show = false;

    return !this.state.result ? (
     
      <div className="center">
      
        {this.state.loadTimer ? (
          <React.Fragment>
            <Timer />
            <h2 className="center">
            <table>
              {data[this.state.count].q.map((res2) => (
                <tr>
                  {res2}
                </tr>
              ))}
              </table>
            </h2>
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
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Link to="/testpage">Back</Link>
            <div className="center">
              <p className="title">
                <strong>Total Questions: {data.length}</strong>
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
    ) : (
      <div className="center">
        Result:
        <div>
          Correct Answers:
          <div>
            {data.map((res) => (
              <React.Fragment>
                {res.a}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </React.Fragment>
            ))}
          </div>
        </div>
        <div>
          <p>Your Answers:</p>
          <div>
            {this.state.answers.map((res) => (
              <React.Fragment>
                {res}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </React.Fragment>
            ))}
          </div>
        </div>
        <div>
          {data.map((res, index) => (
            <React.Fragment>
              {Number(this.state.answers[index]) === Number(res.a) ? (
                <i className="fa fa-check fa-3" aria-hidden="true">
                  <p className="heidi">{(score = score + 2)}</p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </i>
              ) : (
                <i className="fa fa-times fa-3" aria-hidden="true">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </i>
              )}
            </React.Fragment>
          ))}
          <br />
          <br />
          <br />
          <div>Your Score is: {score}</div>
        </div>
      </div>
    );
  }
  // componentDidMount() {
  //   this.setState({
  //     score: this.state.score + 1,
  //   });
  // }
}



export default level1;

/*
   <div>{data.map((res,index)=>( 
              
                res.a === this.state.answers[index] ?
                  <React.Fragment>
                      
                      {res.a}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </React.Fragment>

         


              
              ))}</div>*/

/* onChange={(e) => {
                    //this.setState({ score: this.state.score + 1 });
                    //console.log(this.state.score);
                    score = score + 2;
                    console.log("the score is: " + score);
                  }}*/


/*table {
  border-collapse: collapse;
}

td, th {
  border: 1px solid #999;
  padding: 0.5rem;
  text-align: left;
}
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>ID</th>
      <th>Favorite Color</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Jim</td>
      <td>00001</td>
      <td>Blue</td>
    </tr>
    <tr>
      <td>Sue</td>
      <td>00002</td>
      <td>Red</td>
    </tr>
    <tr>
      <td>Barb</td>
      <td>00003</td>
      <td>Green</td>
    </tr>
  </tbody>
</table>*/
