import { createContext, useReducer } from "react";

import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  // user: {
  //   _id: "647b390b2f09580bdd660ed6",
  //   username: "SayonKar",
  //   email: "sayonkar@gmail.com",
  //   profilePicture: "",
  //   coverPicture: "",
  //   followers: [],
  //   following: [],
  //   isAdmin: false,
  // },
  user: null,
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
