import { Route, Routes } from "react-router-dom";
import Index from "../pages/Index";
import About from "../pages/About";
import Resume from "../pages/Resume";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";
import { Link } from "react-router-dom";

function Main(props) {
    return (
    <main>
        <Routes>
            <Route path="/portfolio/about" element={<About />} />
            <Route path="/portfolio/resume" element={<Resume />} />
            <Route path="/portfolio/projects" elements={<Portfolio />} />
            <Route path="/portfolio/contact" element={<Contact />} />
        </Routes>
    </main>
    )
}

export default Main;