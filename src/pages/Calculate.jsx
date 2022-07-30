import React, { useState, useEffect } from 'react';
import './calculate.css';
import EMISSIONS_FACTORS from '../model';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Calculate() {

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
    bed: [],
    fun: [],
  });

  const [inputVals, setInputVals] = useState({
    "rt-dist": 0,
    "rt-dropdown": "automobile",
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

  function rtSubmit(e) {
    e.preventDefault();
    const efName = inputVals["rt-dropdown"];
    const efNum = getEf("transport", efName);
    const co2e = `${inputVals["rt-dist"] * efNum} kg CO2e`;
    const factor = { id: efName, val: `${efName} ${co2e}` };
    let tCopy = { ...trip };
    tCopy.transport.push(factor);
    setTrip(tCopy);
    console.log(trip);
  }

  return (
    <div className="parent-div">
      <Header></Header>
      <main>
        <section className="input-section">
          <h1 class="calculate-title">Calculate your footprint</h1>
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
                console.log(i);
                return (<li key={i.id}>{i.val}</li>);
              })}
            </ol>
          </form>
        </section>
        <section></section>
      </main>
      <Footer></Footer>
    </div>
  );
}