import * as React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div className="home-page-div">

      <Header></Header>
      <main>
        <section className="display-flex main-page-container">
          <div className="page-container">
          <div class="about-cards-section">
            <div class="about-card">
              <h1 class="about-title">RORY</h1>
            </div>
            <div class="about-card">
              <h1 class="about-title">AVICHAL</h1>
            </div>
            <div class="about-card">
              <h1 class="about-title">SIDDHARTH</h1>
            </div>
            <div class="about-card">
              <h1 class="about-title">PRANITH</h1>
            </div>

          </div>
          <div style={{marginTop:"-4.5rem"}}className="page-image-container">
            <img className="hero-image" src="src/images/aboutUs3x-100.jpg"></img>
          </div>
            </div>
          {/* done, is there something else you need help in*/}
          {/* how should i make the navbar text white for just this page?*/}
          {/* I am making it white for every page cause black is not visible in the images, Okay sounds good*/} 
          
        </section>


      </main>
      <Footer></Footer>
    </div>

  );
}