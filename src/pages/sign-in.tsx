import React, { useState } from "react";
import ApiService from "../Services/ApiService";
import Constants from "../constants/constants";
import { useDispatch, useSelector } from "react-redux";
import { setUserToken } from "../store/mainStore.action";
import { useNavigate } from "react-router-dom";
import "./signin.css";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userDetails, userToken } = useSelector((state: any) => state.api);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Function to handle form submission
  const handleSubmit = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    const payload = {
      email: email,
      password: password,
      // "email": "eve.holt@reqres.in",
      // "password": "cityslicka"
    };
    const getAPIData = async () => {
      try {
        const res = await ApiService.post("login", payload);
        console.log(res);
        if (res) {
          dispatch(setUserToken(res.token));
          res.token && navigate("/dashboard");
        }
      } catch (error: any) {
        console.error("Error:", error.message);
      }
    };
    getAPIData();
  };

  return (
    <div className="signin-container">
      <div className="signin-inner">
        <div className="signin-inner-heading">
          <h2>Sign In</h2>
          <h3>Sign in to your account.</h3>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              id="username"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Sign in</button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
