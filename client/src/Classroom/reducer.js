const initialState = {
    classroom: {},
    classrooms: [],

    addState: 0,
    fetchState: 0,



    updateState: 0,
    error: {},
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_CLASSROOM_PENDING':
            return { ...state, addState: 1 }
        case 'ADD_CLASSROOM_FULFILLED':
            return { ...state, addState: 2, classroom: action.payload.data }
        case 'ADD_CLASSROOM_REJECTED':
            return { ...state, addState: 3 }

        case 'GET_CLASSROOM_BY_ID_PENDING':
            return { ...state, fetchState: 1 }
        case 'GET_CLASSROOM_BY_ID_FULFILLED':
            return { ...state, fetchState: 2, classroom: action.payload.data }
        case 'GET_CLASSROOM_BY_ID_REJECTED':
            return { ...state, fetchState: 3 }

        case 'GET_ALL_CLASSROOM_PENDING':
            return { ...state, fetchState: 1 }
        case 'GET_ALL_CLASSROOM_FULFILLED':
            return { ...state, fetchState: 2, classrooms: action.payload.data }
        case 'GET_ALL_CLASSROOM_REJECTED':
            return { ...state, fetchState: 3 }

        default:
            return state
    }
}

export default reducer
