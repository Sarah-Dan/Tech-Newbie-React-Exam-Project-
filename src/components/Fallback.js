import "../assets/styles/fallback.css";

// create a fallback component for error boundary
const Fallback = ({ error }) => {
  return (
    <div role="alert" className="fallback">
      <h2 className="error__message">Oh no!!!😔 something went wrong</h2>
      <pre>{error.message}</pre>
      <a href="/" className="page404__link">
        Go back to home
      </a>
    </div>
  );
};

export default Fallback;
