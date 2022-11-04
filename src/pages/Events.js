import useAuthContext from '../userAuthContext';
import { Navigate } from 'react-router-dom';

const SignUp = () => {
    const { user } = useAuthContext();
    if (!user) {
        return <Navigate to="/signin" />;
    }
}
    
const Events = () => {
    return ( 
        <div className="events">
            <h1>Events</h1>
            <SignUp />
            <p>Here are some events that you can attend to learn more about tech.</p>
        </div>
     );
}
 
export default Events;