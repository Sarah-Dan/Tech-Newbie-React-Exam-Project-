import "../assets/styles/page404.css";


const Page404 = () => {
  // create an object for page 404 content
  const error = {
    title: "Page not found",
    message: "Eyyah! this page does no dey o",
    img: "pagenotfound.png"
  };

  return (
    <div className="page404__content">
      <h2 className="page404__title">{error.title}</h2>
      <img
        className="page404__image"
        src={require(`../assets/images/${error.img}`)}
        alt="404"
      />
      <p className="page404__message">{error.message}</p>
      
    </div>
  );
};

export default Page404;
