import React, { Component } from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';

import NextPage from './pages/testLoader';
import Main from './pages/main';
import TestPage from './pages/timedTest';
import Level3 from '..'

//https://codepen.io/abbeyjfitzgerald/pen/QaeoYj



 

class App extends Component {

  
  



  render(){
    return(
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/testpage" component={NextPage} />
          <Route path="/timedtest/:num" component={TestPage} />
		  <Route path="/random" component={TestPage} />
        </Switch>
      </BrowserRouter>
    )
  
  }
}

export default App;


/*{"q":["24","-4","7"], "a":27},
	{"q":["3","-2","36"], "a":37},
	{"q":["56","-1","3"], "a":58},
	{"q":["88","-2","-1"], "a":85},
	{"q":["73","-1","7"], "a":79},
	{"q":["7","32","-4"], "a":35},
	{"q":["6","71","-5"], "a":72},
	{"q":["16","-5","2"], "a":13},
	{"q":["7","22","-7"], "a":22},
	{"q":["38","-6","2"], "a":34},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58},
	{"q":["5","54","-1"], "a":58}*/
