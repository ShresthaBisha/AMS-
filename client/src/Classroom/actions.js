import { addClassroom } from "./source";

export function addClassroomAction() {
  return function (dispactch) {
    dispactch({
      type: "ADD_CLASSROOM_DETAILS",
      payload: addClassroom(),
    });
  };
}
