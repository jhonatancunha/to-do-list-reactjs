// eslint-disable-next-line no-shadow
const createReducer = (initialState, handleActions) => (
  state = initialState,
  action
) => {
  // eslint-disable-next-line no-prototype-builtins
  return handleActions.hasOwnProperty(action.type)
    ? handleActions[action.type](state, action)
    : state;
};

export default createReducer;
