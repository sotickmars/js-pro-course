import { FirstComponent } from "./First";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    counterTwo: state.counterTwo,
  };
};

const mapDispatchToProps = (dispatch) => ({
  increment: () => {
    dispatch({ type: "INCREMENT" });
  },
  decrement: () => {
    dispatch({ type: "DECREMENT" });
  },
  plus: (input1) => {
    dispatch({ type: "PLUS", input1 });
  },
  minus: (input1) => {
    dispatch({ type: "MINUS", input1 });
  },
});
// const mapDispatchToProps = {
//   increment: () => ({ type: 'INCREMENT' }),
// };

export const First = connect(
  mapStateToProps,
  mapDispatchToProps
)(FirstComponent);
