import { Helmet } from "react-helmet-async";
import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import "../assets/styles/signup.css";

// create a signup component
const SignUp = () => {
  // create a navigate function
  // const navigate = useNavigate();
  //  create a function to handle form submission
  // const handleSignIn = () => {
  //   // redirect to the sign in page
  //   navigate("/signin");
  // };

// form validation
  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "Email address is invalid!";
    }
    if (!values.password) {
      errors.password = "Password is required!";
    } else if (values.password.length < 6) {
      errors.password = "Password needs to be 6 characters or more";
    } else if (values.password.length > 10) {
      errors.password = "Password needs to be 10 characters or less";
    }
    if (!values.confirmPassword) {
      errors.confirmPassword = "Password is required!";
    } else if (values.confirmPassword !== values.password) {
      errors.confirmPassword = "Passwords do not match!";
    }
    return errors;
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log("No errors, submit callback called!");
    }
  }, [formErrors, isSubmit, formValues]);
  

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
      <form 
        onSubmit={handleSubmit}
        className="signup__form">
        <label htmlFor="full__name">Full Name</label>
        <input
          className="signup__input"
          type="text"
          name="name"
          id="full__name"
          placeholder="John Doe"
        />
        <label htmlFor="email">Email</label>
        <input
          className="signup__input"
          type="email"
          name="email"
          id="email"
          placeholder="example@email.com"
          onChange={handleChange}
        />
        <p className="error">{formErrors.email}</p>
        <label htmlFor="user__name">Username</label>
        <input
          className="signup__input"
          type="text"
          name="username"
          id="user__name"
          placeholder="Set your user name"
          onChange={handleChange}
        />
        <p className="error">{formErrors.username}</p>
        <label htmlFor="password">Password</label>
        <input
          className="signup__input"
          type="password"
          name="password"
          id="password"
          placeholder="Set your password"
          onChange={handleChange}
        />
        <p className="error">{formErrors.password}</p>
        <label htmlFor="confirm__password">Confirm Password</label>
        <input
          className="signup__input"
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          placeholder="Confirm your password"
          onChange={handleChange}
        />
        <p className="error">{formErrors.confirmPassword}</p>
        <button className="signup__btn" 
        type="submit"
        onClick={handleSubmit}
        // onClick={() => {handleSubmit(); handleSignIn() }}
        >
          Submit
        </button>
        {Object.keys(formErrors).length === 0 && isSubmit && (
                    <div className="success-msg">Signed up successfully!</div>
                )}
      </form>
    </div>
  );
};

export default SignUp;
