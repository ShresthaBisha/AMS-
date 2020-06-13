import React, { Component } from 'react'

class CreateMeetings extends Component {
    render () {
        return (
            <div>
                <div className="container">
                    <div className="py-5 text-center">
                        <img
                            className="d-block mx-auto mb-4"
                            src="http://www.resetyourbody.com/wp-content/uploads/COMPANY_LOGO/logo-default.png"
                            alt=""
                            width="72"
                            height="72"
                        />
                        <h2>Creating Meeting</h2>
                        <p className="lead">Please enter all the details to create meeting.</p>
                    </div>

                    <div className="row">
                        <div className="col-md-2 order-md-1 mb-2"></div>
                        <div className="col-md-8 order-md-2">
                            <h4 className="mb-3">Create Meeting</h4>
                            <div className="mb-3">
                                <label for="classroomid">Classroom Id</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="classroomid"
                                    placeholder=" class Id"
                                />
                            </div>

                            <div className="mb-3">
                                <label for="Teacherid">Teacher Id</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="Teacherid"
                                    placeholder="Teacher Id"
                                />
                            </div>

                            <div className="mb-3">
                                <label for="scheduleInfo">ScheduleInfo</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="schoolInfo"
                                    placeholder="ScheduleInfo"
                                />
                            </div>

                            <div className="mb-3">
                                <label for="meetinglink">Meeting link</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="meetinglink"
                                    placeholder="Paste the link here.."
                                />
                            </div>
                            <hr className="mb-4"/>
                            <button className="btn btn-primary btn-lg btn-block" type="submit">
                                Create
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default CreateMeetings
