// Inspired by http://redux.js.org/docs/recipes/ReducingBoilerplate.html#generating-reducers
export const createReducer = (initialState, handlers) => (state = initialState, action) => {
  if (handlers[action.type]) {
    return handlers[action.type](state, action);
  }
  return state;
};

// Takes a list of action types and a handler, and returns a map where all action types do the same
// thing.
export const createCommonActionMap = (actionTypes, handler) => {
  const actionMap = {};
  actionTypes.forEach((type) => {
    actionMap[type] = handler;
  });
  return actionMap;
};

// Takes a list of action types, and returns a map where all action types join the state and the
// content of the action.
export const createSimpleActionMap = actionTypes =>
  createCommonActionMap(actionTypes, (state, action) => ({ ...state, ...action }));

// Takes a list of action types, and returns a map where all action types point to a reducer
// function that joins the state and the content of the action.
export const createResetActionMap = (actionTypes, initialState) =>
  createCommonActionMap(actionTypes, () => initialState);
