import React, { Component } from 'react'
import MyInput from 'my-input-react'

class AddStudents extends Component {

    state = {
        localStore: {}

    }

    handler (me, value) {
        const localStore = { ...this.state.localStore }
        localStore[me] = value

        this.setState({ localStore })
    }

    createStudent () {
        console.log('log student', this.state.localStore)
    }

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
                        <h2>Registering Students</h2>
                        <p className="lead">
                            Please enter all the details of student to register.
                        </p>
                    </div>

                    <div className="row">
                        <div className="col-md-2 order-md-1 mb-2"></div>
                        <div className="col-md-8 order-md-2">
                            <h4 className="mb-3">Student Info:</h4>
                            <br/>
                            <label htmlFor="studentname">Student Name</label>
                            <MyInput
                                me='studentname'
                                handler={this.handler.bind(this)}
                                placeHolder='Enter name of student'
                                className="form-control mb-3"/>

                            <label htmlFor="grade">Grade</label>
                            <MyInput
                                me='grade'
                                handler={this.handler.bind(this)}
                                placeHolder='Enter grade'
                                className="form-control mb-3"/>

                            <hr className="mb-4"/>
                            <button
                                className="btn btn-primary btn-lg btn-block mb-4"
                                type="submit"
                                onClick={this.createStudent.bind(this)}>
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
