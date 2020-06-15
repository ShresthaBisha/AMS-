import request from '../request'

export const addClassroom = auth => {
    return request.post('classrooms/create', auth)
}

export const getClassroomById = auth => {
    return request.get('classrooms/5ededf8815518341543fffe8', auth)
}
