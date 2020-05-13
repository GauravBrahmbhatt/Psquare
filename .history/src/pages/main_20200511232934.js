import React from 'react'

class main extends Comp() {
    
  
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
     
    </article>
   
    <article class="card">
      <picture class="thumbnail">
           <img class="category__01" src="https://abbeyjfitzgerald.com/wp-content/uploads/2018/01/cloud.svg" alt="" />
      </picture>
      <button onClick={this.handleClick}><p class="category category__01">Cloud Storage</p></button>
      
    </article>
  </section>
  
      </div>
    );
  }


export default main;
