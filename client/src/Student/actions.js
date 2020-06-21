import * as source from './source'

export function addStudent (requestParam) {
    return function (dispatch) {
        dispatch({
            type: 'ADD_STUDENT',
            payload: source.addStudent(requestParam),
        })

    }
}

export function searchStudent (reqParam) {
    return function (dispactch) {
        dispactch({
            type: 'SEARCH_STUDENT',
            payload: source.searchStudent(reqParam),
        })
    }
}

export function getStudentById () {
    return function (dispactch) {
        dispactch({
            type: 'GET_STUDENT_BY_ID',
            payload: source.getStudentById(),
        })
    }
}
