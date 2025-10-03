import React from 'react';

const Tabs = () => (
  
<ul className="nav nav-tabs nav-tabs-primary mb-3" id="logTabs" role="tablist">
  {[
    { label: 'Call Logs', href: 'call-logs', id: 'call-log-tab' },
    { label: 'Complaints', href: 'complaints', id: 'complaints-tab' },
    { label: 'Anomalies', href: 'anomalies', id: 'anomalies-tab' },
    { label: 'Resolution', href: 'resolution', id: 'resolution-tab' },
    { label: 'Feedback', href: 'feedback', id: 'feedback-tab' },
  ].map((tab, i) => (
    <li key={i} className="nav-item" role="presentation">
      <a className={`nav-link ${i === 0 ? 'active' : ''}`} id={tab.id} href={`#${tab.href}`} aria-controls={tab.href} data-bs-toggle="tab" role="tab">{tab.label}</a>
    </li>
  ))}
</ul>
);

export default Tabs;
