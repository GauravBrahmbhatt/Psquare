import React, { Component } from 'react';
import {Link} from "react-router-dom";
import '../styleSheets/main.scss';


//import NextPage from "./testLoader";

class main extends Component {

    handleClick(){
        //alert("Hello Hello Hello");
       // return (<NavLink to="/testpage"/>)

    }
    
  render(){
    
    return (
      <div className="App">
      <section class="cards">
  
    <article class="card">
      <picture class="thumbnail">
           <img class="category__01" src="https://abbeyjfitzgerald.com/wp-content/uploads/2018/01/cloud.svg" alt="" />
      </picture>
      <Link to="/testpage" level="1"><p class="category category__01">Level 1</p></Link>
    </article>
  
    <article class="card">
      <picture class="thumbnail">
           <img class="category__02" src="https://abbeyjfitzgerald.com/wp-content/uploads/2018/01/camera-1.svg" alt="" />
      </picture>
      <Link to="/testpage" level="2"><p class="category category__02">Level 2</p></Link>
     
    </article>
  
    <article class="card">
      <picture class="thumbnail">
           <img class="category__03" src="https://abbeyjfitzgerald.com/wp-content/uploads/2018/01/list-1.svg" alt="" />
      </picture>
      <Link to="/testpage" level="3"><p class="category category__03">Level 3</p></Link>
     
    </article>
  
    <article class="card">
      <picture class="thumbnail">
           <img class="category__04" src="https://abbeyjfitzgerald.com/wp-content/uploads/2017/10/browser-icon-01.svg" alt="" />
      </picture>
      <Link to="/testpage" level="4"><p class="category category__04">Level 4</p></Link>
     
    </article>
  
    <article class="card">
      <picture class="thumbnail">
           <img class="category__02" src="https://abbeyjfitzgerald.com/wp-content/uploads/2018/01/camera-1.svg" alt="" />
      </picture>
      <Link to="/testpage" level="5"><p class="category category__02">Level 5</p>
     
    </article>
   
    <article class="card">
      <picture class="thumbnail">
           <img class="category__01" src="https://abbeyjfitzgerald.com/wp-content/uploads/2018/01/cloud.svg" alt="" />
      </picture>
      <button ><Link to="/testpage" level="6"><p class="category category__01" >Level 6</p></Link></button>
      
    </article>

    <article class="card">
      <picture class="thumbnail">
           <img class="category__03" src="https://abbeyjfitzgerald.com/wp-content/uploads/2018/01/list-1.svg" alt="" />
      </picture>
      <Link to="/testpage" level="7"></Link><p class="category category__03">Level 7</p>
     
    </article>
  
    <article class="card">
      <picture class="thumbnail">
           <img class="category__04" src="https://abbeyjfitzgerald.com/wp-content/uploads/2017/10/browser-icon-01.svg" alt="" />
      </picture>
      <Link to="/testpage" level="8"></Link><p class="category category__04">Level 8</p>
     
    </article>
  </section>
  
      </div>
    );
  }
}


export default main;
