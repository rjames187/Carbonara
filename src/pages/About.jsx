import * as React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div className="home-page-div">

      <Header></Header>
      <main>
        <section className="display-flex main-page-container">
          <div className="page-container" style={{marginTop: "5rem"}}>
          <div class="about-cards-section">
            <div data-aos-duration="1000"data-aos="fade-right"data-aos-delay="200"class="about-card">
              <h1 class="about-title">RORY</h1>
            </div>
            <div data-aos-duration="1000"data-aos="fade-left"data-aos-delay="400"class="about-card">
              <h1 class="about-title">AVICHAL</h1>
            </div>
            <div data-aos-duration="1000"data-aos="fade-right"data-aos-delay="600"class="about-card">
              <h1 class="about-title">SIDDHARTH</h1>
            </div>
            <div data-aos-duration="1000"data-aos="fade-left"data-aos-delay="800"class="about-card">
              <h1 class="about-title">PRANITH</h1>
            </div>

          </div>
          <div className="page-image-container about-container">
            <img className="hero-image about-image" src="src/images/aboutUs3x-100.jpg"></img>
          </div>
            </div>
      
        </section>


      </main>
      <Footer></Footer>
    </div>

  );
}