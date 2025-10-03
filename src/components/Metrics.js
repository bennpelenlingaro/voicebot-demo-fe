import React from 'react';

const metrics = [
  { label: 'Avg. Time', value: '21 Minutes', change: '+2%' },
  { label: 'Resolution Rate', value: '78%', change: '+3%' },
  { label: 'Avg. Rate', value: '4.3 VoiceBot / 4.8 Human' },
  { label: 'Complaints', value: '12', change: '+2%' },
  { label: 'Calls', value: '32', change: '+2%' },
  { label: 'Mobile Calls', value: '15', change: '+2%' },
];

const Metrics = () => (

  
  <div class="row text-center mb-4">
    {metrics.map((m, i) => (
      <div key={i} class="col-md-2">
        <div class="card">
          <div class="card-body">
            <h5>{m.label}</h5>
            <p>{m.value}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default Metrics;
