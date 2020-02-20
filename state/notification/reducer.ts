export const initialState = {
  msg: ''
};

export const reducer = (state = initialState, action: any) => {
  return {
    ...state,
    msg: action.msg
  };
};
