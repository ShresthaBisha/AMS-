import React, { Component } from 'react'
import MyInput from 'my-input-react'
import { addStudent } from '../actions'
import { connect } from 'react-redux'

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
        //console.log('log student', this.state.localStore)
        const { localStore } = this.state
        const req = { ...localStore, status: 'ACTIVE', groups: ['STUDENT'] }
        //console.log('log request list', req)
        this.props.dispatch(addStudent(req))
    }

    render () {
        const { localStore } = this.state
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
                            <label htmlFor="username">Username</label>
                            <MyInput
                                me='username'
                                handler={this.handler.bind(this)}
                                placeHolder='Enter Username for student'
                                className="form-control mb-3"/>

                            <label htmlFor="password">Password</label>
                            <MyInput
                                me='password'
                                handler={this.handler.bind(this)}
                                placeHolder='Enter password'
                                className="form-control mb-3"/>

                            <label htmlFor="fullName">Fullname</label>
                            <MyInput
                                me='fullName'
                                handler={this.handler.bind(this)}
                                placeHolder='Enter Full Name '
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

export default connect(state => ({
    // loginReducer: state.loginReducer
}))(AddStudents)
