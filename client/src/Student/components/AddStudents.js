import React, { Component } from 'react'

class AddStudents extends Component {
    render () {
        return (
            <div className="container-fullwidth">
                <div className="container">
                    <div className="py-5 text-center">
                        <img
                            className="d-block mx-auto mb-4"
                            src="http://www.resetyourbody.com/wp-content/uploads/COMPANY_LOGO/logo-default.png"
                            alt=""
                            width="72"
                            height="72"
                        />
                        <h2>Student Listing</h2>
                        <p className="lead">
                            Please enter all the details of student to register.
                        </p>
                    </div>

                    <div className="row">
                        <div className="col-md-2 order-md-1 mb-2"></div>
                        <div className="col-md-8 order-md-2">
                            <h4 className="mb-3">Student Info:</h4>
                            <div className="mb-3">
                                <label for="studentName">Student Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="studentName"
                                    placeholder=" Name"
                                />
                            </div>

                            <div className="mb-3">
                                <label for="class">Class</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="class"
                                    placeholder="Class"
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

export default AddStudents
