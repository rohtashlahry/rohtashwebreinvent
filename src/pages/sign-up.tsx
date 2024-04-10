import React, { useEffect, useState } from "react";
import ApiService from "../Services/ApiService";
import { useDispatch } from "react-redux";
import { setUserDetails } from "../store/mainStore.action";
import { useSelector } from "react-redux";
import "./signup.css";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userDetails } = useSelector((state: any) => state.api);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signUpSuccess, setSignUpSuccess] = useState(false);
  
  const handleSubmit = (e: any) => {
    e.preventDefault();
    e.stopPropagation();

    const getAPIData = async () => {
      try {
        const payload = {
          // email: "eve.holt@reqres.in",
          // password: 'pistol'
          email: email,
          password: password,
        };
        dispatch(setUserDetails(payload));
        const response = await ApiService.post("register", payload);
        // console.log("@@", response)
        if (response) {
          dispatch(setUserDetails(response));
          setSignUpSuccess(true);
          setTimeout(() => {
            handleSignInButton();
          }, 2000);
        }
      } catch (error: any) {
        console.error("Error:", error.message);
      }
    };
    getAPIData();
  };

  useEffect(() => {
    if (userDetails.id) {
    }
    console.log("123", userDetails);
  }, [userDetails]);

  const handleSignInButton = () => {
    navigate("/sign-in");
  };

  return (
    <div className="signup-container">
      <div className="signup-inner">
        <div className="signup-inner-heading">
          <h2>Create an account</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              type="email"
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
          <button type="submit">Sign up</button>
          {signUpSuccess && (
            <>
              <div>
                You're successfully registered. Click to redirect to Sign-In
                page
              </div>
              <button onClick={handleSignInButton}>Sign In</button>
            </>
          )}
        </form>
      </div>
    </div>
  );
};
export default SignUp;
