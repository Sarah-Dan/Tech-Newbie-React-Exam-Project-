// set up fake userAuthContext using the context API to carry out the fake authentication
import { useContext } from "react";
import AuthContext from "./AuthContext";

// const fakeAuth = {
//     isAuthenticated: false,
//     authenticate(cb) {
//         this.isAuthenticated = true;
//         setTimeout(cb, 100);
//     }
// };

// create a userAuthContext component
const useAuthContext = () => {
    const user = useContext(AuthContext);
    if (user === undefined) {
        throw new Error("useAuth must be used within a AuthProvider");
    }
    return user;
};

export default useAuthContext;







