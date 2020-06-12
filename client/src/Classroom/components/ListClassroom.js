import React, { Component } from "react";

class ListClassroom extends Component {
  state = {};
  render() {
    return (
      <div class="container-fullwidth">
        <nav class="navbar-fullwidth navbar-dark bg-dark">
          <div class="container d-flex flex-column flex-md-row justify-content-between">
            <a class="py-2" href="#" aria-label="Product">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="d-block mx-auto"
                role="img"
                viewBox="0 0 24 24"
                focusable="false"
              >
                <title>Product</title>
                <circle cx="12" cy="12" r="10" />
                <path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94" />
              </svg>
            </a>
            <a class="py-2 d-none d-md-inline-block" href="#">
              Tour
            </a>
            <a class="py-2 d-none d-md-inline-block" href="#">
              Features
            </a>
            <a class="py-2 d-none d-md-inline-block" href="#">
              Enterprise
            </a>
            <a class="py-2 d-none d-md-inline-block" href="#">
              Support
            </a>
            <a class="py-2 d-none d-md-inline-block" href="#">
              Pricing
            </a>
          </div>
        </nav>
        <div class="py-5 text-center">
          <img
            class="d-block mx-auto mb-4"
            src="http://www.resetyourbody.com/wp-content/uploads/COMPANY_LOGO/logo-default.png"
            alt=""
            width="72"
            height="72"
          />
          <h2>List of all classrooms.</h2>
          <p class="lead">Search using keyboard for classroom below.</p>
        </div>
        <div class="row" style={{ margin: "0% 0% 0% 25%" }}>
          <div class="col-md-6">
            <div class="panel panel-primary">
              <div class="panel-body">
                <input
                  type="text"
                  class="form-control"
                  id="dev-table-filter"
                  data-action="filter"
                  data-filters="#dev-table"
                  placeholder="Search Classroom"
                />
              </div>
              <br /> <br />
              <div class="row">
                <div class="col-md-2 order-md-1 mb-2"></div>
                <div class="col-md-12 order-md-2">
                  <h4 class="mb-3">Classrooms' list</h4>
                </div>
              </div>
              <table class="table table-hover" id="dev-table">
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>Teacher ID</th>
                    <th>Grade</th>
                    <th>Section</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>101</td>
                    <td>8</td>
                    <td>A</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <footer class="my-5 pt-5 text-muted text-center text-small">
          <p class="mb-1">© 2020 EverestWalk.PVT.LTD</p>
          <ul class="list-inline">
            <li class="list-inline-item">
              <a href="#">Privacy</a>
            </li>
            <li class="list-inline-item">
              <a href="#">Terms</a>
            </li>
            <li class="list-inline-item">
              <a href="#">Support</a>
            </li>
          </ul>
        </footer>
      </div>
    );
  }
}

export default ListClassroom;
