import { useState, useEffect } from 'react';
import { getUser } from './auth.js';
import AuthContext from './AuthContext';

// create a provider component
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
   
    useEffect(() => {
        const currentUser = getUser();
        if (currentUser) {
            setUser(currentUser);
        }
    }, []);

       return (
        <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;