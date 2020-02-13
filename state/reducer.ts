export const initialState = {
  words: [],
  error: null,
  notificationMsg: ''
};

export const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'FETCHING_WORDS':
      return {
        ...state,
        words: action.words
      };
    case 'FETCHING_FAILED':
      return {
        ...state,
        error: action.error
      };
    case 'NOTIFICATION':
      return {
        ...state,
        notificationMsg: action.notificationMsg
      };
    default:
      return state;
  }
};
