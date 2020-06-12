import React, { Component } from "react";

class CreateMeetings extends Component {
  render() {
    return (
      <div>
        {/* <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <a class="navbar-brand" href="#">
            Navbar
          </a>

          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#basicExampleNav"
            aria-controls="basicExampleNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="basicExampleNav">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  Item1
                  <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Item2
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Item3
                </a>
              </li>
            </ul>

            <form class="form-inline">
              <div class="md-form my-0">
                <input
                  class="form-control mr-sm-2"
                  type="text"
                  placeholder="Search"
                  aria-label="Search"
                />
              </div>
            </form>
          </div>
        </nav> */}

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
            {/* <a class="py-2 d-none d-md-inline-block" href="#">
              Product
            </a> */}
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
            {/* <a class="py-2 d-none d-md-inline-block" href="#">
              Cart
            </a> */}
          </div>
        </nav>

        <div class="container">
          <div class="py-5 text-center">
            <img
              class="d-block mx-auto mb-4"
              src="http://www.resetyourbody.com/wp-content/uploads/COMPANY_LOGO/logo-default.png"
              alt=""
              width="72"
              height="72"
            />
            <h2>Creating Meeting</h2>
            <p class="lead">
              Please enter the all the details to create meeting.
            </p>
          </div>

          <div class="row">
            <div class="col-md-2 order-md-1 mb-2"></div>
            <div class="col-md-8 order-md-2">
              <h4 class="mb-3">Create Metting</h4>
              <div class="mb-3">
                <label for="classroomid">Classroom Id</label>
                <input
                  type="text"
                  class="form-control"
                  id="classroomid"
                  placeholder=" class Id"
                  value=""
                  required=""
                />
                <div class="invalid-feedback">
                  Valid class number is required.
                </div>
              </div>

              <div class="mb-3">
                <label for="Teacherid">Teacher Id</label>
                <input
                  type="text"
                  class="form-control"
                  id="Teacherid"
                  placeholder="Teacher Id"
                  value=""
                  required=""
                />
                <div class="invalid-feedback">
                  Valid Teacher No. is required.
                </div>
              </div>

              <div class="mb-3">
                <label for="schoolInfo">schoolInfo</label>
                <input
                  type="text"
                  class="form-control"
                  id="schoolInfo"
                  placeholder="123 main street"
                  value=""
                  required=""
                />
                <div class="invalid-feedback">place address</div>
              </div>

              <div class="mb-3">
                <label for="mettinglink">Metting link</label>
                <input
                  type="text"
                  class="form-control"
                  id="meetinglink"
                  placeholder="mettinglink"
                  required=""
                />
                <div class="invalid-feedback">LInk</div>
              </div>
              <hr class="mb-4" />
              <button class="btn btn-primary btn-lg btn-block" type="submit">
                Save
              </button>
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
      </div>
    );
  }
}

export default CreateMeetings;
