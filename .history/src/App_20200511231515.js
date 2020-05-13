import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import './styleSheets/main.scss';
import NextPage from './pages/testLoader';

//https://codepen.io/abbeyjfitzgerald/pen/QaeoYj



 

class App extends Component {

  
  
  handleClick() {

    //alert("hello");
    return <NextPage/>
  }




  render(){
    return{}
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      {/* redirect user to SignIn page if route does not exist and user is not authenticated */}
      <Route component={SignIn} />
    </Switch>
  
  }
}

export default App;
