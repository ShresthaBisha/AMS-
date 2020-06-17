import * as source from './source'

export function addStudent () {
    return function (dispatch) {
        dispatch({
            type: 'ADD_STUDENT',
            payload: source.addStudent(),
        })

    }
}

export function searchStudent () {
    return function (dispactch) {
        dispactch({
            type: 'SEARCH_STUDENT',
            payload: source.searchStudent(),
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
