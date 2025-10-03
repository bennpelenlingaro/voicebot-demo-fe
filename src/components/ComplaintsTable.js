import React from 'react';

const ComplaintsTable =({complaintData}) => (
    <div class="tab-pane" id="complaints" aria-labelledby="complaints-tab">
      <div class="table-responsive">
        <table class="table table-bordered table-hover">
          <thead class="table-light">
            <tr>
              <th>Complaint ID</th>
              <th>Topic</th>
              <th>Opening date</th>
              <th>Priority</th>
              <th>Status</th>
              <th>Assigned to</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {complaintData.map((row, i) => (
              <tr key={i}>
                <td>{row.id}</td>
                <td>{row.topic}</td>
                <td>{row.openingDate}</td>
                <td>{row.priority}</td>
                <td>{row.status}</td>
                <td>{row.assignedTo}</td>
                <td><button>{row.action}</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
);
export default ComplaintsTable;

