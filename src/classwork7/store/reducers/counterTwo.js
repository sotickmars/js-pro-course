const initialState = 0;

export const counterTwo = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 2;
    case "DECREMENT":
      return state - 2;
    case "PLUS":
      return state + action.input1;
    case "MINUS":
      return state - action.input1;
    default:
      return state;
  }
};
