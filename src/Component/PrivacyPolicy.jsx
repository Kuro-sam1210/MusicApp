import React from "react";
import "./PrivacyPolicy.css";

function PrivacyPolicy() {
  return (
    <div className="privacy-box">
      <div className="privacy-content">
        <h1>Privacy Policy</h1>
        <p>Last updated: August 16, 2025</p>

        <p>
          Welcome to our Music App. Your privacy is important to us. This Privacy Policy
          explains how we collect, use, and protect your personal information.
        </p>

        <h2>Information We Collect</h2>
        <p>
          We may collect:
        </p>
        <ul>
          <li>Your name and email address</li>
          <li>Music preferences and favorites</li>
          <li>Usage data such as pages visited and actions taken</li>
        </ul>

        <h2>How We Use Your Information</h2>
        <p>
          We use your data to improve your listening experience, recommend songs,
          and keep your account secure.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us.
        </p>
        <a href="mailto:support@musicapp.com" className="contact-link">
          Contact Support
        </a>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
