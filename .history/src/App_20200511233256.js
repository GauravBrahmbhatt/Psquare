import React, { Component } from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import './styleSheets/main.scss';
import NextPage from './pages/testLoader';
import Main from './pages/main';

//https://codepen.io/abbeyjfitzgerald/pen/QaeoYj



 

class App extends Component {

  
  



  render(){
    return(
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/register" component={NextPage} />
        </Switch>
      </BrowserRouter>
    )
  
  }
}

export default App;
