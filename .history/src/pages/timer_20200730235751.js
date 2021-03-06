import React, { Component } from "react";

//https://codeburst.io/lets-build-a-countdown-timer-with-react-part-1-2e7d5692d914

// <button onClick={this.startCountDown}>Start</button>

export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: "00",
      value: "01",
      isClicked: false,
      secondsRemaining: 0,
    };
    //this.secondsRemaining = 0;
    this.intervalHandle = 0;
    this.handleChange = this.handleChange.bind(this);
    this.startCountDown = this.startCountDown.bind(this);
    this.tick = this.tick.bind(this);
  }

  componentDidUpdate() {
    //console.log(this.state.secondsRemaining);
    if (this.state.secondsRemaining < 0) {
      console.log(this.props);
      this.props.onTimeOut();
    }
  }

  componentDidMount() {
    
    this.startCountDown();
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
    });
  }

  tick() {
    var min = Math.floor(this.state.secondsRemaining / 60);
    var sec = this.state.secondsRemaining - min * 60;

    this.setState({
      value: min,
      seconds: sec,
    });

    if (sec < 10) {
      this.setState({
        seconds: "0" + this.state.seconds,
      });
    }

    if (min < 10) {
      this.setState({
        value: "0" + min,
      });
    }

    if ((min === 0) & (sec === 0)) {
      clearInterval(this.intervalHandle);
    }

    const x = this.state.secondsRemaining - 1;
    this.setState({ secondsRemaining: x });
  }

  startCountDown() {
    this.setState({value:this.props.value});
    this.intervalHandle = setInterval(this.tick, 1000);
    let time = this.props.value;//this.state.value;
    //this.state.secondsRemaining = time * 60;
    this.setState({
      secondsRemaining:time*60,
      isClicked: true
    });
  }

  //<Timer value={this.state.value} seconds={this.state.seconds} />
  //<button onClick={this.startCountDown}>Start</button>
  render() {
    return (
      <div>
        <h1 className="card" style={{ fontSize: 100, marginLeft: 100 }}>
          {this.state.value}:{this.state.seconds}
        </h1>
      </div>
    );
  }
}

/*
 import React from "react";
import ReactDOM from "react-dom";


import "./styles.css";

class TimerInput extends React.Component {
  render() {
    return (
      <div style={{marginLeft:100}}>
        <h3>Input your desired time</h3>
        <input type="number" value={this.props.value} onChange={this.props.handleChange} required />
      </div>
    );
  }
}

class Timer extends React.Component {
  render() {
    return (
      <div>
        <h1 style={{ fontSize: 100, marginLeft:100 }}>{this.props.value}:{this.props.seconds}</h1>
      </div>
    );
  }
}

class StartButton extends React.Component {
  render() {
    return (
      <div style={{ marginLeft: 130 }}>
        <button className="btn btn-lg btn-success" disabled={!this.props.value} onClick={this.props.startCountDown}>Start</button>
      </div>

    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: '00',
      value: '',
      isClicked : false
    }
    this.secondsRemaining;
    this.intervalHandle;
    this.handleChange = this.handleChange.bind(this);
    this.startCountDown = this.startCountDown.bind(this);
    this.tick = this.tick.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    })
  }

  tick() {
    var min = Math.floor(this.secondsRemaining / 60);
    var sec = this.secondsRemaining - (min * 60);

    this.setState({
      value: min,
      seconds: sec,
    })

    if (sec < 10) {
      this.setState({
        seconds: "0" + this.state.seconds,
      })

    }

    if (min < 10) {
      this.setState({
        value: "0" + min,
      })

    }

    if (min === 0 & sec === 0) {
      clearInterval(this.intervalHandle);
    }


    this.secondsRemaining--
  }

  startCountDown() {
    this.intervalHandle = setInterval(this.tick, 1000);
    let time = this.state.value;
    this.secondsRemaining = time * 60;
    this.setState({
      isClicked : true
    })
  }

  render() {
    const clicked = this.state.isClicked;
    if(clicked){
    return (
      <div>
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <Timer value={this.state.value} seconds={this.state.seconds} />
          </div>
        </div>
      </div>
    );
    }else{
      return (
        <div>
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
              <TimerInput value={this.state.value} handleChange={this.handleChange} />
              <Timer value={this.state.value} seconds={this.state.seconds} />
              <StartButton startCountDown={this.startCountDown} value={this.state.value} />
            </div>
          </div>
        </div>
      );
    }
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
*/
