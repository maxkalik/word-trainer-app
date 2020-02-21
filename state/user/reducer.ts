export const initialState = {
  user: null
};

export const reducer = (state = initialState, action: any) => {
  return {
    ...state,
    user: action.user
  };
};
