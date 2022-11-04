const Fallback = () => {
    // const error = useErrorHandler();
    return ( 
        <div role="alert" className="fallback">
            <h2 className="error__alert">Oh no!!!😔 something went wrong</h2>
            {/* <pre>{error.message}</pre> */}
            <a href="/" className="page404__link">
        Go back to home
      </a>
        </div>
     );
}
 
export default Fallback;