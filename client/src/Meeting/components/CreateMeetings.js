import React, { Component } from 'react'
import MyInput from 'my-input-react'

class CreateMeetings extends Component {

    state = {
        localStore: {}
    }

    handler (me, value) {
        const localStore = {...this.state.localStore}
        localStore[me] = value

        this.setState({localStore})
    }

    createMeeting () {
        console.log('log meeting', this.state.localStore)
    }


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
                            <h4 className="mb-3">
                                <u>Details for creating Meeting</u>
                            </h4>
                            <br/>
                            <label htmlFor="classroomid">Classroom ID</label>
                            <MyInput
                                me='classroomid'
                                handler={this.handler.bind(this)}
                                placeHolder='Enter Classroom ID'
                                className="form-control mb-3"/>

                            <label htmlFor="teacherid">Teacher ID</label>
                            <MyInput
                                me='teacherid'
                                handler={this.handler.bind(this)}
                                placeHolder='Enter Teacher ID'
                                className="form-control mb-3"/>

                            <label htmlFor="scheduleinfo">Schedule</label>
                            <MyInput
                                me='scheduleinfo'
                                handler={this.handler.bind(this)}
                                placeHolder='Enter schedule'
                                className="form-control mb-3"/>

                            <label htmlFor="meetinglink">Meeting Link</label>
                            <MyInput
                                me='meetinglink'
                                handler={this.handler.bind(this)}
                                placeHolder='Meeting link'
                                className="form-control mb-3"/>

                            <button
                                className="btn btn-primary btn-lg btn-block mb-4"
                                type="submit"
                                onClick={this.createMeeting.bind(this)}>
                                Create
                            </button>

                            <hr className="mb-4"/>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default CreateMeetings
