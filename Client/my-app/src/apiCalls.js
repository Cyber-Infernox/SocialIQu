import axios from "axios";

export const loginCall = async (userCredentials, dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const response = await axios.post("/api/auth/login", userCredentials);
    // console.log("Logged in");
    dispatch({ type: "LOGIN_SUCCESS", payload: response.data });
  } catch (err) {
    // console.log("Login Error");
    dispatch({ type: "LOGIN_FAILURE", payload: err });
  }
};
