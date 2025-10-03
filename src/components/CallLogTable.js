import React from 'react';

const CallLogTable = ({data}) => (

  <div class="tab-pane fade active show" id="call-logs" aria-labelledby="call-log-tab">
      <div class="table-responsive">
        <table class="table table-bordered table-hover">
          <thead class="table-light">
            <tr>
              <th>Call ID</th>
              <th>Timestamp</th>
              <th>Type</th>
              <th>Topic</th>
              <th>Duration</th>
              <th>Outcome</th>
              <th>Rate</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr key={i}>
                <td>{row.id}</td>
                <td>{row.timestamp}</td>
                <td>{row.type}</td>
                <td>{row.topic}</td>
                <td>{row.duration}</td>
                <td>{row.outcome}</td>
                <td>{row.rate}</td>
                <td><button>{row.action}</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

 
);

export default CallLogTable;
