import { NavLink } from "react-router-dom";
import "../assets/styles/navbar.css";

// create a navbar component
const NavBar = () => {
    return ( 
        <div className="navbar">
            <div className="navbar__logo">
                <h1>Tech newbie</h1>
            </div>
            <NavLink
          style={({ isActive }) =>
            isActive ? { color: "yellow" } : { color: "white" }
          }
          className="nav__link"
          to="/"
        >
          Home
        </NavLink>
        <NavLink
            style={({ isActive }) =>
            isActive ? { color: "yellow" } : { color: "white" }
            }
            className="nav__link"
            to="/about"
        >
            About
        </NavLink>
        <NavLink
          style={({ isActive }) =>
            isActive ? { color: "yellow" } : { color: "white" }
          }
          className="nav__link"
          to="/events"
        >
            Events
        </NavLink>
        <NavLink
          style={({ isActive }) =>
            isActive ? { color: "yellow" } : { color: "white" }
          }
          className="nav__link"
          to="/community"
        >
          Community
        </NavLink>
            </div>

     );
}
 
export default NavBar;