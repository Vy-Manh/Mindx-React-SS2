import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from '../Login/useAuth';
import '../Login/Login.css'

const Login = () => {
  const [pwd, setPwd] = useState("");
  let isLogin = useAuth();
  const navigate = useNavigate();
  let currentPwd = "123@";

  useEffect(() => {
    if (isLogin) {
      navigate("/");
    }
  }, [isLogin, navigate]);

  const handleLogin = () => {
    if (pwd === currentPwd) {
      
      navigate("/");
    } else {
      alert("Dang nhap sai");
    }
  };

  return (
    <div>
      <div className="login-form">
  <form>
    <h1>Login</h1>
    <div className="content">
      <div className="input-field">
        <input type="email" placeholder="Email" autoComplete="nope" />
      </div>
      <div className="input-field">
        <input
          type="password"
          placeholder="Password"
          autoComplete="new-password"
          onChange={(e) => setPwd(e.target.value)}
        />
      </div>
      <Link to='#' className="link">
        Forgot Your Password?
      </Link>
    </div>
    <div className="action">
      <button>Register</button>
      <button onClick={handleLogin}>Sign in</button>
    </div>
  </form>
    </div>
    </div>
  );
};

export default Login;