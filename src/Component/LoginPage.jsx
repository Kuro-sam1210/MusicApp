import React, { useState } from "react";
import "./LoginPage.css";

function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="page">
      <div className="form-box">
        <h2>{isLogin ? "Login" : "Create an Account"}</h2>

        {!isLogin && (
          <input type="text" placeholder="Full Name" className="input" />
        )}

        <input type="email" placeholder="Email" className="input" />
        <input type="password" placeholder="Password" className="input" />

        {!isLogin && (
          <input
            type="password"
            placeholder="Confirm Password"
            className="input"
          />
        )}

        <button className="btn">
          {isLogin ? "Login" : "Sign Up"}
        </button>

        <p className="toggle-text">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <span
            onClick={() => setIsLogin(!isLogin)}
            className="toggle-link"
          >
            {isLogin ? "Sign Up" : "Login"}
          </span>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;

