import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAllClassroom } from '../actions'

class ListClassroom extends Component {
    state = {}

    componentDidMount () {
        console.log('this will run once')
        this.props.dispatch(getAllClassroom())
    }

    render () {
        const {classrooms} = this.props.classroomReducer

        console.log('log class rooms', classrooms)



        return (
            <div className="container-fullwidth">
                <div className="py-5 text-center">
                    <img
                        className="d-block mx-auto mb-4"
                        src="http://www.resetyourbody.com/wp-content/uploads/COMPANY_LOGO/logo-default.png"
                        alt=""
                        width="72"
                        height="72"
                    />
                    <h2>List of all classrooms.</h2>
                    <p className="lead">Search using keyboard for classroom below.</p>
                </div>
                <div className="row" style={{ margin: '0% 0% 0% 25%' }}>
                    <div className="col-md-6">
                        <div className="panel panel-primary">
                            <div className="panel-body">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="dev-table-filter"
                                    data-action="filter"
                                    data-filters="#dev-table"
                                    placeholder="Search Classroom"
                                />
                            </div>
                            <br/> <br/>
                            <div className="row">
                                <div className="col-md-2 order-md-1 mb-2"></div>
                                <div className="col-md-12 order-md-2">
                                    <h4 className="mb-3">Classrooms' list</h4>
                                </div>
                            </div>
                            <table className="table table-hover" id="dev-table">
                                <thead>
                                <tr>
                                    <th>No.</th>
                                    <th>Teacher</th>
                                    <th>Grade</th>
                                    <th>Section</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    classrooms.map((classroom) => {
                                        console.log('log room', classroom)
                                        return (
                                            <tr>
                                                <td>1</td>
                                                <td>{classroom.teacher.fullName}</td>
                                                <td>{classroom.grade}</td>
                                                <td>{classroom.section}</td>
                                            </tr>
                                        )
                                    })
                                }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(state => ({
    classroomReducer: state.classroomReducer
}))(ListClassroom)
