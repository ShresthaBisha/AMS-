import React, { Component } from "react";
import { connect } from "react-redux";
import { addClassroomAction } from "../actions";

class ListClassroom extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <nav class="navbar navbar-light bg-light">
          <span class="navbar-brand mb-0 h1">
            <h1>List of Classroom</h1>
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
                  placeholder="search Classroom"
                />
              </div>
              <br /> <br />
              <table class="table table-hover" id="dev-table">
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>Teacher ID</th>
                    <th>Grade</th>
                    <th>Section</th>
                    <th>Description</th>
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

export default ListClassroom;
