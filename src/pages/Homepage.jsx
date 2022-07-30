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
            <h1 class="home-subtitle">For a future we imagine</h1>
          </section>
          <div class="image-row" id="image-row">
            <img src="https://img.toolstud.io/300x240/3b5998/fff&text=+carbonera+placeholder+"></img>
            <img src="https://img.toolstud.io/300x240/3b5998/fff&text=+carbonera+placeholder+"></img>
            <img src="https://img.toolstud.io/300x240/3b5998/fff&text=+carbonera+placeholder+"></img>
            <img src="https://img.toolstud.io/300x240/3b5998/fff&text=+carbonera+placeholder+"></img>
          </div>
          <div></div>
        </section>

        <section class="main-page-container">
          <section class="page-container">
            <div class="page-text-container">
              <h1 style={{ color: "black" }} class="home-subtitle">For a better world, know your carbon footprint and reduce it</h1>
              <a class="home-button">Reduce now</a>
            </div>
            <div class="page-image-container">
              <img src="https://www.calliaweb.co.uk/wp-content/uploads/2015/10/600x400.jpg"></img>
            </div>
          </section>
        </section>


      </main>
      <Footer></Footer>
    </div>
  );
}