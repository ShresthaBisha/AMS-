import request from '../request'

export const addClassroom = createReq => {
    return request.post('classrooms/create', createReq)
}

export const getClassroomById = auth => {
    return request.get('classrooms/5ededf8815518341543fffe8', auth)
}

export const updateClassroom = auth => {
    return request.put('classrooms/5edeee65807c6725682d190d/update', auth)
}

export const deleteClassroom = auth => {
    return request.delete('classrooms/5edeee65807c6725682d190d/delete', auth)
}

export const getAllClassroom = () => {
    return request.get('classrooms/read')
}
