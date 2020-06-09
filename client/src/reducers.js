import { combineReducers } from "redux";

import loginReducer from "./Login/reducer";
import bookReducer from "./Books/reducer";
import studentReducer from "./Students/reducer";

export default combineReducers({
  loginReducer,
  bookReducer,
  studentReducer,
});
