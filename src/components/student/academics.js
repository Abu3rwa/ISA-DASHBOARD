import { List, Typography } from "@material-ui/core";
import React from "react";
import "./academics.css";
function Academics() {
  return (
    <dive>
      <List>
        <div class="attendance-card">
          <div class="student-info">
            <h2 class="card-label">Attendance</h2>
          </div>
          <div class="attendance-details">
            <div class="attendance-item">
              <p class="attendance-label">Present</p>
              <p class="attendance-value">25</p>
            </div>
            <div class="attendance-item">
              <p class="attendance-label">Absent</p>
              <p class="attendance-value">5</p>
            </div>
          </div>
        </div>
      </List>
    </dive>
  );
}

export default Academics;
