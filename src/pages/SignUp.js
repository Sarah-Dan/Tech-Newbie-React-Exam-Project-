const SignUp = () => {
    return ( 
        <div>
            <h1>Sign up</h1>
            <p>Sign up for an account to get access to the community.</p>
            <form>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" />
                <button>Sign up</button>
            </form>
        </div>
     );
}
 
export default SignUp;