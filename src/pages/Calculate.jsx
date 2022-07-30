import React from 'react';
import './calculate.css';
import EMISSIONS_FACTORS from '../../model';

export default function Calculate() {

  return (
    <div class="parent-div">
      <main>
        <section class="input-section">
          <h1>Calculate your footprint</h1>
          <form>
            <div class="input row">
            </div>
            <div class="ef-list">
            </div>
          </form>
        </section>
        <section></section>
      </main>
    </div>
  );
}