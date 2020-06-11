const initialState = {
  classroomDetails: {},
  fetchState: 0,
  error: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CLASSROOM_DETAILS_PENDING":
      return { ...state, fetchState: 1 };
    case "ADD_CLASSROOM_DETAILS_FULFILLED":
      const classroomDetails = action.payload.data;
      return { ...state, fetchState: 2, classroomDetails: classroomDetails };
    case "ADD_CLASSROOM_DETAILS_REJECTED":
      return {
        ...state,
        fetchState: 3,
      };

    default:
      return state;
  }
};

export default reducer;
