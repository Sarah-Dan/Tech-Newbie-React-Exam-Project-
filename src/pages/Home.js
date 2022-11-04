import '../assets/styles/home.css';
import { Navigate } from "react-router-dom";
import  useAuthContext  from '../userAuthContext';


const Home = () => {
    const auth = useAuthContext();
    console.log(auth);

    const handleLogin = () => {
        auth.signin(() => {
            Navigate('/events');
        });
    };

    const handleLogout = () => {
        auth.signout(() => {
            Navigate('/');
        });
    };



    return ( 
        <div className="home">
            {/* <h1>Home</h1> */}
            <div className="home__content">
                <div className='home__content--text'>
                    <h1>Getting started in the tech industry can be difficult. </h1>
                    <h3>Are you a <span></span></h3>
                    <p> Join our community and help newbies navigate the tech space.</p>
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