import { Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
// import { Link, useNavigate } from "react-router-dom";
// import { useAuth, ProvideAuth } from "./userAuthContext";
import { NavBar, Footer, Fallback } from "./components";
import { Home, About, Events, Community, SignUp, Page404 } from "./pages";

// ROOT COMPONENT
function App() {
  return (
    <div className="main">
    <ErrorBoundary FallbackComponent={Fallback}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="community">
            <Route index element={<Community />} />
            <Route path=":id" element={<SignUp />} />
          </Route>
          <Route path="*" element={<Page404 />} />
        </Routes>
        <Footer />
      </ErrorBoundary>
    </div>
  );
}

export default App;
