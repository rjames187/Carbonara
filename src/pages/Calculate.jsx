import React, { useState, useEffect } from 'react';
import './calculate.css';
import EMISSIONS_FACTORS from '../model';
import Header from '../components/Header';
import Footer from '../components/Footer';

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
      { id: "fart", val: "placeholder" },
    ],
    bed: [
      { id: 0, val: "placeholder" },
    ],
    fun: [
      { id: 4, val: "placeholder" },
    ],
  });

  const [inputVals, setInputVals] = useState({
    "rt-dist": 0,
    "rt-dropdown": "automobile",
    "bd-nights": 0,
    "bd-people": 0,
    "rec-dropdown": "Amusement Park",
    "rec-usd": 0,
  });

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
    const co2e = `${inputVals["rt-dist"] * efNum} kg CO2e`;
    dom_ids += 1;
    const factor = { id: dom_ids, val: `${efName} ${co2e}` };
    pushEf("transport", { ...factor });
  }

  // recreation submit
  function recSubmit(e) {
    e.preventDefault();
    const efName = inputVals["rec-dropdown"];
    const efNum = getEf("fun", efName);
    const co2e = `${inputVals["rec-usd"] * efNum} kg CO2e`;
    dom_ids += 1;
    const factor = { id: dom_ids, val: `${efName} ${co2e}` };
    pushEf("fun", { ...factor });
  }

  // hotel submit
  function hotSubmit(e) {
    e.preventDefault();
    const ppl = inputVals["bd-people"];
    const nts = inputVals["bd-nights"];
    const efNum = getEf("bed", "Hotel");
    const co2e = `${efNum * nts * ppl} kg CO2e`;
    dom_ids += 1;
    const factor = { id: dom_ids, val: `Hotel stay ${co2e} kg CO2e` };
    pushEf("bed", { ...factor });

  }

  return (
    <div className="parent-div">
      <Header></Header>
      <main>
        <section className="input-section">
          <h1 className="calculate-title">Calculate your vacation footprint</h1>
          <form>
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
        </section>
      </main>
      <Footer></Footer>
    </div>
  );
}