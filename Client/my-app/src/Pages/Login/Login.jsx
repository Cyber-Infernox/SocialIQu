import { useContext, useRef } from "react";
import { Link } from "react-router-dom";

import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../Context/AuthContext";
import "./Login.css";

import CachedIcon from "@mui/icons-material/Cached";

const Login = () => {
  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  const email = useRef();
  const password = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">SocialIQu</h3>
          <span className="loginDesc">Connect with friends and the world!</span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleSubmit}>
            <input
              placeholder="Email"
              type="email"
              className="loginInput"
              ref={email}
              required
            />
            <input
              placeholder="Password"
              type="password"
              className="loginInput"
              ref={password}
              minLength="6"
              required
            />
            <button className="loginButton" disabled={isFetching}>
              {isFetching ? <CachedIcon /> : "Sign In"}
            </button>
            <span className="loginForgot">Forgot Password?</span>
            <span className="loginRegisterButton">
              <Link to="/register">
                <div>
                  {isFetching ? <CachedIcon /> : "Create a new account"}
                </div>
              </Link>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
