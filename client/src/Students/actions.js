import { getEmployeeDetails, addEmployeeDetails } from "./source";

export function getEmployeeDetailsAction() {
  return function (dispactch) {
    dispactch({
      type: "GET_EMPLOYEE_DETAILS",
      payload: getEmployeeDetails(),
    });
  };
}

export function addEmployeeDetailsAction() {
  return function (dispactch) {
    dispactch({
      type: "ADD_EMPLOYEE_DETAILS",
      payload: addEmployeeDetails(),
    });
  };
}
