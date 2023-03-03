import logo2 from "../Assets/Logo 2.png"

function Footer() {
    return (
        <footer>
            <div className="fLogo">
                <a href="https://youtube.com/">
                    <img src={logo2} alt="Logo 2" />
                </a>
            </div>
            <div className="fList fCol">
                <ul>
                    <li className="listTitle">
                        Navigation
                    </li>
                    <li className="fItem">
                        <a className="fLink" href="https://youtube.com/">About</a>
                    </li>
                    <li className="fItem">
                        <a className="fLink" href="https://youtube.com/">Menu</a>
                    </li>
                    <li className="fItem">
                        <a className="fLink" href="https://youtube.com/">Reservations</a>
                    </li>
                    <li className="fItem">
                        <a className="fLink" href="https://youtube.com/">Order Online</a>
                    </li>
                    <li className="fItem">
                        <a className="fLink" href="https://youtube.com/">Login</a>
                    </li>
                </ul>
            </div>
            <div className="fList fCol">
                <ul>
                    <li className="listTitle">
                        Contact
                    </li>
                    <li className="fItem">
                        <a className="fLink" href="https://youtube.com/">Email</a>
                    </li>
                    <li className="fItem">
                        <a className="fLink" href="https://youtube.com/">Phone Number</a>
                    </li>
                    <li className="fItem">
                        <a className="fLink" href="https://youtube.com/">Address</a>
                    </li>
                </ul>
            </div>
            <div className="fList fCol">
                <ul>
                    <li className="listTitle">
                        Socials
                    </li>
                    <li className="fItem">
                        <a className="fLink" href="https://youtube.com/">Instagram</a>
                    </li>
                    <li className="fItem">
                        <a className="fLink" href="https://youtube.com/">Facebook</a>
                    </li>
                    <li className="fItem">
                        <a className="fLink" href="https://youtube.com/">Tik Tok</a>
                    </li>
                </ul>
            </div>
        </footer>
    )
};

export default Footer;