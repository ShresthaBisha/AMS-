import request from '../request'

export const addMeeting = auth => {
    return request.post('meetings/create', auth)
}

export const getMeetingById = auth => {
    return request.get('meetings/5edef68542078c4a3cd12510/', auth)
}

export const updateMeeting = auth => {
    return request.put('meetings/5edef69442078c4a3cd12511/update', auth)
}

export const deleteMeeting = auth => {
    return request.delete('meetings/5edef69442078c4a3cd12511/delete', auth)
}

export const getAllMeeting = auth => {
    return request.get('meetings/', auth)
}

