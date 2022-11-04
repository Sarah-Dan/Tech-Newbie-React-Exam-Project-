import { NavLink } from "react-router-dom";
// import { useAuthContext } from "../userAuthContext";
import "../assets/styles/navbar.css";

// create a navbar component
const NavBar = (props) => {
  // get the userauthcontext and re-render any time it changes
  // const auth = useAuthContext();

  return (
    <div className="navbar">
      <div className="navbar__logo">
        <h2>Tech newbie</h2>
      </div>
      {/* <Menu> */}
      <div className="navbar__links">
        <NavLink
          style={({ isActive }) =>
            isActive ? { color: "yellow" } : { color: "white" }
          }
          className="nav__link"
          to="/"
        >
          HOME
        </NavLink>
        <NavLink
          style={({ isActive }) =>
            isActive ? { color: "yellow" } : { color: "white" }
          }
          className="nav__link"
          to="/about"
        >
          ABOUT
        </NavLink>
        {/* {auth.user ? (
          <div>

          </div>  
        } */}
        <NavLink
          style={({ isActive }) =>
            isActive ? { color: "yellow" } : { color: "white" }
          }
          className="nav__link"
          to="/events"
        >
          EVENTS
        </NavLink>
        <NavLink
          style={({ isActive }) =>
            isActive ? { color: "yellow" } : { color: "white" }
          }
          className="nav__link"
          to="/community"
        >
          COMMUNITY
        </NavLink>
      </div>
      {/* </Menu> */}
    </div>
  );
};

export default NavBar;
