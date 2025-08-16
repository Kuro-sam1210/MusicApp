import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

function CreateAccount() {
  const [showConfirmEmail, setShowConfirmEmail] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = () => {
    setShowConfirmEmail(true);
  };

  const handleConfirmEmail = () => {
    setShowConfirmEmail(false);
    navigate("/profile");
  };

  return (
    <div className="page">
      <div className="form-box">
        <h2>Create an Account</h2>
        <input type="text" placeholder="First Name" className="input" />
        <input type="text" placeholder="Last Name" className="input" />
        <input type="email" placeholder="Email" className="input" />
        <input type="password" placeholder="Password" className="input" />
        <input
          type="password"
          placeholder="Confirm Password"
          className="input"
        />
        <button className="btn" onClick={handleSignUp}>
          Sign Up
        </button>
      </div>

      {showConfirmEmail && (
        <div className="fixed bg-[#000000a2] h-screen w-full left-0 top-0 z-[10] flex justify-center items-center">
          <div className="h-[200px] w-[300px] bg-[#180d2e] flex flex-col justify-center p-4 rounded-lg border border-gray-600">
            <input
              type="email"
              placeholder="Confirm Email"
              className="input bg-[#180d2e] text-white placeholder-gray-400 p-3 rounded border border-gray-600"
            />
            <button className="btn mt-4" onClick={handleConfirmEmail}>
              Confirm
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CreateAccount;
