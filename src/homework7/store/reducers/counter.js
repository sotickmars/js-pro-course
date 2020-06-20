const initialState = {
  users: [],
  user: {},
};
export const counter = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return { ...state, users: action.data };
    case "NEWUSER":
      return { users: [...state.users, action.newUser] };
    default:
      return state;
  }
};
