import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addClassroom } from '../actions'
import MyInput from 'my-input-react'
import { getUser } from '../../utils'

class CreateClassroom extends Component {

    state = {
        localStore: {}
    }

    handler (me, value) {
        const localStore = { ...this.state.localStore }
        localStore[me] = value

        this.setState({ localStore })
    }

    createClassroom () {
        const user = getUser()

        const { localStore } = this.state
        const req = { ...localStore, teacher: user._id }

        this.props.dispatch(addClassroom(req))
    }

    render () {
        const { localStore } = this.state

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

                        </p>
                    </div>

                    <div className="row">
                        <div className="col-md-2 order-md-1 mb-2"></div>
                        <div className="col-md-8 order-md-2">
                            <h4 className="mb-3">
                                <u>Info for creating Classroom</u>
                            </h4>
                            <br/>
                            <label htmlFor="grade">Grade</label>
                            <MyInput
                                me='grade'
                                handler={this.handler.bind(this)}
                                placeHolder='Enter the grade'
                                className="form-control mb-3"/>

                            <label htmlFor="section">Section</label>
                            <MyInput
                                me='section'
                                handler={this.handler.bind(this)}
                                placeHolder='Enter Section'
                                className="form-control mb-3"/>

                            <label htmlFor="description">Description</label>
                            <MyInput
                                me='description'
                                handler={this.handler.bind(this)}
                                placeHolder='Description'
                                className="form-control mb-3"/>

                            <button
                                className="btn btn-primary btn-lg btn-block mb-4"
                                type="submit"
                                onClick={this.createClassroom.bind(this)}>
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

export default connect(state => ({
    // loginReducer: state.loginReducer
}))(CreateClassroom)
