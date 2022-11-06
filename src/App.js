import { Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { NavBar, Footer, Fallback } from "./components";
import { Home, About, Profile, SignIn, SignUp, Page404 } from "./pages";
import { AuthProvider } from "./auth";
import RequireUserAuth from "./components/RequireUserAuth";

// ROOT COMPONENT
function App() {
  return (
    <div className="main">
    <ErrorBoundary FallbackComponent={Fallback}>
      <AuthProvider>
        <NavBar />
        <Routes>
          <Route path="/" >
            <Route index element={<Home />} />
            <Route path=":id" element={<SignUp />} />
          </Route>
          <Route path="about" element={<About />} />
          <Route path="/profile" element={<RequireUserAuth><Profile /></RequireUserAuth>} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
        <Footer />
      </AuthProvider>
      </ErrorBoundary>
    </div>
  );
}

export default App;
