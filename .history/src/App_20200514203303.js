import React, { Component } from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';

import NextPage from './pages/testLoader';
import Main from './pages/main';
import TestPage from './pages/timedTest';

//https://codepen.io/abbeyjfitzgerald/pen/QaeoYj



 

class App extends Component {

  
  



  render(){
    return(
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/testpage" component={NextPage} />
          <Route path="/timedtest/:num" component={TestPage} />
        </Switch>
      </BrowserRouter>
    )
  
  }
}

export default App;