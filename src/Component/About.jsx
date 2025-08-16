import React from "react";
import { useNavigate } from "react-router-dom";
import "./About.css";

function About() {
  const navigate = useNavigate();

  return (
    <div className="about-box">
      <div className="about-content">
        <h1>About Us</h1>
        <p>
          At <strong>Sound Mack</strong>, music is not just sound — 
          it is an experience. Every beat, lyric, and melody has the power 
          to inspire, heal, and connect people from all walks of life.
        </p>
        <p>
          Our mission is to create a space where artists and listeners come together, 
          sharing the magic of music and building a community through rhythm and harmony.
        </p>
        <button className="back-btn" onClick={() => navigate("/")}>
          Back to Home
        </button>
      </div>
    </div>
  );
}

export default About;
