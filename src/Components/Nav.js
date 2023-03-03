import logo from "../Assets/Logo.svg"

function Nav() {
    return (
        <nav className="navbar">
            <div className="Logo">
                <a href="https://youtube.com/">
                    <img src={logo} alt="Home" width="200" />
                </a>
            </div>
            <ul className="menu">
                <li className="navitem">
                    <a className="navlink" href="/">About</a>
                </li>
                <li className="navitem">
                    <a className="navlink" href="https://youtube.com/">Menu</a>
                </li>
                <li className="navitem">
                    <a className="navlink" href="https://youtube.com/">Reservations</a>
                </li>
                <li className="navitem">
                    <a className="navlink" href="https://youtube.com/">Order Online</a>
                </li>
                <li className="navitem login">
                    <a className="navlink" href="https://youtube.com/">Login</a>
                </li>
            </ul>
        </nav>
    )
};

export default Nav;