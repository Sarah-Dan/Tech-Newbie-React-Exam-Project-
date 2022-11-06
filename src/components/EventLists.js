// create an event list component

const EventLists = () => {
  const myEvents = [
    {
      id: 1,
      title: "React Bootcamp",
      location: "Online",
      date: "2022-11-11",
      time: "10:00 WAT",
      description: "Learn React from scratch",

      link: "https://www.eventbrite.com/e/react-bootcamp-tickets-1234567890",
    },
    {
      id: 2,
      title: "Techies Meet and Greet",
      location: "Lagos, Nigeria",
      date: "2022-11-20",
      time: "14:00 WAT",
      description: "Meet other techies in your area",

      link: "https://www.eventbrite.com/e/techies-meet-and-greet-tickets-1234567890",
    },
  ];

  return (
    <div className="event__container">
      {/* {loading && <p>Please wait....Loading...</p>}
            {error && <p>{error.message}</p>} */}
      <div className="event__list">
        {myEvents.map((event) => {
          const { id, title, location, date, time, description, link } = event;
          return (
            <div className="event__card" key={id}>
              <h3>Event: {title}</h3>
              <p>Location: {location}</p>
              <p>Date: {date}</p>
              <p>Time: {time}</p>
              <p className="event__description">{description}</p>
              <a
                className="event__register"
                href={link}
                target="_blank"
                rel="noreferrer"
              >
                Register
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default EventLists;
