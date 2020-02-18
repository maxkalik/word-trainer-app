export const initialState = {
  words: []
};

export const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'FETCHING_WORDS':
      return {
        ...state,
        words: action.words
      };
    default:
      return state;
  }
};
