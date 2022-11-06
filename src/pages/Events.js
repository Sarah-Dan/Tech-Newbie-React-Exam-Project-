// import useAuthContext from '../userAuthContext';
// import { Navigate } from 'react-router-dom';
import EventLists from "../components/EventLists";
import "../assets/styles/events.css";
import { Helmet } from "react-helmet-async";

// const SignUp = () => {
//     const { user } = useAuthContext();
//     if (!user) {
//         return <Navigate to="/signin" />;
//     }
// }

const Events = () => {
  return (
    <div className="events">
      <Helmet>
        <title>Events</title>
        <meta name="description" content="Events for community members" />
        <link rel="canonical" href="/event" />
      </Helmet>
      <h1>Events</h1>
      {/* <SignUp /> */}
      <p>Here are some events that you can attend to learn more about tech.</p>
      <div>
        <EventLists />
      </div>
    </div>
  );
};

export default Events;
