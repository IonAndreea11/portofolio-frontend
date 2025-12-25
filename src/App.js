import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechLoop from "./components/TechLoop";
import HomeProjects from "./components/HomeProjects";
import HomeResume from "./components/HomeResume";
import HomeContact from "./components/HomeContact";
import ScrollToTopButton from "./components/ScrollToTopButton";
import AboutMe from "./pages/AboutMe";
import ProjectDetails from "./pages/ProjectDetails";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <TechLoop />
                <HomeProjects />
                <HomeResume />
                <HomeContact />
                <ScrollToTopButton />
              </>
            }
          />

          <Route path="/about" element={<AboutMe />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
