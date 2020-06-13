import request from "../request";

const mapStateToProps = (state) => {
  return JSON.stringify(this.state);
};
export const getEmployeeDetails = () => {
  return request.get("http://dummy.restapiexample.com/api/v1/employees");
};

export const addEmployeeDetails = () => {
  return request.post(
    "http://dummy.restapiexample.com/api/v1/create",
    mapStateToProps
  );
};
