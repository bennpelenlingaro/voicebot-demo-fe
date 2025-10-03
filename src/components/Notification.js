import React from 'react';

const Notification = () => (
  <div class="alert alert-warning d-flex justify-content-between align-items-center">
      <span><strong>Anomaly detected:</strong> Complaint volume increased by 45% in the last 30 days.</span>
      <a href="#">View details</a>
    </div>
);

export default Notification;
