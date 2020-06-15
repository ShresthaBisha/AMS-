import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addClassroomAction } from '../actions'

class CreateClassroom extends Component {
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
                        <h2>Creating Classroom</h2>
                        <p className="lead">
                            Please enter keyword related with classroom for searching.
                        </p>
                    </div>

                    <div className="row">
                        <div className="col-md-2 order-md-1 mb-2"></div>
                        <div className="col-md-8 order-md-2">
                            <h4 className="mb-3">
                                <u>Info for creating Classroom</u>
                            </h4>
                            <div className="mb-3">
                                <label for="teacherId">Teacher Id</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="teacherId"
                                    placeholder=" TeacherID"
                                />
                            </div>

                            <div className="mb-3">
                                <label for="grade">Grade</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="grade"
                                    placeholder="Grade"
                                />
                            </div>

                            <div className="mb-3">
                                <label for="Section">Section</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="Section"
                                    placeholder="Section"
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

export default CreateClassroom
