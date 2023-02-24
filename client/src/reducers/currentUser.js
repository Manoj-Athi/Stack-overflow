const currentUserReducer = (state = null, action) => {
  switch (action.type) {
    case "FETCH_CURRENT_USER":
      return action.payload;
    default:
      return state;
  }
};

export default currentUserReducer;
