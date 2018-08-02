const initialState = {
  users: [],
  error: {
    isRaiseError: false,
    message: '',
    isInfo: false,
  },
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case 'GET_USERS': {
      return {
        ...state,
        users: action.payload,
      };
    }
    case 'RAISE_ERROR': {
      const error = {
        isRaiseError: true,
        message: action.payload.message,
        isInfo: action.payload.isInfo,
      };
      return {
        ...state,
        error,
      };
    }
    default:
      return state;
  }
};
