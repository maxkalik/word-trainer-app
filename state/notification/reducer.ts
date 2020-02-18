export const initialState = {
  notificationMsg: ''
};

export const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'NOTIFICATION':
      return {
        ...state,
        notificationMsg: action.notificationMsg
      };
    default:
      return state;
  }
};
