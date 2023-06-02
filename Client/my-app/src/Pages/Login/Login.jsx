import "./Login.css";

const Login = () => {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">SocialIQu</h3>
          <span className="loginDesc">Connect with friends and the world!</span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <button className="loginButton">Sign In</button>
            <span className="loginForgot">Forgot Password?</span>
            <span className="loginRegisterButton">Create a new account</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
