const initialState = {
  employeeDetails: {},
  // fetchState: 0,
  // error: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // case "GET_EMPLOYEE_DETAILS_PENDING":
    //   return { ...state, fetchState: 1 };
    // case "GET_EMPLOYEE_DETAILS_FULFILLED":
    //   const employeeDetails = action.payload.data;
    //   return { ...state, fetchState: 2, employeeDetails: employeeDetails };
    // case "GET_EMPLOYEE_DETAILS_REJECTED":
    //   return {
    //     ...state,
    //     fetchState: 3,
    //   };
    case "ADD_EMPLOYEE_DETAILS_FULFILLED":
      const employeeDetails = action.payload.data;
      return { ...state, employeeDetails };

    default:
      return state;
  }
};

export default reducer;
