import React, { Component } from "react";

class CreateMeetings extends Component {
  render() {
    return (
      <div className="container">
        <nav class="navbar navbar-light bg-light">
          <span class="navbar-brand mb-0 h1">
            <h1>Create Meeting.</h1>
          </span>
        </nav>
        <br />
        <br />
        <div className="row">
          <div className="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
            {/* <h1>Create Classroom</h1>
            <hr />
            <br />
            <br /> */}
            <div className="form-group">
              <label for="classroomId">ClassroomId</label>
              <input type="text" id="classroomId" class="form-control" />
            </div>
            <br />
            <br />
            <div className="form-group">
              <label for="teacherId">TeacherId</label>
              <input type="text" id="teacherId" class="form-control" />
            </div>
            <br />
            <br />
            <div className="form-group">
              <label for="scheduleInfo">ScheduleInfo</label>
              <input type="text" id="scheduleInfo" class="form-control" />
            </div>
            <br />
            <br />
            <div className="form-group">
              <label for="meetingLink">MeetingLink</label>
              <input type="text" id="meetingLink" class="form-control" />
            </div>
          </div>
        </div>
        {/* <div class="row">
          <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3"></div>
        </div> */}
        <hr />
        <div class="row">
          <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
            <button class="btn btn-primary">Create Meeting!</button>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateMeetings;
