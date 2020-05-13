import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';

//import './App.css';
import './styleSheets/main.scss';
import NextPage from './pages/testLoader';
import main from './pages/main';

//https://codepen.io/abbeyjfitzgerald/pen/QaeoYj



 

class App extends Component {

  
  
  handleClick() {

    //alert("hello");
    return <NextPage/>
  }




  render(){
    return{
    <Switch>
      <Route path="/" exact component={main} />
      <Route path="/register" component={SignUp} />
      <Route path="/dashboard" component={Dashboard} />
    </Switch>
    }
  
  }
}

export default App;
