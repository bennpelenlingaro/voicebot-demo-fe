import React, { useState } from 'react';
import Header from './components/Header';
import Metrics from './components/Metrics';
import Filters from './components/Filters';
import Tabs from './components/Tabs';
import CallLogTable from './components/CallLogTable';
import ComplaintsTable from './components/ComplaintsTable';
import Notification from './components/Notification';
import './styles.css';

function App() {

  const callLogData = [
    {
      id: 'CL-0992',
      timestamp: '2025-10-01 14:32',
      type: 'Mobile',
      topic: 'Billing',
      duration: '12 min',
      outcome: 'Resolved',
      rate: '4.5',
      action: 'View',
    },
    {
      id: 'CL-0992',
      timestamp: '2025-10-04 10:32',
      type: 'Internet',
      topic: 'Connection drop',
      duration: '8 min',
      outcome: 'Escalated',
      rate: '3.8',
      action: 'View',
    },
    {
      id: 'CL-0955',
      timestamp: '2025-10-04 10:32',
      type: 'Internet',
      topic: 'Connection drop',
      duration: '12 min',
      outcome: 'Resolved',
      rate: '4.4',
      action: 'View',
    },
  ];

  const complaintData = [
    {
      id: 'CL-0992',
      topic: 'Return',
      openingDate: '12.09.2025',
      priority: 'High',
      status: 'Open',
      assignedTo: 'John Pasternak',
      action: 'View',
    },
    {
      id: 'EL-0992',
      topic: 'Making Order',
      openingDate: '12.09.2025',
      priority: 'Low',
      status: 'Open',
      assignedTo: 'John Pasternak',
      action: 'View',
    },
    {
      id: 'WL-0992',
      topic: 'Order change',
      openingDate: '12.09.2025',
      priority: 'Low',
      status: 'Open',
      assignedTo: 'John Pasternak',
      action: 'View',
    },
    {
      id: 'CL-0992',
      topic: 'Return',
      openingDate: '12.09.2025',
      priority: 'High',
      status: 'Open',
      assignedTo: 'John Pasternak',
      action: 'View',
    },
    {
      id: 'CL-0992',
      topic: 'Return',
      openingDate: '12.09.2025',
      priority: 'High',
      status: 'Open',
      assignedTo: 'John Pasternak',
      action: 'View',
    },
    {
      id: 'CL-0992',
      topic: 'Return',
      openingDate: '12.09.2025',
      priority: 'High',
      status: 'Open',
      assignedTo: 'John Pasternak',
      action: 'View',
    },
  ];

  
  const [filter, setFilter] = useState('All');

  const filteredData = filter === 'All'
    ? callLogData
    : callLogData.filter(row => row.type === filter);

  return (

    <div class="container-fluid p-4 sidepanel">
      <div class="row">
        
        {/* <div class="side-panel">

          <img src="https://via.placeholder"></img>
          <button class="btn btn-outline-light nav-button">Dashboard</button>
          <button class="btn btn-outline-light nav-button">Calls</button>
          <button class="btn btn-outline-light nav-button">Text</button>

          <button class="btn btn-outline-light agent-button">Agent</button>
        </div> */}


        <div class="col-md-1 bg-dark text-white vh-100 p-3 mt-10">
            
            <ul class="nav flex-column">
                <li class="nav-item mb-2 d-inline-flex flex-column align-items-center">
                  <div class="bg-secondary rounded sidepanel-item"></div>
                  <div><a href="#" class="nav-link text-white"></a></div>
                </li>

                <li class="nav-item mb-2 d-inline-flex flex-column align-items-center">
                  <div class="bg-secondary rounded sidepanel-item"></div>
                  <div><a href="#" class="nav-link text-white">Dashboard</a></div>
                </li>
                <li class="nav-item mb-2 d-inline-flex flex-column align-items-center">
                  <div class="bg-secondary rounded sidepanel-item"></div>
                  <div><a href="#" class="nav-link text-white">Calls</a></div>
                </li>
                <li class="nav-item mb-2 d-inline-flex flex-column align-items-center">
                  <div class="bg-secondary rounded sidepanel-item"></div>
                  <div><a href="#" class="nav-link text-white">Text</a></div>
                </li>
                <li class="nav-item mb-2 d-inline-flex flex-column align-items-center agent-button">
                  <div class="bg-secondary rounded sidepanel-item"></div>
                  <div><a href="#" class="nav-link text-white">Agent</a></div>
                </li>
            </ul>
        </div>
        <div class="col-md-10 p-4">
          <Header />
          <Notification />
          <Filters setFilter={setFilter}/>
          <Metrics />
          <Tabs />
          
          <div class="tab-content">
            <CallLogTable data={filteredData}/>
            <ComplaintsTable complaintData={complaintData}/>
            <div class="tab-pane" id="anomalies" aria-labelledby="anomalies-tab">
            </div>
            <div class="tab-pane" id="resolution" aria-labelledby="resolution-tab">
            </div>
            <div class="tab-pane" id="feedback" aria-labelledby="feedback-tab">
            </div>
          </div>
          
        </div>
       
      
      </div>
    </div>
    
  );
}

export default App;
