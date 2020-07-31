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
    //let count =0;
    return (
      <div >
        <div className="header_tertiary">
        <div className="heading-tertiary">PRACTICE TESTS</div>
        </div>
        <div className="home">
        <section className="row">
          <Link to="/testpage?l=1">
                  <article class="card">
                    <picture class="thumbnail">
                      <img class="card__icon" src={image} alt="" />
                    </picture>
                      <p class="card__text">Term 1</p>
                  </article>
            </Link>
            <Link to="/testpage?l=2" level="2">
                  <article class="card">
                    <picture class="thumbnail">
                      <img class="card__icon" src={image} alt="" />
                    </picture>
                      <p class="card__text">Term 2</p>
                  </article>
            </Link>
            <Link to="/testpage?l=3" level="3">
                  <article class="card">
                    <picture class="thumbnail">
                      <img class="card__icon" src={image} alt="" />
                    </picture>
                    
                      <p class="card__text">Term 3</p>
                  </article>
            </Link>
            <Link to="/testpage?l=4" level="4">
                  <article class="card">
                    <picture class="thumbnail">
                      <img class="card__icon" src={image} alt="" />
                    </picture>
                      <p class="card__text">Term 4</p>
                  </article>
            </Link>
            <Link to="/testpage?l=5" level="5">
                  <article class="card">
                    <picture class="thumbnail">
                      <img class="card__icon" src={image} alt="" />
                    </picture>
                      <p class="card__text">Term 5</p>
                  </article>
            </Link>
            <Link to="/testpage?l=6" level="6">
                  <article class="card">
                    <picture class="thumbnail">
                      <img class="card__icon" src={image} alt="" />
                    </picture>
                    
                      <p class="card__text">Term 6</p>
                    
                  </article>
            </Link>
            <Link to="/testpage?l=7" level="7">
                  <article class="card">
                    <picture class="thumbnail">
                      <img class="card__icon" src={image} alt="" />
                    </picture>
                      <p class="card__text">Term 7</p>
                  </article>
            </Link>  
            <Link to="/testpage?l=8" level="8">
                  <article class="card">
                    <picture class="thumbnail">
                      <img class="card__icon" src={image} alt="" />
                    </picture>
                      <p class="card__text">Term 8</p>
                  </article>
            </Link>
        </section>
      </div>
    );
  }
}

export default main;


