import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styleSheets/main.scss";
import image from "../abacus.svg";
//import bg from "../bg.jpg";
//import NextPage from "./testLoader";

//import NextPage from "./testLoader";

class main extends Component {
  handleClick() {
    //alert("Hello Hello Hello");
    // return (<NavLink to="/testpage"/>)
  }

  render() {
    let count =0;
    return (
      <div className="App">
        <div className="title">PRACTICE TESTS</div>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <section class="cards">
          <article class="card">
            <picture class="thumbnail">
              <img class="category__01" src={image} alt="" />
            </picture>
            <Link to=`{/testpage/${count+1}}`>
              <p class="category category__01">Term 1</p>
            </Link>
          </article>

          <article class="card">
            <picture class="thumbnail">
              <img class="category__02" src={image} alt="" />
            </picture>
            <Link to="/testpage/2" level="2">
              <p class="category category__02">Term 2</p>
            </Link>
          </article>

          <article class="card">
            <picture class="thumbnail">
              <img class="category__03" src={image} alt="" />
            </picture>
            <Link to="/testpage/3" level="3">
              <p class="category category__03">Term 3</p>
            </Link>
          </article>

          <article class="card">
            <picture class="thumbnail">
              <img class="category__04" src={image} alt="" />
            </picture>
            <Link to="/testpage/4" level="4">
              <p class="category category__04">Term 4</p>
            </Link>
          </article>

          <article class="card">
            <picture class="thumbnail">
              <img class="category__02" src={image} alt="" />
            </picture>
            <Link to="/testpage/5" level="5">
              <p class="category category__02">Term 5</p>
            </Link>
          </article>

          <article class="card">
            <picture class="thumbnail">
              <img class="category__01" src={image} alt="" />
            </picture>
            <Link to="/testpage/6" level="6">
              <p class="category category__01">Term 6</p>
            </Link>
          </article>

          <article class="card">
            <picture class="thumbnail">
              <img class="category__03" src={image} alt="" />
            </picture>
            <Link to="/testpage/7" level="7">
              <p class="category category__03">Term 7</p>
            </Link>
          </article>

          <article class="card">
            <picture class="thumbnail">
              <img class="category__04" src={image} alt="" />
            </picture>
            <Link to="/testpage/8" level="8">
              <p class="category category__04">Term 8</p>
            </Link>
          </article>
        </section>
      </div>
    );
  }
}

export default main;
