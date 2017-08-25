const reducer = (state = {}, action) => {
  //action will be used with switch statement
  switch (action.status) {
    case "ACTION_STRING": 
      const newState = {
        modified: "state",
        goes: "here"
      };
      //logic
      return newState;
    default:
      return state;
  }
};

export default reducer;
