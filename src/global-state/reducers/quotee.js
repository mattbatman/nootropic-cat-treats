const reducer = (state = null, action) => {
  switch (action.type) {
    case 'QUOTEE_SELECTED':
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
