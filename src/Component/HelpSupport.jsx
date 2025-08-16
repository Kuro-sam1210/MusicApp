import React from "react";
import { useNavigate } from "react-router-dom";
import "./HelpSupport.css";

function HelpSupport() {
  const navigate = useNavigate();

  return (
    <div className="help-box">
      <div className="help-content">
        <h1>Help & Support</h1>
        <p>
          Need assistance? We are here to help!  
          Whether you have questions about using Sound Mack,  
          troubleshooting issues, or understanding our features,  
          our support team is ready to guide you.
        </p>
        <a href="mailto:support@soundmack.com" className="contact-link">
          Email Support
        </a>
        <br />
        <button className="contact-link" onClick={() => navigate(-1)}>
          Go Back
        </button>
      </div>
    </div>
  );
}

export default HelpSupport;
