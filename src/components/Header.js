import { Link } from "react-router-dom";

function Header(props) {
    return (
        <header className="outer-header">
            <nav className="nav">
                <Link to="/">
                <h4>HOME</h4>
                </Link>
                <Link to='/about'>
                <h4>ABOUT ME</h4>
                </Link>
                <Link to='/portfolio'>
                <h4>PORTFOLIO</h4>
                </Link>
                <Link to='/resume'>
                <h4>RESUME</h4>
                </Link>
                <Link to='/contact'>
                <h4>CONTACT ME</h4>
                </Link>
            </nav>
        </header>
    );
}

export default Header;