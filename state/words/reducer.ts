export const initialState = {
  words: []
};

export const reducer = (state = initialState, action: any) => {
  return {
    ...state,
    words: action.words
  };
};
