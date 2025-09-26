import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Outlet/Home";
import About from "./components/Outlet/About";
import Skills from "./components/Outlet/Skills";
import Timeline from "./components/Outlet/Timeline";
import Projects from "./components/Outlet/Projects";
import Languages from "./components/Outlet/Languages";
import Contact from "./components/Outlet/Contact";
import Links from "./components/Outlet/Links";
import Resume from "./components/Outlet/Resume";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="skills" element={<Skills />} />
          <Route path="timeline" element={<Timeline />} />
          <Route path="projects" element={<Projects />} />
          <Route path="links" element={<Links />} />
          <Route path="resume" element={<Resume />} />
          <Route path="languages" element={<Languages />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
