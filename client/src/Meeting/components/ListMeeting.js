import React, { Component } from "react";
import { connect } from "react-redux";

class ListMeeting extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <nav class="navbar navbar-light bg-light">
          <span class="navbar-brand mb-0 h1">
            <h1>List of Meetings</h1>
          </span>
        </nav>
        <br /> <br />
        <div class="row">
          <div class="col-md-6">
            <div class="panel panel-primary">
              <div class="panel-body">
                <input
                  type="text"
                  class="form-control"
                  id="dev-table-filter"
                  data-action="filter"
                  data-filters="#dev-table"
                  placeholder="Search Meeting"
                />
              </div>
              <br /> <br />
              <table class="table table-hover" id="dev-table">
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>Classroom ID</th>
                    <th>Teacher ID</th>
                    <th>ScheduleInfo</th>
                    <th>MeetingLink</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>101</td>
                    <td>8</td>
                    <td>A</td>
                    <td>Desc</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ListMeeting;
