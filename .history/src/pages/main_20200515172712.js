import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styleSheets/main.scss";
import image from '../abacus.svg';
//import NextPage from "./testLoader";

//import NextPage from "./testLoader";

class main extends Component {
  handleClick() {
    //alert("Hello Hello Hello");
    // return (<NavLink to="/testpage"/>)
  }

  render() {
    return (
      <div className="App">
        <section class="cards">
          <article class="card">
            <picture class="thumbnail">
              <img
                class="category__01"
                src="https://abbeyjfitzgerald.com/wp-content/uploads/2018/01/cloud.svg"
                alt=""
              />
            </picture>
            <Link to="/testpage">
              <p class="category category__01">Term 1</p>
            </Link>
          </article>

          <article class="card">
            <picture class="thumbnail">
              <img
                class="category__02"
                src="https://abbeyjfitzgerald.com/wp-content/uploads/2018/01/camera-1.svg"
                alt=""
              />
            </picture>
            <Link to="/testpage" level="2">
              <p class="category category__02">Term 2</p>
            </Link>
          </article>

          <article class="card">
            <picture class="thumbnail">
              <img
                class="category__03"
                src={image}
                alt=""
              />
            </picture>
            <Link to="/testpage" level="3">
              <p class="category category__03">Term 3</p>
            </Link>
          </article>

          <article class="card">
            <picture class="thumbnail">
              <img
                class="category__04"
                src={image}
                alt=""
              />
            </picture>
            <Link to="/testpage" level="4">
              <p class="category category__04">Term 4</p>
            </Link>
          </article>

          <article class="card">
            <picture class="thumbnail">
              <img
                class="category__02"
                src={image}
                alt=""
              />
            </picture>
            <Link to="/testpage" level="5">
              <p class="category category__02">Term 5</p>
            </Link>
          </article>

          <article class="card">
            <picture class="thumbnail">
              <img
                class="category__01"
                src={image}
                alt=""
              />
            </picture>
            <Link to="/testpage" level="6">
              <p class="category category__01">Term 6</p>
            </Link>
          </article>

          <article class="card">
            <picture class="thumbnail">
              <img
                class="category__03"
                src={image}
                alt=""
              />
            </picture>
            <Link to="/testpage" level="7">
              <p class="category category__03">Term 7</p>
            </Link>
          </article>

          <article class="card">
         
            <picture class="thumbnail">
            <img
            class="category__04"
                src={image}
                alt=""
              />
              
            </picture>
            <Link to="/testpage" level="8">
              <p class="category category__04">Term 8</p>
            </Link>
          </article>
        </section>
      </div>
    );
  }
}

export default main;