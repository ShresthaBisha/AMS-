import request from '../request'

// const mapStateToProps = (state) => {
//   return JSON.stringify(this.state);
// };
// export const getEmployeeDetails = () => {
//   return request.get("http://dummy.restapiexample.com/api/v1/employees");
// };
//
// export const addEmployeeDetails = () => {
//   return request.post(
//     "http://dummy.restapiexample.com/api/v1/create",
//     mapStateToProps
//   );
// };

export const addStudent = auth => {
    return request.post('users/create', auth)
}

export const searchStudent = auth => {
    return request.post('users/search', auth)
}

export const getStudentById = auth => {
    return request.put('users/read/5ee07bf95a33a13ba25ec2f7', auth)
}
