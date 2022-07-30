// Check thread

import * as React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Homepage() {
  return (
    <div>
      <Header></Header>
      <main>
        <section class="main-page-container">
        <section class="page-container">
          <div class="page-text-container">
            <h1 class="home-title">For a better world, know your carbon footprint and reduce it</h1>
            <a class="home-button">Reduce now</a>
          </div>
          <div class="page-image-container">
            <img src="https://www.calliaweb.co.uk/wp-content/uploads/2015/10/600x400.jpg"></img>
            
          </div>
        </section>
       </section>
        
        <section class="main-page-container2">
          <section class="page-container">
          
          <div></div>
          </section>
          
        </section>
        
        <section>
          <h1>Best in class features</h1>
          <div></div>
          <div></div>
          <div></div>
        </section>
      </main>
      <Footer></Footer>
    </div>
  );
}