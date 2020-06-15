import request from "../request";

const mapStateToProps = (state) => {
  return JSON.stringify(this.state);
};

export const addClassroom = () => {
  return request.post(
    "http://dummy.restapiexample.com/api/v1/create",
    mapStateToProps
  );
};
