import * as React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Homepage() {
  return (
    <div className="home-page-div">
      <div className="head-font-div">
        <h2 className="big-font font-head-1">HEALTH</h2>
        <h2 className="big-font font-head-2">PURITY</h2>
        <h2 className="big-font font-head-3">NATURE</h2>
      </div>
      <Header></Header>
      <main>
        <section className="main-page-container">
          <section className="page-container">

            <div className="page-text-container">
              <h1 className="home-title">For a better world, know your carbon footprint and reduce it</h1>
              <a className="home-button">Reduce now</a>
            </div>
            <div className="page-image-container">
              <img className="hero-image" src="src/images/homePage.jpg"></img>
            </div>
          </section>
        </section>

        <section className="main-page-container2">
          <section className="page-container">
            <h1 className="home-subtitle">For a future we imagine</h1>
          </section>
          <div className="image-row" id="image-row">
            <img src="src/images/homePage.jpg"></img>
            <img src="src/images/homePage.jpg"></img>
            <img src="src/images/homePage.jpg"></img>
            <img src="src/images/homePage.jpg"></img>
            <img src="src/images/homePage.jpg"></img>
          </div>
          <div></div>
        </section>

        <section className="main-page-container">
          <section className="page-container small-width">
            <h1 style={{ color: "black" }} className="home-subtitle">Best in class features</h1>

            <div className="page-image-container" >
              <img src="https://www.calliaweb.co.uk/wp-content/uploads/2015/10/600x400.jpg"></img>
            </div>
          </section>
        </section>


      </main>
      <Footer></Footer>
    </div>
  );
}