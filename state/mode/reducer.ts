export const initialState = {
  mode: 'light'
};

export const reducer = (state = initialState, action: any) => {
  return {
    ...state,
    mode: action.mode
  };
};
