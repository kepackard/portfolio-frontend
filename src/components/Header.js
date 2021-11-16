import { Link } from "react-router-dom";

function Header(props) {
    return (
        <nav className="nav">
            <Link to="/portfolio">
                <div>Navigation Bar</div>
            </Link>
        </nav>
    );
}

export default Header;