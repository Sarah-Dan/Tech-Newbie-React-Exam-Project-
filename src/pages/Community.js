import { Helmet } from "react-helmet-async";

// create a community component
const Community = () => {
  return (
    <div className="community">
        <Helmet>
        <title>Community</title>
        <meta name="description" content="Community space for members." />
        <link rel="canonical" href="/community" />
      </Helmet>
        <h2>Community</h2>
      <h3 className="community__heading">Getting started in the tech industry can be difficult. </h3>
      <div className="community__text">
      <p>
        {" "}
        This is a community for tech newbies. 
        We are here to help you navigate the tech space. 
        We are here to help you find your way. 
        We are here to help you find your place. 
        We are here to help you find your niche. 
        We are here to help you find your tribe. 
        We are here to help you find your people. 
        We are here to help you find your community. {" "}
      </p>
      </div>
    </div>
  );
};

export default Community;
