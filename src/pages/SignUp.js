import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import "../assets/styles/signup.css";

// create a signup component
const SignUp = () => {
  // create a navigate function
  const navigate = useNavigate();
  //  create a function to handle form submission
  const handleSignIn = () => {
    // redirect to the sign in page
    navigate("/signin");
  };
  return (
    <div className="signup__container">
      <Helmet>
        <title>Sign Up</title>
        <meta name="description" content="Sign up to join the community" />
        <link rel="canonical" href="/signup" />
      </Helmet>
      <h1 className="signup__heading">
        Sign up to get full access to the community.
      </h1>
      {/* create a form */}
      <form className="signup__form">
        <label htmlFor="full__name">Full Name</label>
        <input
          className="signup__input"
          type="text"
          name="name"
          id="full__name"
          placeholder="Enter your Full name"
        />
        <label htmlFor="email">Email</label>
        <input
          className="signup__input"
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
        />
        <label htmlFor="full__name">Username</label>
        <input
          className="signup__input"
          type="text"
          name="user name"
          id="user__name"
          placeholder="Set your user name"
        />
        <label htmlFor="password">Password</label>
        <input
          className="signup__input"
          type="password"
          name="password"
          id="password"
          placeholder="Set your password"
        />
        <label htmlFor="confirm__password">Confirm Password</label>
        <input
          className="signup__input"
          type="password"
          name="confirm__password"
          id="confirm__password"
          placeholder="Confirm your password"
        />
        <button className="signup__btn" onClick={handleSignIn}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
