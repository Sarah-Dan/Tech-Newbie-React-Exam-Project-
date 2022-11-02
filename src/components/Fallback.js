const Fallback = () => {
    return ( 
        <div role="alert" className="fallback">
            <h2 className="error__alert">Oh no!!!😔 something went wrong</h2>
            <pre>{error.message}</pre>
        </div>
     );
}
 
export default Fallback;