import React, { Component } from "react";

class AddStudents extends Component {
  render() {
    return (
      <div className="container-fullwidth">
        <nav class="navbar-fullwidth navbar-fixed-top navbar-dark bg-dark">
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

        <br />
        <br />
        <div className="row" style={{ margin: "0% 0% 0% 25%" }}>
          <div className="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
            {/* <h1>Create Classroom</h1>
                <hr />
                <br />
                <br /> */}
            <div className="form-group">
              <label for="user">User</label>
              <input type="text" id="user" class="form-control" />
            </div>
            <br />
            <br />
            <div className="form-group">
              <label for="classroom">Classroom</label>
              <input type="text" id="teacherId" class="form-control" />
            </div>
          </div>
        </div>
        {/* <div class="row">
          <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3"></div>
        </div> */}
        <hr />
        <div class="row" style={{ margin: "0% 0% 0% 25%" }}>
          <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
            <button class="btn btn-primary">Add Students</button>
          </div>
        </div>
      </div>
    );
  }
}

export default AddStudents;
