import * as source from './source'

export function addMeeting () {
    return function (dispatch) {
        dispatch({
            type: 'ADD_MEETING',
            payload: source.addMeeting(),
        })

    }
}

export function getMeetingById () {
    return function (dispactch) {
        dispactch({
            type: 'GET_MEETING_BY_ID',
            payload: source.getMeetingById(),
        })
    }
}

export function updateMeeting () {
    return function (dispactch) {
        dispactch({
            type: 'UPDATE_MEETING',
            payload: source.updateMeeting(),
        })
    }
}

export function deleteMeeting () {
    return function (dispactch) {
        dispactch({
            type: 'DELETE_MEETING',
            payload: source.deleteMeeting(),
        })
    }
}

export function getAllMeeting () {
    return function (dispactch) {
        dispactch({
            type: 'GET_ALL_MEETING',
            payload: source.getAllMeeting(),
        })
    }
}

