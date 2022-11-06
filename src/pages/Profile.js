import { Helmet } from "react-helmet-async";
import { useAuth } from "../auth";
import { useNavigate } from "react-router-dom";
import EventLists from "../components/EventLists";
import "../assets/styles/profile.css";

// create a profile component
const Profile = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  return (
    <div className="profile__content">
      <Helmet>
        <title>Profile</title>
        <meta name="description" content="Profile page" />
        <link rel="canonical" href="/profile" />
      </Helmet>
      <div>
        <h1>Welcome back! {auth.user}❤️</h1>
      </div>
      <div>
        <p>
          Here are upcoming events to help you learn more about tech and connect
          with other members
        </p>
        <EventLists />
      </div>
    </div>
  );
};

export default Profile;
