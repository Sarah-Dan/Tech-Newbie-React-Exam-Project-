import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { useAuth } from "../auth";
import "../assets/styles/navbar.css";

// create a navbar component
const NavBar = () => {
  // create a state for menu toggle
  const [click, setClick] = useState(false);

  // create context for auth
  const auth = useAuth();
  const navigate = useNavigate();

  // create a handler for click
  const handleClick = () => {
    setClick(!click);
  };

  // create a handler for signout
  const handleSignOut = () => {
    auth.signOut();
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <NavLink to="/" className="navbar__logo">
          TECH NEWBIE
        </NavLink>

        <ul className={click ? "navbar__menu active" : "navbar__menu"}>
          <li className="navbar__menu--item">
            <NavLink
              to="/"
              style={({ isActive }) =>
                isActive ? { color: "yellow" } : { color: "white" }
              }
              className="nav__link"
              onClick={handleClick}
            >
              HOME
            </NavLink>
          </li>
          <li className="navbar__menu--item">
            <NavLink
              to="/about"
              style={({ isActive }) =>
                isActive ? { color: "yellow" } : { color: "white" }
              }
              className="nav__link"
              onClick={handleClick}
            >
              ABOUT
            </NavLink>
          </li>
          <li className="navbar__menu--item">
            <NavLink
              to="/profile"
              style={({ isActive }) =>
                isActive ? { color: "yellow" } : { color: "white" }
              }
              className="nav__link"
              onClick={handleClick}
            >
              PROFILE
            </NavLink>
          </li>
          <li className="navbar__menu--item">
            {auth.user ? (
              <button className="signout__btn" onClick={handleSignOut}>
                SIGN OUT
              </button>
            ) : (
              <NavLink
                to="/signin"
                style={({ isActive }) =>
                  isActive ? { color: "yellow" } : { color: "white" }
                }
                className="nav__link"
                onClick={handleClick}
              >
                SIGN IN
              </NavLink>
            )}
          </li>
        </ul>
        <div className="navbar__icon" onClick={handleClick}>
          <button>
            {click ? (
              <MdClose
                style={{ color: "#1ab4e8", width: "40px", height: "40px" }}
              />
            ) : (
              <FiMenu
                style={{ color: "#1ab4e8", width: "40px", height: "40px" }}
              />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
