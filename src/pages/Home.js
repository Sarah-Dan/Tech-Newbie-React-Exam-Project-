import "../assets/styles/home.css";
import { Link, Outlet } from "react-router-dom";
import Community from "../components/Community";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div className="home">
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Home page" />
        <link rel="canonical" href="/" />
      </Helmet>
      <div className="home__content--box">
        <div className="home__content">
          <h1 className="home__content--greeting">Welcome to TECH NEWBIE!</h1>
          <h2 className="home__content--text">Are you a</h2>
          <h2>
            <span></span>
          </h2>
          <p className="home__content--paragraph">
            {" "}
            Join our community and help newbies navigate the tech space.
          </p>
          <Link to="/signup" className="join__btn">
            Join Now
          </Link>
        </div>
        <div>
          <Community />
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Home;
