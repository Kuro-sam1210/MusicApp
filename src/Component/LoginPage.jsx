import React, { useState } from "react";
import "./LoginPage.css";

function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [showConfirmEmail, setShowConfirmEmail] = useState(false);

  const handleSignUpClick = () => {
    setShowConfirmEmail(true);
  };

  const closeOverlay = () => {
    setShowConfirmEmail(false);
  };

  return (
    <div className="page">
      <div className="form-box">
        <h2>{isLogin ? "Login" : "Create an Account"}</h2>

        {!isLogin && (
          <>
            <input type="text" placeholder="First Name" className="input" />
            <input type="text" placeholder="Last Name" className="input" />
            <input type="email" placeholder="Email" className="input" />
            <input type="password" placeholder="Password" className="input" />
            <input
              type="password"
              placeholder="Confirm Password"
              className="input"
            />
          </>
        )}

        {isLogin && (
          <>
            <input type="email" placeholder="Email" className="input" />
            <input type="password" placeholder="Password" className="input" />
          </>
        )}

        <button
          className="btn"
          onClick={!isLogin ? handleSignUpClick : undefined}
        >
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

      {showConfirmEmail && (
        <div className="fixed bg-[#000000a2] h-screen w-full left-0 top-0 z-[10] flex justify-center items-center">
          <div className="h-[200px] w-[300px] bg-[#180d2e] flex flex-col justify-center p-4 rounded-lg border border-gray-600">
            <input
              type="email"
              placeholder="Confirm Email"
              className="input bg-[#180d2e] text-white placeholder-gray-400 p-3 rounded border border-gray-600"
            />
            <button
              className="btn mt-4"
              onClick={closeOverlay}
            >
              Confirm
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default LoginPage;
