import request from '../request'

export const addStudent = requestParam => {
    return request.post('users/create', requestParam)
}

export const searchStudent = reqParam => {
    return request.post('users/search', reqParam)
}

export const getStudentById = auth => {
    return request.get('users/read/5ee07bf95a33a13ba25ec2f7', auth)
}
