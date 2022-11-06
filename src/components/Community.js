import "../assets/styles/community.css";
// create a community component
const Community = () => {
  return (
    <div className="community">
      <div className="community__content">
        <div className="community__icons">
          <div>
            <img
              src={require("../assets/images/peopleicon.png")}
              alt="people icon"
              width="100"
              height="100"
            />
            <p>Find your people</p>
          </div>
          <div>
            <img
              src={require("../assets/images/directionicon.png")}
              alt="direction icon"
              width="100"
              height="100"
            />
            <p>Find your way</p>
          </div>
          <div>
            <img
              src={require("../assets/images/tribeicon.png")}
              alt="tribe icon"
              width="100"
              height="100"
            />
            <p>Find your tribe</p>
          </div>
          <div>
            <img
              src={require("../assets/images/nicheicon.png")}
              alt="niche icon"
              width="100"
              height="100"
            />
            <p>Find your niche</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
