import React from 'react';

const Filters = ({setFilter}) => (
  <div class="d-flex justify-content-between align-items-center mb-3">
    <ul class="nav nav-tabs">
      <li class="nav-item"><button className="nav-link" onClick={() => setFilter('All')}>All</button></li>
      <li class="nav-item"><button className="nav-link" onClick={() => setFilter('Mobile')}>Mobile</button></li>
      <li class="nav-item"><button className="nav-link" onClick={() => setFilter('Internet')}>Internet</button></li>
    </ul>
    <div>
      <label>Timeframe</label>
      <select class="form-select w-auto">
        <option selected>Last 7 days</option>
        <option>Last 30 days</option>
        <option>Custom Range</option>
      </select>
    </div>
    
  </div>
);

export default Filters;
