import React, { useState, useEffect } from 'react';
import './calculate.css';
import EMISSIONS_FACTORS from '../model';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

ChartJS.register(ArcElement, Tooltip, Legend);


export default function Calculate() {
  var dom_ids = 1;

  function pushEf(cat, factor) {
    let tCopy = { ...trip };
    tCopy[cat].push(factor);
    setTrip(tCopy);
  }

  function getEf(cat, name) {
    let ob = EMISSIONS_FACTORS[cat];
    for (let i of ob) {
      if (i.name === name) {
        return i.ef;
      }
    }
    throw `emissions factor ${name} doesn't exist`;
  }

  const [trip, setTrip] = useState({
    transport: [

    ],
    bed: [

    ],
    fun: [

    ],
  });

  const [chartData, setChartData] = useState({
    labels: ["Transportation", "Hotels", "Recreation"],
    datasets: [{
      label: "CO2e emissions in kg",
      data: [0, 0, 0],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'],
    }],
  });

  const [inputVals, setInputVals] = useState({
    "rt-dist": 0,
    "rt-dropdown": "automobile",
    "bd-nights": 0,
    "bd-people": 0,
    "rec-dropdown": "Amusement Park",
    "rec-usd": 0,
  });

  const [totals, setTotals] = useState({
    transport: 0,
    bed: 0,
    fun: 0,
  });
  const [bigTotal, setBigTotal] = useState(0);

  // for number inputs
  function ivOnChange(e) {
    if (/^\d+$/.test(e.target.value)) {
      let iv = inputVals;
      iv[e.target.id] = e.target.value;
      setInputVals(iv);
    }
  };

  // for non-number inputs
  function ddOnChange(e) {
    let iv = inputVals;
    iv[e.target.id] = e.target.value;
    setInputVals(iv);

  }

  // road travel submit
  function rtSubmit(e) {
    e.preventDefault();
    const efName = inputVals["rt-dropdown"];
    const efNum = getEf("transport", efName);
    const carb = inputVals["rt-dist"] * efNum;
    const co2e = `${carb} kg CO2e`;
    dom_ids += 1;
    const factor = { id: dom_ids, val: `${efName} ${co2e}`, carb: carb };
    pushEf("transport", { ...factor });
  }

  // recreation submit
  function recSubmit(e) {
    e.preventDefault();
    const efName = inputVals["rec-dropdown"];
    const efNum = getEf("fun", efName);
    const carb = inputVals["rec-usd"] * efNum;
    const co2e = `${carb} kg CO2e`;
    dom_ids += 1;
    const factor = { id: dom_ids, val: `${efName} ${co2e}`, carb: carb };
    pushEf("fun", { ...factor });
  }

  // hotel submit
  function hotSubmit(e) {
    e.preventDefault();
    const ppl = inputVals["bd-people"];
    const nts = inputVals["bd-nights"];
    const efNum = getEf("bed", "Hotel");
    const carb = efNum * nts * ppl;
    const co2e = `${carb} kg CO2e`;
    dom_ids += 1;
    const factor = { id: dom_ids, val: `Hotel stay ${co2e} kg CO2e`, carb: carb };
    pushEf("bed", { ...factor });

  }

  // submit for results and graphs
  function bigSubmit(e) {
    e.preventDefault();
    // sum each individual category
    for (const key of Object.keys(trip)) {
      console.log(key);
      const sum = trip[key].map((i) => i.carb).reduce((prev, cur) => prev + cur, 0);
      setTotals(prevState => ({
        ...prevState,
        [key]: sum,
      }));
    }
    // find total sum
    const sum = totals.transport + totals.bed + totals.fun;
    setTotals(prevState => ({
      ...prevState,
      total: sum,
    }));
    // reset form inputs
    e.target.reset();
  }

  //keeps big total updated
  useEffect(() => {
    // set big total
    const sum = totals.transport + totals.bed + totals.fun;
    setBigTotal(sum)
    // clear data
    const clearedTrip = {
      transport: [], bed: [], fun: [],
    };
    setTrip(clearedTrip);
    const clearedInputVals = {
      "rt-dist": 0,
      "rt-dropdown": "automobile",
      "bd-nights": 0,
      "bd-people": 0,
      "rec-dropdown": "Amusement Park",
      "rec-usd": 0,
    };
    setInputVals(clearedInputVals);
    console.log(inputVals);
  }, [totals]);

  return (
    <div className="parent-div">
      <Header></Header>
      <main>
        <div className="page-container">

          { /* please dont delete this! <div data-aos-duration="1000"data-aos="fade-up" >TESTING SOMETHING</div>*/}
          <section className="input-section">
            <h1 data-aos="fade-right" data-aos-delay="50"
              data-aos-duration="1000" className="calculate-title">Calculate your vacation Carbon Footprint</h1>

            <form onSubmit={bigSubmit} >
              <section data-aos="fade-left" data-aos-delay="150"
                data-aos-duration="1000" class="calculate-input-card">
                <h2>Road Travel</h2>
                <div className="inputs-holder">
                  <div class="input-block">
                    <div className="input-row">
                      <label className="subtitle-input" htmlFor="rt-dropdown">Vehicle selection</label>


                      <select className="user-input-dropdown" onChange={ddOnChange} id="rt-dropdown">
                        {EMISSIONS_FACTORS.transport.map(i =>
                          <option key={i.name} value={i.name}>{i.name}</option>
                        )}
                      </select>
                    </div>
                  </div>
                  <div class="input-block">
                    <label className="subtitle-input" htmlFor="rt-dist">Distance (km)</label>
                    <input onChange={ivOnChange} id="rt-dist" />
                    <button onClick={rtSubmit}>Add</button>

                  </div>
                </div>
                {trip.transport[0] !== undefined &&
                  <ol className="ef-list">
                    {trip.transport.map((i) => {
                      return (<li key={i.id}>{i.val}</li>);
                    })}
                  </ol>}
              </section>

              <section data-aos="fade-right" data-aos-delay="250"
                data-aos-duration="1000" class="calculate-input-card">
                <h2>A place to sleep</h2>
                <div class="inputs-holder">
                  <div class="input-block">

                    <label className="subtitle-input" htmlFor="bd-nights"># of Nights</label>
                    <input onChange={ivOnChange} id="bd-nights" />
                  </div>
                  <div class="input-block">
                    <label className="subtitle-input" htmlFor="bd-people"># of People</label>
                    <input onChange={ivOnChange} id="bd-people" />
                    <button onClick={hotSubmit}>Add</button>
                  </div>
                </div>
                {trip.bed[0] !== undefined  &&
                    <ol className="ef-list">
                      {trip.bed.map((i) => {
                        return (<li key={i.id}>{i.val}</li>);
                      })}
                    </ol>
                }
              </section>
              <section data-aos="fade-left" data-aos-delay="150"
                data-aos-duration="1000" class="calculate-input-card">
                <h2>Recreational Activities</h2>
                <div className="inputs-holder">
                  <div className="input-block">
                    <div className="row">
                    <label className="subtitle-input" className="subtitle-input" htmlFor="rec-dropdown">Activity selection</label>
                    <select className="user-input-dropdown" onChange={ddOnChange} id="rec-dropdown">
                      {EMISSIONS_FACTORS.fun.map(i =>
                        <option key={i.name} value={i.name}>{i.name}</option>
                      )}
                    </select>
                    <div />
                    <div id="ml-0" className="input-block">
                      <label className="subtitle-input" htmlFor="rec-usd">Expenses (USD)</label>
                      <input onChange={ivOnChange} id="rec-usd" />
                      <button onClick={recSubmit}>Add</button>
                    </div>
                    </div>

                    {trip.fun[0] !== undefined  &&
                    <ol className="ef-list">
                      {trip.fun.map((i) => {
                        return (<li key={i.id}>{i.val}</li>);
                      })}
                    </ol>}
                  </div>
                </div>
              </section>
              <a href="#show-results">
                <button className="calculate-button" type="submit">Calculate total footprint</button></a>
            </form>
          </section>
          <div data-aos="fade-left" data-aos-delay="150"
            data-aos-duration="1000" className="page-image-container">
            <img className="hero-image" src="src/images/homePage.jpg"></img>
          </div>
        </div>
        <hr></hr>
        <section id="results-section">
          <div class="results-data">
            <h1 data-aos="fade-down" data-aos-delay="0"
              data-aos-duration="1000">Your total emissions</h1>

            <p data-aos="fade-left" data-aos-delay="50"
              data-aos-duration="1000">Your vacation carbon footprint is <span class="red-text"> {bigTotal} kg CO2</span></p>
            <br></br>
            <p data-aos="fade-right" data-aos-delay="50"
              data-aos-duration="1000">It would take <span class="green-text">{Math.round(bigTotal / 21)}</span> fully-grown trees to absorb that much CO2 in <span class="green-text">1 year</span></p>
            {/*   <div id="chart-container">
            <Pie data={chartData} />
          </div>*/}
          </div>
        </section>


      </main>
      <div style={{ position: "relative" }}>
        <Footer id="show-results"></Footer>
      </div>
    </div>
  );
}