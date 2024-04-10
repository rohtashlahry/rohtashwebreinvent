import React from "react";
import { Link } from "react-router-dom";
import "./dashboard.css";

const Landing = () => {
  return (
    <div className="landing-container">
      <div className="landing-btns">
        <h1>Landing!</h1>
        <div className="button-container">
          <Link to="/sign-in">
            <button className="fetchbtn">Sign In</button>
          </Link>
          <Link to="/sign-up">
            <button className="fetchbtn">Sign Up</button>
          </Link>
          <Link to="/dashboard">
            <button className="fetchbtn">Dashboard</button>
          </Link>
        </div>
      </div>
      <div className="landing-img">
        <img src="./darksky.jpg" width="auto" height="auto" />
      </div>
    </div>
  );
};

export default Landing;
