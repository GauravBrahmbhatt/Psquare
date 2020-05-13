import React from 'react';
//import logo from './logo.svg';
import './App.css';
import './styleSheets/main.scss';

//https://codepen.io/abbeyjfitzgerald/pen/QaeoYj

function App() {
  return (
    <div className="App">
    <section class="cards">

  <article class="card">
    <picture class="thumbnail">
         <img class="category__01" src="https://abbeyjfitzgerald.com/wp-content/uploads/2018/01/cloud.svg" alt="" />
    </picture>
    <p class="category category__01">Photo Technology</p>
  </article>

  <article class="card">
    <picture class="thumbnail">
         <img class="category__02" src="https://abbeyjfitzgerald.com/wp-content/uploads/2018/01/camera-1.svg" alt="" />
    </picture>
    <p class="category category__02">Photo Technology</p>
   
  </article>

  <article class="card">
    <picture class="thumbnail">
         <img class="category__03" src="https://abbeyjfitzgerald.com/wp-content/uploads/2018/01/list-1.svg" alt="" />
    </picture>
    <p class="category category__03">Data Management</p>
   
  </article>

  <article class="card">
    <picture class="thumbnail">
         <img class="category__04" src="https://abbeyjfitzgerald.com/wp-content/uploads/2017/10/browser-icon-01.svg" alt="" />
    </picture>
    <p class="category category__04">Product Management</p>
   
  </article>

  <article class="card">
    <picture class="thumbnail">
         <img class="category__02" src="https://abbeyjfitzgerald.com/wp-content/uploads/2018/01/camera-1.svg" alt="" />
    </picture>
    <p class="category category__02">Photo Technology</p>
    <div class="card-content">
      
      <h2>Image Techniques</h2>
      <p>TUX re-inventing the wheel, and move the needle. Feature creep dogpile that but diversify kpis but market-facing.</p>
   </div>
    <footer>
      <div class="post-meta">
        <span class="timestamp"><i class="fa fa-clock-o"></i> 6 mins ago</span>
        <span class="comments"><i class="fa fa-comments"></i><a href="#"> 18 comments</a></span>
        </div>
    </footer>
  </article>
 
  <article class="card">
    <picture class="thumbnail">
         <img class="category__01" src="https://abbeyjfitzgerald.com/wp-content/uploads/2018/01/cloud.svg" alt="" />
    </picture>
    <div class="card-content">
      <p class="category category__01">Cloud Storage</p>
      <h2>Image Upload</h2>
      <p>TUX re-inventing the wheel, and move the needle. Feature creep dogpile that but diversify kpis but market-facing.</p>
   </div>
    <footer>
      <div class="post-meta">
        <span class="timestamp"><i class="fa fa-clock-o"></i> 6 mins ago</span>
        <span class="comments"><i class="fa fa-comments"></i> 19 comments</span>
        </div>
    </footer>
  </article>
</section>

    </div>
  );
}

export default App;
