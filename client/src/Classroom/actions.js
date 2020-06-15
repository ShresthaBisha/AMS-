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

export function updateClassroomById () {
    return function (dispactch) {
        dispactch({
            type: 'UPDATE_CLASSROOM_BY_ID',
            payload: source.updateClassroomById(),
        })
    }
}

export function deleteClassroom () {
    return function (dispactch) {
        dispactch({
            type: 'DELETE_CLASSROOM',
            payload: source.deleteClassroom(),
        })
    }
}

export function getAllClassroom () {
    return function (dispactch) {
        dispactch({
            type: 'GET_ALL_CLASSROOM_BY_ID',
            payload: source.getAllClassroom(),
        })
    }
}
