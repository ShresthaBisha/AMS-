import * as source from './source'

export function addClassroom () {
    return function (dispactch) {
        dispactch({
            type: 'ADD_CLASSROOM',
            payload: source.addClassroom(),
        })
    }
}

export function getClassroomById () {
    return function (dispactch) {
        dispactch({
            type: 'GET_CLASSROOM_BY_ID',
            payload: source.getClassroomById(),
        })
    }
}
