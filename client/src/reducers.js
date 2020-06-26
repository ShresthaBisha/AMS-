import { combineReducers } from 'redux'

import loginReducer from './Login/reducer'
import bookReducer from './Books/reducer'
import studentReducer from './Student/reducer'
import classroomReducer from './Classroom/reducer'

export default combineReducers({
    loginReducer,
    bookReducer,
    studentReducer,
    classroomReducer
})
