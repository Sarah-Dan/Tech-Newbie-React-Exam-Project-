import { Link } from "react-router-dom";

// create an event list component
const EventLists = () => {
  // const error = null;
  // const loading = false;
  // {loading && <p>Please wait....Loading...</p>}
  // {error && <p>{error.message}</p>}
  const myEvents = [
    {
      id: 1,
      title: "React Bootcamp",
      location: "Online",
      date: "2022-11-11",
      time: "10:00 WAT",
      description: "Learn React from scratch",
    },
    {
      id: 2,
      title: "Techies Meet and Greet",
      location: "Lagos, Nigeria",
      date: "2022-11-20",
      time: "14:00 WAT",
      description: "Meet other techies in your area",
    },
  ];

  return (
    <div className="event__container">
      <div className="event__list">
        {myEvents.map((event) => {
          const { id, title, location, date, time, description } = event;
          return (
            <div className="event__card" key={id}>
              <h3>Event: {title}</h3>
              <p>Location: {location}</p>
              <p>Date: {date}</p>
              <p>Time: {time}</p>
              <p className="event__description">{description}</p>
              <Link
                to={`/events/${id}`}
                className="event__register"
                target="_blank"
                rel="noreferrer"
              >
                Register
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default EventLists;
