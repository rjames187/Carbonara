import React from 'react';
import './calculate.css';
import EMISSIONS_FACTORS from '../model';

export default function Calculate() {
  
  
  
  return (
    <div class="parent-div">
      <main>
        <section className="input-section">
          <h1>Calculate your footprint</h1>
          <form>
            <h2>Road Travel</h2>
            <div className="input row">
              <label for="rt-dropdown">Vehicle selection</label>
              <select id="rt-dropdown">
                {EMISSIONS_FACTORS.transport.map(i => 
                  <option value={i.name}>{i.name}</option>
                )}
              </select>
            </div>
            <div className="ef-list">
            </div>
          </form>
        </section>
        <section></section>
      </main>
    </div>
  );
}