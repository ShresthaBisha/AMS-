import request from '../request'

export const addStudent = auth => {
    return request.post('users/create', auth)
}

export const searchStudent = auth => {
    return request.post('users/search', auth)
}

export const getStudentById = auth => {
    return request.get('users/read/5ee07bf95a33a13ba25ec2f7', auth)
}
