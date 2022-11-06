import { Helmet } from "react-helmet-async";
import "../assets/styles/signup.css";

// create a signup component
const SignUp = () => {
  return (
    <div className="signup__container">
      <Helmet>
        <title>Sign Up</title>
        <meta name="description" content="Sign up to join the community" />
        <link rel="canonical" href="/signup" />
      </Helmet>
      <h3 className="signup__heading">Sign Up</h3>
      <p>Sign up to get full access to the community.</p>
      {/* create a form */}
      <form className="signup__form">
        <label htmlFor="full__name">Full Name</label>
        <input
          className="signup__input"
          type="text"
          name="name"
          id="full__name"
          placeholder="Enter your full name"
        />
        <label htmlFor="phone">Phone</label>
        <input
          className="signup__input"
          type="number"
          name="phone"
          id="phone"
          placeholder="Enter your phone number"
        />
        <label htmlFor="country">Country</label>
        <input
          className="signup__input"
          type="text"
          name="country"
          id="country"
          placeholder="Enter your country of residence"
        />
        <label htmlFor="email">Email</label>
        <input
          className="signup__input"
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
        />
        <label htmlFor="password">Password</label>
        <input
          className="signup__input"
          type="password"
          name="password"
          id="password"
          placeholder="Enter your password"
        />
        <button className="signup__btn" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
