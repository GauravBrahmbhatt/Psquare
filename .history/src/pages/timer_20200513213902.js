import React, { Component } from 'react'

export default class timer extends Component {
    constructor(props){
    super(props);
     this.state = {
      seconds: '00',   // responsible for the seconds 
      minutes: ''  // responsible for the minutes
}
  }
   render() {
      return (
       <div>
        <TimerInput minutes={this.state.minutes}/>
        <Timer minutes={this.state.minutes} seconds={this.state.seconds}/>
       <StartButton/>
      </div>
     );
   }
 }
