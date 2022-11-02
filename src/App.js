import { Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import NavBar from "./components/NavBar";
import Fallback from "./components/Fallback";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import Community from "./pages/Community";
import SignUp from "./pages/SignUp";
import Page404 from "./pages/Page404";

function App() {
  return (
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
  );
}

export default App;
