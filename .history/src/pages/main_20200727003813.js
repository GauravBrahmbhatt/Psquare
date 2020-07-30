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
        <div className="title">PRACTICE TESTS</div>
        <section className="section-about">
        <section className="section-features">
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
                  
            </div>
            <div className="col-1-of-4">
                  <article class="card">
                    <picture class="thumbnail">
                      <img class="card__icon" src={image} alt="" />
                    </picture>
                    <Link to="/testpage?l=3" level="3">
                      <p class="card__text">Term 3</p>
                    </Link>
                  </article>
            </div>  
            <div className="col-1-of-4">
                  <article class="card">
                    <picture class="thumbnail">
                      <img class="card__icon" src={image} alt="" />
                    </picture>
                    <Link to="/testpage?l=4" level="4">
                      <p class="card__text">Term 4</p>
                    </Link>
                  </article>
            </div>
            <div className="col-1-of-4">
                  <article class="card">
                    <picture class="thumbnail">
                      <img class="card__icon" src={image} alt="" />
                    </picture>
                    <Link to="/testpage?l=5" level="5">
                      <p class="card__text">Term 5</p>
                    </Link>
                  </article>
            </div>
            <div className="col-1-of-4">
                  <article class="card">
                    <picture class="thumbnail">
                      <img class="card__icon" src={image} alt="" />
                    </picture>
                    <Link to="/testpage?l=6" level="6">
                      <p class="card__text">Term 6</p>
                    </Link>
                  </article>
            </div>
            <div className="col-1-of-4">
                  <article class="card">
                    <picture class="thumbnail">
                      <img class="card__icon" src={image} alt="" />
                    </picture>
                    <Link to="/testpage?l=7" level="7">
                      <p class="card__text">Term 7</p>
                    </Link>
                  </article>
            </div>   
            <div className="col-1-of-4">
                  <article class="card">
                    <picture class="thumbnail">
                      <img class="card__icon" src={image} alt="" />
                    </picture>
                    <Link to="/testpage?l=8" level="8">
                      <p class="card__text">Term 8</p>
                    </Link>
                  </article>
              </div>
        </section>
        </section>
        </section>
      </div>
    );
  }
}

export default main;

/* <div class="col-1-of-4">
                        <div class="feature-box">
                            <i class="feature-box__icon icon-basic-map"></i>
                            <h3 class="heading-tertiary u-margin-bottom-small">Find your way</h3>
                             <p class="feature-box__text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
                            </p>
                        </div>
                    </div>*/
