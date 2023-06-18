import { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import "./Register.css";

const Register = () => {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Passwords don't match");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("/api/auth/register", user);
        navigate("/login");
      } catch (error) {
        console.log(error);
      }
    }
    // console.log(email.current.value);
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">SocialIQu</h3>
          <span className="loginDesc">
            Connect with friends and the world easily!
          </span>
        </div>
        <div className="loginRight">
          <form className="registerBox" onSubmit={handleSubmit}>
            <input
              placeholder="Username"
              className="loginInput"
              type="string"
              ref={username}
              required
            />
            <input
              placeholder="Email"
              className="loginInput"
              type="email"
              ref={email}
              required
            />
            <input
              placeholder="Password"
              className="loginInput"
              type="password"
              ref={password}
              minLength="6"
              required
            />
            <input
              placeholder="Password Again"
              className="loginInput"
              type="password"
              ref={passwordAgain}
              minLength="6"
              required
            />
            <button className="loginButton">Sign Up</button>
            <span className="loginRegisterButton">
              <Link to="/login">
                <div>Log into account</div>
              </Link>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
