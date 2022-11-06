import { useState } from "react";
import { useAuth } from "../auth";
import { useNavigate, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "../assets/styles/signin.css";

// create a SignIn component
const SignIn = () => {
  // create a state for the user
  const [user, setUser] = useState("");
  // create custom hook for auth
  const auth = useAuth();
  // create custom hook for navigate
  const navigate = useNavigate();
  // create custom hook for location
  const location = useLocation();

  const redirectPath = location.state?.path || "/";

  const handleSignin = () => {
    auth.signIn(user);
    navigate(redirectPath, { replace: true });
  };
  return (
    <div className="signin__form">
      <Helmet>
        <title>Sign In</title>
        <meta name="description" content="Sign In page" />
        <link rel="canonical" href="/signin" />
      </Helmet>
      <h2>Sign in</h2>

      <div className="signin__details">
        <label htmlFor="user">
          Username
          <input
            className="signin__input"
            type="text"
            onChange={(e) => setUser(e.target.value)}
            placeholder="Enter your username"
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            className="signin__input"
            type="password"
            placeholder="Enter your password"
          />
        </label>
        <button
          className="signin__button"
          disabled={!user}
          onClick={handleSignin}
        >
          Sign In
        </button>
      </div>
    </div>
  );
};
export default SignIn;
