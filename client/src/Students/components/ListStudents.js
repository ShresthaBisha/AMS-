import React, { Component } from "react";

class ListStudents extends Component {
  render() {
    return (
      <div className="container">
        <nav class="navbar navbar-light bg-light">
          <span class="navbar-brand mb-0 h1">
            <h1>List of Students</h1>
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
                  placeholder="Search Students"
                />
              </div>
              <br /> <br />
              <table class="table table-hover" id="dev-table">
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>User</th>
                    <th>Classroom</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>ABC</td>
                    <td>....</td>
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

export default ListStudents;
