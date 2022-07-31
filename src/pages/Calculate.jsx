import React, { useState, useEffect } from 'react';
import './calculate.css';
import EMISSIONS_FACTORS from '../model';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

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
    console.log(totals);
  }

  //keeps big total updated
  useEffect(() => {
    const sum = totals.transport + totals.bed + totals.fun;
    setBigTotal(sum)
  }, [totals]);

  return (
    <div className="parent-div">
      <Header></Header>
      <main>
        <section className="input-section">
          <h1 className="calculate-title">Calculate your vacation footprint</h1>
          <form onSubmit={bigSubmit} >
            <h2>Road Travel</h2>
            <div className="input-row">
              <label className="subtitle-input" htmlFor="rt-dropdown">Vehicle selection</label>
              <select className="user-input-dropdown" onChange={ddOnChange} id="rt-dropdown">
                {EMISSIONS_FACTORS.transport.map(i =>
                  <option key={i.name} value={i.name}>{i.name}</option>
                )}
              </select>
              <label htmlFor="rt-dist">Distance (km)</label>
              <input onChange={ivOnChange} id="rt-dist" />
              <button onClick={rtSubmit}>Add</button>
            </div>
            <ol className="ef-list">
              {trip.transport.map((i) => {
                return (<li key={i.id}>{i.val}</li>);
              })}
            </ol>
            <h2>A place to sleep</h2>
            <h3>Hotel stay</h3>
            <div className="input-row">
              <label htmlFor="bd-nights"># of Nights</label>
              <input onChange={ivOnChange} id="bd-nights" />
              <label htmlFor="bd-people"># of People</label>
              <input onChange={ivOnChange} id="bd-people" />
              <button onClick={hotSubmit}>Add</button>
            </div>
            <ol className="ef-list">
              {trip.bed.map((i) => {
                return (<li key={i.id}>{i.val}</li>);
              })}
            </ol>
            <h2>Recreational Activities</h2>
            <div className="input-row">
              <label className="subtitle-input" htmlFor="rec-dropdown">Activity selection</label>
              <select className="user-input-dropdown" onChange={ddOnChange} id="rec-dropdown">
                {EMISSIONS_FACTORS.fun.map(i =>
                  <option key={i.name} value={i.name}>{i.name}</option>
                )}
              </select>
              <label htmlFor="rec-usd">Expenses (USD)</label>
              <input onChange={ivOnChange} id="rec-usd" />
              <button onClick={recSubmit}>Add</button>
            </div>
            <ol className="ef-list">
              {trip.fun.map((i) => {
                return (<li key={i.id}>{i.val}</li>);
              })}
            </ol>
            <button type="submit">Calculate total footprint</button>
          </form>
        </section>
        <hr></hr>
        <section>
          <h2>Results</h2>
          <p>Your vacation carbon footprint is {bigTotal} kg CO2e</p>
          <p>It would take {bigTotal / 21} fully-grown trees to absorb that much CO2e in 1 year</p>
          <div id="chart-container">
            <Pie data={chartData} />
          </div>
        </section>


      </main>
      <Footer></Footer>
    </div>
  );
}