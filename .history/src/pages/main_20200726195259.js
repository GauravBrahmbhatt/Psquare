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
      <div className="parallax">
        <div className="title">PRACTICE TESTS</div>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <section class="row">
          <div class="col-1-of-4">
                  <article class="card">
                    <picture class="thumbnail">
                      <img class="category__01" src={image} alt="" />
                    </picture>
                    <Link to="/testpage?l=1">
                      <p class="category category__03">Term 1</p>
                    </Link>
                  </article>
            </div>
            <div class="col-1-of-4">
                  <article class="card">
                    <picture class="thumbnail">
                      <img class="category__02" src={image} alt="" />
                    </picture>
                    <Link to="/testpage?l=2" level="2">
                      <p class="category category__03">Term 2</p>
                    </Link>
                  </article>
            </div>
            <div class="col-1-of-4">
                  <article class="card">
                    <picture class="thumbnail">
                      <img class="category__04" src={image} alt="" />
                    </picture>
                    <Link to="/testpage?l=3" level="3">
                      <p class="category category__03">Term 3</p>
                    </Link>
                  </article>
            </div>  
            <div class="col-1-of-4">
                  <article class="card">
                    <picture class="thumbnail">
                      <img class="category__05" src={image} alt="" />
                    </picture>
                    <Link to="/testpage?l=4" level="4">
                      <p class="category category__03">Term 4</p>
                    </Link>
                  </article>
            </div>
            <div class="col-1-of-4">
                  <article class="card">
                    <picture class="thumbnail">
                      <img class="category__01" src={image} alt="" />
                    </picture>
                    <Link to="/testpage?l=5" level="5">
                      <p class="category category__03">Term 5</p>
                    </Link>
                  </article>
            </div>
            <div class="col-1-of-4">
                  <article class="card">
                    <picture class="thumbnail">
                      <img class="category__02" src={image} alt="" />
                    </picture>
                    <Link to="/testpage?l=6" level="6">
                      <p class="category category__03">Term 6</p>
                    </Link>
                  </article>
            </div>
            <div class="col-1-of-4">
                <article class="card">
                  <picture class="thumbnail">
                    <img class="category__04" src={image} alt="" />
                  </picture>
                  <Link to="/testpage?l=7" level="7">
                    <p class="category category__03">Term 7</p>
                  </Link>
                </article>
            </div>   
        <div class="col-1-of-4">
          <article class="card">
            <picture class="thumbnail">
              <img class="category__05" src={image} alt="" />
            </picture>
            <Link to="/testpage?l=8" level="8">
              <p class="category category__03">Term 8</p>
            </Link>
          </article>
          </div>
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
