import { Route, Routes } from "react-router-dom";
import Index from "../pages/Index";
import About from "../pages/About";
import Resume from "../pages/Resume";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";

function Main(props) {
    return (
    <main>
        <Routes>
            <Route exact path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    </main>
    )
}

export default Main;