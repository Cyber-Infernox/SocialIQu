import { useRef } from "react";

import "./Register.css";

const Register = () => {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email.current.value);
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
              type="email"
              ref={username}
              required
            />
            <input
              placeholder="Email"
              className="loginInput"
              type="string"
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
            <span className="loginRegisterButton">Log into account</span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
