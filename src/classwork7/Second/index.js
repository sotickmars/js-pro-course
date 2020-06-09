import { SecondComponent } from "./Second";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  counter: state,
});

const mapDispatchToProps = (dispatch) => ({
  increment: () => {
    dispatch({ type: "INCREMENT" });
  },
  decrement: () => {
    dispatch({ type: "DECREMENT" });
  },
});
// const mapDispatchToProps = {
//   increment: () => ({ type: 'INCREMENT' }),
// };

export const Second = connect(
  mapStateToProps,
  mapDispatchToProps
)(SecondComponent);
