const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        isFetching: true,
        error: false,
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        isFetching: false,
        error: false,
      };
    case "LOGIN_FAILURE":
      return {
        user: action.payload,
        isFetching: false,
        error: true,
      };
    // User follow / unfollow context
    case "FOLLOW":
      return {
        ...state, // Default state
        user: {
          ...state.user,
          following: [...state.user.following, action.payload],
        },
      };
    case "UNFOLLOW":
      return {
        ...state, // Default state
        user: {
          ...state.user,
          following: state.user.following.filter(
            (eachFollowing) => eachFollowing !== action.payload
          ),
        },
      };
    default:
      return state;
  }
};

export default AuthReducer;
