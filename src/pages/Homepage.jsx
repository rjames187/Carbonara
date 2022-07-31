// import * as React from 'react';
// import Header from '../components/Header';
// import Footer from '../components/Footer';
// import AOS from 'aos';
// import 'aos/dist/aos.css'; // You can also use <link> for styles
// // ..

// export default function Homepage() {
//   return (
//     <div className="home-page-div">
//       <div className="head-font-div">
//         <h2 className="big-font font-head">HEALTH</h2>
//         <h2 className="big-font font-head">PURITY</h2>
//         <h2 className="big-font font-head">NATURE</h2>
//       </div>
//       <Header></Header>
//       <main>
//         <section className="main-page-container">
//           <section className="page-container">

//             <div data-aos="fade-right" data-aos-delay="10" data-aos-duration="1000" className="page-text-container">
//               <h1 className="home-title">For a better world, know your carbon footprint and reduce it</h1>
//               <a className="home-button">Reduce now</a>
//             </div>
//             <div className="page-image-container">
//               <img className="hero-image" src="src/images/homePage.jpg"></img>
//             </div>
//           </section>
//         </section>

//         <section className="main-page-container2">
//           <section className="page-container image-row-holder">
//             <h1 data-aos="fade-down" data-aolay="10"
//               data-aos-duration="1000" className="home-subtitle">For a future we imagine</h1>
//           </section>
//           <div className="image-row" id="image-row">
//             < img dataAos="fade-down" dataAosDelay="10" dataAosDuration="1000" className="collection-images" src="src/images/collection1.jpg"></img>
//             <img dataAos="fade-down" dataDosDelay="10" dataAosDuration="1000" className="collection-images" src="src/images/collection2.jpg"></img>
//             <img dataAos="fade-down" dataAosDelay="10" dataAosDuration="1000" className="collection-images" src="src/images/c ollection3.jpg"></img >
//             <img data-aos="fade-down" data-aos-delay="10"
//               // data-aos-duration="1000" className="collection-images" src=" src/images/collection          g"></img>
//             <i mg data-aos="fade-down" data-aos-delay="10"
//               data-aos-duration="1000" className="collection-images" src="src/images/collection5.jpg"></img>
//           </div>
//           <h2 className="big-font font-white home-big-2">NATURE</h2>
//           <div> </div>
//         </section>

//         <sectio n className="main-page-container" style={{ position: "fit-content" }}>
//           <div className="feature-for">
//             <h2 className="big-font feature-font          E</h2>
//             <h2 className="big-font feature-font-big">RICH</h2>
//         </div>
//         <section className="page-container flex-column">
//           <h1 style={{ color: "black", display: "block" }} className="home-subtitle">Best in class features</h1>

//           <div class="card-holder">
//             <div c lassName="cards">
//               <div className="feature-div">
//                 <img className="feature-image" src="src/images/features1.jpg"></img>
//               </div>
//               <div className="text-section">
//                 <h2 className="feature-heading" >Visually appealing</h2>
//                 <h3 className="feature-subheading" >Carbonara not only just provide date but also represents it in a visual way through graphs  easier to understand the data</h3>
//               </div>
//             </div>

//             <div className="cards card-reverse">
//               <div className="text-section">
//                 <h2 className="feature-heading" >Responsibility to nature</h2>
//                 <h3 className="feature-subheading" >Carbonara makes you responsible of your habits and routines and how positively or negatively they impact the environment</h3>
//               </div>
//               <div className="feature-div">
//                 <img className="feature-image" s /features2.jpg"></img>
//             </div>
//           </div>
//           <div className="cards" >
//             <div className="feature-div">
//               <img className="feature-image" src="src/images/features3.jpg"></img>
//             </div>
//             <div className="text-section">
//               <h2 className="feature-heading" >Accurate data</h2>
//               <h3 className="feature-subheading" >Carbonara provides you with most accurate and up to date data. We make sure that the data is only taken from trusted sources like the <a href="https://www.epa.gov/climateleaderssion-factors-hub">EPA</a></h3>
//             </div>
//                </div>
//           </div>
//         </section>
//       </section>


//       </main>
//       <div style={{ position: " relative" }}>
//          <Footer></Footer>
//     </div>
//     </div>
//   );
// }



import * as React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

export default function Homepage() {
  return (
    <div className="home-page-div">
      <div className="head-font-div">
        <h2 className="big-font font-head">HEALTH</h2>
        <h2 className="big-font font-head">PURITY</h2>
        <h2 className="big-font font-head">NATURE</h2>
      </div>
      <Header></Header>
      <main>
        <section className="main-page-container">
          <section className="page-container">

            <div data-aos-duration="1000"data-aos="fade-right"className="page-text-container">
              <h1 className="home-title">For a better world, know your carbon footprint and reduce it</h1>
              <a className="home-button">Reduce now</a>
            </div>
            <div className="page-image-container">
              <img className="hero-image" src="src/images/homePage.jpg"></img>
            </div>
          </section>
        </section>

        <section className="main-page-container2">
          <section className="page-container image-row-holder">
            <h1 data-aos-duration="1000"data-aos="fade-right"className="home-subtitle">For a future we imagine</h1>
          </section>
          <div className="image-row" id="image-row">
            <img data-aos-duration="1000"data-aos="fade-up"data-aos-delay="200"className="collection-images" src="src/images/collection1.jpg"></img>
            <img data-aos-duration="1000"data-aos="fade-up"data-aos-delay="300"className="collection-images" src="src/images/collection2.jpg"></img>
            <img data-aos-duration="1000"data-aos="fade-up"data-aos-delay="400"className="collection-images" src="src/images/collection3.jpg"></img>
            <img data-aos-duration="1000"data-aos="fade-up"data-aos-delay="500"className="collection-images" src="src/images/collection4.jpg"></img>
            <img data-aos-duration="1000"data-aos="fade-up"data-aos-delay="600"className="collection-images" src="src/images/collection5.jpg"></img>
          </div>
          <h2 className="big-font font-white home-big-2">NATURE</h2>
          <div></div>
        </section>

        <section className="main-page-container" style={{position: "relative", height:"fit-content"}}>
          <div className="feature-font-holder">
                    <h2 className="big-font feature-font-big">FEATURE</h2>
        <h2 className="big-font feature-font-big">RICH</h2>
            </div>
          <section className="page-container flex-column">
            <h1 style={{ color: "black", display: "block" }} className="home-subtitle">Best in class features</h1>

            <div className="card-holder">
              <div data-aos-duration="1000"data-aos="fade-right"data-aos-delay="200"className="cards">
                <div className="feature-div">
                  <img className="feature-image" src="src/images/features1.jpg"></img>
                </div>
                <div className="text-section">
                  <h2 className="feature-heading" >Visually appealing</h2>
                  <h3 className="feature-subheading" >Carbonara not only just provide date but also represents it in a visual way through graphs which makes it easier to understand the data</h3>
                </div>
              </div>

              
              <div data-aos-duration="1000"data-aos="fade-left"data-aos-delay="200"className="cards card-reverse">
                <div className="text-section">
                  <h2 className="feature-heading" >Responsibility to nature</h2>
                  <h3 className="feature-subheading" >Carbonara makes you responsible of your habits and routines and how positively or negatively they impact the environment</h3>
                </div>
                <div className="feature-div">
                  <img className="feature-image" src="src/images/features2.jpg"></img>
                </div>
              </div>
              
              <div data-aos-duration="1000"data-aos="fade-right"data-aos-delay="200"className="cards" >
                <div className="feature-div">
                  <img className="feature-image" src="src/images/features3.jpg"></img>
                </div>
                <div className="text-section">
                  <h2 className="feature-heading" >Accurate data</h2>
                  <h3 className="feature-subheading" >Carbonara provides you with most accurate and up to date data. We make sure that the data is only taken from trusted sources</h3>
                </div>
            </div>
            </div>
          </section>
        </section>


      </main>
      <div style={{position:"relative"}}>
      <Footer></Footer>
      </div>
    </div>
  );
}