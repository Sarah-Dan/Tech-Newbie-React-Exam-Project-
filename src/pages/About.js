import "../assets/styles/about.css";
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <div className="about">
      <Helmet>
        <title>About</title>
        <meta name="description" content="About" />
        <link rel="canonical" href="/about" />
      </Helmet>
      <h1>What is Tech Newbie?</h1>
      <p className="about__paragraph">
        TECH NEWBIE is a hub for people who are new to the tech industry. It is
        a place where you can learn about the basics of tech and how to get
        started in the industry. This platform helps you navigate the tech space
        with a community of tech professionals, educators and newbies like you.
        Find resources, attend events or connect with techies from over the
        world.
      </p>
    </div>
  );
};

export default About;
