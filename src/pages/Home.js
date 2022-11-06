import '../assets/styles/home.css';
import { Navigate } from "react-router-dom";
import  useAuthContext  from '../userAuthContext';
import { Helmet } from "react-helmet-async";


const Home = () => {
    const auth = useAuthContext();
    console.log(auth);

    // const handleLogin = () => {
    //     auth.signin(() => {
    //         Navigate('/events');
    //     });
    // };

    // const handleLogout = () => {
    //     auth.signout(() => {
    //         Navigate('/');
    //     });
    // };



    return ( 
        <div className="home">
            <Helmet>
        <title>Home</title>
        <meta name="description" content="Home page" />
        <link rel="canonical" href="/" />
      </Helmet>
            <div className="home__content--box">
                <div className="home__content">
                    <h2>Welcome to TECH NEWBIE!</h2>
                    <h2 className='home__content--text'>Are you a</h2> 
                        <h2><span></span></h2>
                    <p className='home__content--paragraph'> Join our community and help newbies navigate the tech space.</p>
                    <button 
                onClick={() => Navigate('/about')}
                className="signin__btn">Sign in</button>
                </div>
                <div className="home__content--image">
                    {/* <img 
                    style={{width: '400px', height: '400px'}}
                    
                        src={require("../assets/images/community.jpg")}
                         alt="tech" /> */}
                    </div>
            </div>
                
            
        </div>
     );
}
 
export default Home;