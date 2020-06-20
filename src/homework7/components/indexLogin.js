import { Login } from "./Login";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    counter: state.counter.users,
  };
};

const mapDispatchToProps = (dispatch) => ({
  increment: () => {
    dispatch({ type: "INCREMENT" });
  },
  decrement: () => {
    dispatch({ type: "DECREMENT" });
  },
  plus: (input) => {
    dispatch({ type: "PLUS", input });
  },
  minus: (input) => {
    dispatch({ type: "MINUS", input });
  },
});

export const LoginComp = connect(mapStateToProps, mapDispatchToProps)(Login);
