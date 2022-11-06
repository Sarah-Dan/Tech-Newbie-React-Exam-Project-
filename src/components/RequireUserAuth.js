import { useAuth } from '../auth';
import { Navigate, useLocation } from 'react-router-dom';

// create a require user auth component
const RequireUserAuth = ({children}) => {
    const location = useLocation();
    const auth = useAuth();

    if (!auth.user) {
        return <Navigate to="/signin" state={{ path: location.pathname }} />;
    }

    return ( 
        <>{children}</>
     );
}
 
export default RequireUserAuth;

// return <Navigate to="/signin" />;