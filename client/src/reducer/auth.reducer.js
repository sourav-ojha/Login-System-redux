// export default (state = { Authdata: null }, action) => {
export default (AuthState = null, action) => {
  switch (action.type) {
    case "AUTH":
      return action.payload;
    default:
      return AuthState;
  }
};
