const initialState = {
  message: false,
  isLogin: false,
  loading: true,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...initialState,
        message: action.payload,
      };
    case "LOGOUT":
      return {
        ...initialState,
        message: action.payload,
      };
    case "CHECK_TOKEN":
      return {
        ...initialState,
        isLogin: action.payload.isLogin,
        loading: action.payload.loading,
      };
    default:
      return state;
  }
};

export default authReducer;
