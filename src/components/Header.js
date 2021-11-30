import { Link } from "react-router-dom";

function Header(props) {
    return (
        <header>
            <nav className="nav">
                <Link to="/">
                    <div>HOME</div>
                </Link>
                <Link to='/about'>
                <h4>About Me</h4>
                </Link>
                <Link to='/portfolio'>
                <h4>Portfolio</h4>
                </Link>
                <Link to='/resume'>
                <h4>Resume</h4>
                </Link>
                <Link to='/contact'>
                <h4>Contact Me</h4>
                </Link>
            </nav>
        </header>
    );
}

export default Header;