import { NavLink } from "react-router-dom";
import { useAuth } from "../auth";
// import { useAuthContext } from "../userAuthContext";
import "../assets/styles/navbar.css";

// create a navbar component
const NavBar = (props) => {
  const auth = useAuth();

  return (
    <div className="navbar">
      <div className="navbar__logo">TECH NEWBIE</div>

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
        <NavLink
          style={({ isActive }) =>
            isActive ? { color: "yellow" } : { color: "white" }
          }
          className="nav__link"
          to="/profile"
        >
          PROFILE
        </NavLink>
        {auth.user ? (
          <button className="signout__btn" onClick={() => auth.signOut()}>
            SIGN OUT
          </button>
        ) : (
          <NavLink
            style={({ isActive }) =>
              isActive ? { color: "yellow" } : { color: "white" }
            }
            className="nav__link"
            to="/signin"
          >
            SIGN IN
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default NavBar;
// {
//   !auth.user && (
//     <NavLink
//       style={({ isActive }) =>
//         isActive ? { color: "yellow" } : { color: "white" }
//       }
//       className="nav__link"
//       to="/signin"
//     >
//       SIGN IN
//     </NavLink>
//   )
// }
